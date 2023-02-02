package com.demo.react;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;

@Configuration
public class SpringSecurityConfig {
  @Value("${frontend.url}")
  private String frontendUrl;




}
