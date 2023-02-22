package ar.com.country.restaurant.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.Clock;
import java.time.LocalDate;

import static java.util.Objects.requireNonNullElse;

@Component
public class DateUtils {
    private static Clock clock;

    public static LocalDate today() {
        return LocalDate.now(requireNonNullElse(clock, Clock.systemDefaultZone()));
    }

    public static LocalDate tomorrow() {
        return today().plusDays(1);
    }

    public static LocalDate aWeekInTheFuture() {
        return today().plusDays(7);
    }

    public static LocalDate yesterday() {
        return today().minusDays(1);
    }

    @Autowired
    public void setClock(Clock clock) {
        DateUtils.clock = clock;
    }

}
