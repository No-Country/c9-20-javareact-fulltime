package ar.com.country.restaurant.repositories;

import ar.com.country.restaurant.dao.entities.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface DishesRepository extends JpaRepository<Dish, Long> {
//    boolean existsDish(Long id);

}
