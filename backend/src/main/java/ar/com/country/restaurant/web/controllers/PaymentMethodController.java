package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.PaymentMethod;
import ar.com.country.restaurant.security.SecurityUser;
import ar.com.country.restaurant.services.PaymentMethodService;
import ar.com.country.restaurant.web.dto.PaymentMethodDTO;
import ar.com.country.restaurant.web.mappers.PaymentMethodMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/payment_methods")
@RequiredArgsConstructor
public class PaymentMethodController {
    private final PaymentMethodService paymentMethodService;
    private final PaymentMethodMapper paymentMethodMapper;

    @GetMapping
    public List<PaymentMethodDTO> getPaymentMethodsOfLoggedUser(
            @AuthenticationPrincipal SecurityUser loggedUser
    ) {
        Long userId = loggedUser.getId();
        List<PaymentMethod> result = paymentMethodService.getPaymentMethodsOfUser(userId);
        return paymentMethodMapper.toDtoList(result);
    }

    @GetMapping("/{paymentMethodId}")
    public PaymentMethodDTO getPaymentMethodByIdOfLoggedUser(
            @AuthenticationPrincipal SecurityUser loggedUser,
            @PathVariable Long paymentMethodId
    ) {
        Long userId = loggedUser.getId();
        PaymentMethod result = paymentMethodService.getPaymentMethodById(userId, paymentMethodId);
        return paymentMethodMapper.toDto(result);
    }

    @PostMapping
    public ResponseEntity<PaymentMethodDTO> addPaymentMethodToLoggedUser(
            @AuthenticationPrincipal SecurityUser loggedUser,
            @RequestBody @Valid PaymentMethodDTO paymentMethodDto
    ) {
        Long userId = loggedUser.getId();
        PaymentMethod providedPaymentMethod = paymentMethodMapper.toEntity(paymentMethodDto);
        PaymentMethod result = paymentMethodService.addPaymentMethodToUser(userId, providedPaymentMethod);
        return ResponseEntity
                .created(URI.create("/payment_methods/" + result.getId()))
                .body(paymentMethodMapper.toDto(result));

    }

    @PutMapping("/{paymentMethodId}")
    public PaymentMethodDTO updatePaymentMethodOfLoggedUser(
            @AuthenticationPrincipal SecurityUser loggedUser,
            @PathVariable Long paymentMethodId,
            @RequestBody @Valid PaymentMethodDTO paymentMethodDto
    ) {
        Long userId = loggedUser.getId();
        PaymentMethod updatedPaymentMethod = paymentMethodMapper.toEntity(paymentMethodDto);
        PaymentMethod result = paymentMethodService.updatePaymentMethod(userId, paymentMethodId, updatedPaymentMethod);
        return paymentMethodMapper.toDto(result);
    }

    @DeleteMapping("/{paymentMethodId}")
    public PaymentMethodDTO deletePaymentMethod(
            @AuthenticationPrincipal SecurityUser loggedUser,
            @PathVariable Long paymentMethodId
    ) {
        Long userId = loggedUser.getId();
        PaymentMethod result = paymentMethodService.deletePaymentMethod(userId, paymentMethodId);
        return paymentMethodMapper.toDto(result);
    }

}
