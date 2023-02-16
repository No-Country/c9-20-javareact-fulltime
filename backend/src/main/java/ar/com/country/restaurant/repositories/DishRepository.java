package ar.com.country.restaurant.repositories;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.repositories.search.SearchDishRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishRepository extends JpaRepository<Dish, Long>, SearchDishRepository {
//    boolean existsDish(Long id);

}
