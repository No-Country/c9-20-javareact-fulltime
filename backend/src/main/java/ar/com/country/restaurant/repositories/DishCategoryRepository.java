package ar.com.country.restaurant.repositories;

import ar.com.country.restaurant.dao.entities.DishCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishCategoryRepository extends JpaRepository<DishCategory, Long> {

    @Query("select dc from DishCategory dc order by dc.name asc")
    List<DishCategory> findAllDishCategoriesByOrderByNameAsc();

    boolean existsByName(String name);

}
