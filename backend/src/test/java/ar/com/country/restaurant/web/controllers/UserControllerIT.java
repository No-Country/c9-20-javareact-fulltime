package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.AbstractIntegrationTest;
import ar.com.country.restaurant.dao.entities.User;
import ar.com.country.restaurant.dao.entities.UserRole;
import ar.com.country.restaurant.repositories.UserRepository;
import ar.com.country.restaurant.services.UserService;
import ar.com.country.restaurant.utils.JsonUtils;
import org.junit.jupiter.api.*;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class UserControllerIT extends AbstractIntegrationTest {

    @Autowired
    private UserService userService;

    @Autowired
    @Mock
    private UserRepository userRepository;

    @Autowired
    protected MockMvc mockMvc;

    private User user;

    @BeforeEach
    void init() {
        user = User.builder()
                .dni("12345678A")
                .name("Julio")
                .lastName("Álvarez")
                .phone("+54 999999-9999")
                .email("julion.alvarez@gmail.com")
                .password("12345678")
                .role(UserRole.NORMAL)
                .build();

        String unencryptedPassword = user.getPassword();
        userService.createUser(user);
        user.setPassword(unencryptedPassword);
    }

    @Override
    protected User getRegisteredUserForLogin() {
        return user;
    }

    @AfterEach
    void deleteUsers() {
        userRepository.deleteAll();
    }

    @Nested
    class crudMethods {
        @Test
        @DisplayName("Should return user by id and return 200")
        void getUserById() throws Exception {
            doLogin();
            mockMvc.perform(
                            get("/api/users/" + user.getId())
                                    .headers(authHeader())
                                    .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andDo(print())
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.id").value(user.getId()))
                    .andExpect(jsonPath("$.name").value(user.getName()))
                    .andExpect(jsonPath("$.lastName").value(user.getLastName()))
                    .andExpect(jsonPath("$.email").value(user.getEmail()));
        }

        @Test
        @DisplayName("Should update user and return 200")
        void updateUser() throws Exception {

            doLogin();

            user.setEmail("bobbyfischer@mail.com");
            user.setPhone("+54 999999-9999");
            user.setLastName("Fischer");

            String response = mockMvc.perform(
                            put("/api/users/" + user.getId())
                                    .headers(authHeader())
                                    .contentType(MediaType.APPLICATION_JSON)
                                    .content(JsonUtils.asJsonString(user))
                    )
                    .andDo(print())
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.id").value(user.getId()))
                    .andExpect(jsonPath("$.name").value(user.getName()))
                    .andExpect(jsonPath("$.lastName").value(user.getLastName()))
                    .andExpect(jsonPath("$.email").value(user.getEmail()))
                    .andReturn()
                    .getResponse().getContentAsString();
        }

        @Test
        @DisplayName("Should delete user and return 200")
        void deleteUser() throws Exception {

            doLogin();

            String response = mockMvc.perform(
                            delete("/api/users/" + user.getId())
                                    .headers(authHeader())
                                    .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andDo(print())
                    .andExpect(status().isOk())
                    .andReturn()
                    .getResponse().getContentAsString();

        }
    }
}