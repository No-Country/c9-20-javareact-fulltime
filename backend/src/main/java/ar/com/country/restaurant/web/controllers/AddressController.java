package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.Address;
import ar.com.country.restaurant.security.SecurityUser;
import ar.com.country.restaurant.services.AddressService;
import ar.com.country.restaurant.web.dto.AddressDTO;
import ar.com.country.restaurant.web.mappers.AddressMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/addresses")
@RequiredArgsConstructor
public class AddressController {
    private final AddressService addressService;
    private final AddressMapper addressMapper;

    @GetMapping
    public List<AddressDTO> getAddressOfLoggedUser(
            @AuthenticationPrincipal SecurityUser loggedUser
    ) {
        Long userId = loggedUser.getId();
        List<Address> addressesOfUser = addressService.getAddressesOfUser(userId);
        return addressMapper.toDtoList(addressesOfUser);
    }

    @GetMapping("/{addressId}")
    public AddressDTO getAddressById(
            @AuthenticationPrincipal SecurityUser loggedUser,
            @PathVariable Long addressId
    ) {
        Long userId = loggedUser.getId();
        Address address = addressService.getAddressById(userId, addressId);
        return addressMapper.toDto(address);
    }

    @PostMapping
    public ResponseEntity<AddressDTO> addAddressToUser(
            @AuthenticationPrincipal SecurityUser loggedUser,
            @RequestBody @Valid AddressDTO addressDto
    ) {
        Long userId = loggedUser.getId();
        Address providedAddress = addressMapper.toEntity(addressDto);
        Address result = addressService.addAddressToUser(userId, providedAddress);
        return ResponseEntity
                .created(URI.create("/addresses/" + result.getId()))
                .body(addressMapper.toDto(result));
    }

    @PutMapping("/{addressId}")
    public AddressDTO updateAddress(
            @AuthenticationPrincipal SecurityUser loggedUser,
            @PathVariable Long addressId,
            @RequestBody @Valid AddressDTO payload
    ) {
        Long userId = loggedUser.getId();
        Address updatedAddress = addressMapper.toEntity(payload);
        Address result = addressService.updateAddress(userId, addressId, updatedAddress);
        return addressMapper.toDto(result);
    }

    @DeleteMapping("/{addressId}")
    public AddressDTO deleteAddress(
            @AuthenticationPrincipal SecurityUser loggedUser,
            @PathVariable Long addressId
    ) {
        Long userId = loggedUser.getId();
        Address result = addressService.deleteAddress(userId, addressId);
        return addressMapper.toDto(result);
    }

}
