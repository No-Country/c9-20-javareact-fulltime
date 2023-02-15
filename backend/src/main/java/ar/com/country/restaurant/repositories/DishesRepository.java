package ar.com.country.restaurant.repositories;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.repositories.search.SearchDishRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface DishesRepository extends JpaRepository<Dish, Long>, SearchDishRepository {
//    boolean existsDish(Long id);

}
