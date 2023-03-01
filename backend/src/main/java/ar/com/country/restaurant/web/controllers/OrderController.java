package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.Order;
import ar.com.country.restaurant.security.SecurityUser;
import ar.com.country.restaurant.services.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static ar.com.country.restaurant.util.ApiDocsConstants.*;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
@Tag(name = "Orders", description = "API to manage orders")
@ApiResponses({
        @ApiResponse(ref = BAD_REQUEST_RESPONSE_REF, responseCode = "400"),
        @ApiResponse(ref = UNAUTHORIZED_RESPONSE_REF, responseCode = "401"),
        @ApiResponse(ref = INTERNAL_SERVER_ERROR_RESPONSE_REF, responseCode = "500")
})
public class OrderController {

    private final OrderService orderService;

    @Operation(summary = "Returns the orders of the user with the given id")
    @ApiResponse(responseCode = "200", description = "OK", content = {
        @Content(array = @ArraySchema(schema = @Schema(implementation = Order.class)))
    })
    @GetMapping("/{userId}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Order> getOrdersOfUser(@PathVariable Long userId) {
        return orderService.getOrdersOfUser(userId);
    }

    @Operation(summary = "Returns the order of the logged user")
    @ApiResponse(responseCode = "200", description = "OK", content = {
        @Content(schema = @Schema(implementation = Order.class))
    })
    @GetMapping
    public Order getOrderOfLoggedUser(
            @AuthenticationPrincipal SecurityUser loggedUser
    ) {
        Long userId = loggedUser.getId();
        return orderService.getOrderOfUser(userId); // return null (see OrderServiceImpl.java)
    }

    @Operation(summary = "Creates an order for the logged user")
    @ApiResponse(responseCode = "200", description = "OK", content = {
        @Content(schema = @Schema(implementation = Order.class))
    })
    @PostMapping
    public Order createOrder(
            @AuthenticationPrincipal SecurityUser loggedUser,
            @RequestParam Long paymentMethodId
    ) {
        Long userId = loggedUser.getId();
        return orderService.createOrder(userId, paymentMethodId);
    }

    @Operation(summary = "Cancels the order of the logged user")
    @ApiResponse(responseCode = "200", description = "OK")
    @PostMapping("/cancel")
    public void cancelOrder(
            @AuthenticationPrincipal SecurityUser loggedUser
    ) {
        Long userId = loggedUser.getId();
        Order order = orderService.getOrderOfUser(userId);
        orderService.cancelOrder(order);
    }
}
