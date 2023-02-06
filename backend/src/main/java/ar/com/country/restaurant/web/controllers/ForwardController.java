package ar.com.country.restaurant.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {

    @RequestMapping(value = "/{_:^(?!index[.]html|api).+$}") // si no tiene /api
    public String forward() {
        return "forward:/";
    }

}
