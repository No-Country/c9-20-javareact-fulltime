package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.AbstractIntegrationTest;
import ar.com.country.restaurant.dao.entities.User;
import ar.com.country.restaurant.dao.entities.UserRole;
import ar.com.country.restaurant.repositories.UserRepository;
import ar.com.country.restaurant.services.UserService;
import ar.com.country.restaurant.utils.JsonUtils;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.*;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.test.web.servlet.MockMvc;

import java.time.Clock;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class UserControllerTest extends AbstractIntegrationTest {

    @Autowired
    private UserService userService;

    @Autowired
    @Mock
    private UserRepository userRepository;

    @MockBean(name = "tokenEncoderClock")
    private Clock clock;

    @Autowired
    protected MockMvc mockMvc;

    @Autowired
    private JwtDecoder accessTokenDecoder;

    @Autowired
    @Qualifier("jwtRefreshTokenDecoder")
    private JwtDecoder refreshTokenDecoder;

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

        Clock defaultClock = Clock.systemDefaultZone();
        given(clock.instant()).willReturn(defaultClock.instant());
        given(clock.getZone()).willReturn(defaultClock.getZone());
    }

    @AfterEach
    void deleteUsers() {
        userRepository.deleteAll();
    }

    @Nested
    class crudMethods {
        @Test
        @DisplayName("Should return user created by id and return 200")
        void getUserById() throws Exception {
            String response = mockMvc.perform(
                            get("/api/user/" + user.getId())
                                    .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andDo(print())
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.id").value(user.getId()))
                    .andExpect(jsonPath("$.email").value(user.getEmail()))
                    .andReturn()
                    .getResponse().getContentAsString();
        }

        @Test
        @DisplayName("Should update user and return 200")
        void updateUser() throws Exception {

            user.setEmail("bobbyfischer@mail.com");
            user.setPhone("+54 999999-9999");
            user.setLastName("Fischer");

            String response = mockMvc.perform(
                            put("/api/user/" + user.getId())
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

            String response = mockMvc.perform(
                            delete("/api/user/" + user.getId())
                                    .contentType(MediaType.APPLICATION_JSON)
                    )
                    .andDo(print())
                    .andExpect(status().isOk())
                    .andReturn()
                    .getResponse().getContentAsString();

        }
    }

    @Test
    @DisplayName("Register should work with valid user")
    void registeringUser() throws Exception {
        User newUser = createUnregisteredDummyUser();

        String response = mockMvc.perform(
                        post("/api/register")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(JsonUtils.asJsonString(newUser))
                )
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.email").value("ricardoibarra2044@gmail.com"))
                .andExpect(jsonPath("$.accessToken").exists())
                .andExpect(jsonPath("$.refreshToken").exists())
                .andReturn()
                .getResponse().getContentAsString();

        String accessToken = JsonPath.read(response, "$.accessToken");
        String refreshToken = JsonPath.read(response, "$.refreshToken");

        assertValidAccessToken(accessToken);
        assertValidRefreshToken(refreshToken);
    }

    private void assertValidAccessToken(String token) {
        assertValidToken(token, accessTokenDecoder);
    }

    private void assertValidRefreshToken(String token) {
        assertValidToken(token, refreshTokenDecoder);
    }

    private void assertValidToken(String token, JwtDecoder decoder) {
        try {
            decoder.decode(token);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private User createUnregisteredDummyUser() {
        return User.builder()
                .dni("123456789BC")
                .name("Nicolás")
                .lastName("C. Ibarra")
                .email("ricardoibarra2044@gmail.com")
                .password("password12345")
                .phone("+52 9999999999")
                .role(UserRole.NORMAL)
                .build();
    }
}