package ar.com.country.restaurant.repositories;

import ar.com.country.restaurant.dao.entities.DishCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DishCategoryRepository extends JpaRepository<DishCategory, Long> {

    @Query("select dc from DishCategory dc order by dc.name asc")
    List<DishCategory> findAllDishCategoriesByOrderByNameAsc();

    // to implement in DishesRepository

//    @Query("select d from Dish d where d.dishCategory.id = ?1")
//    List<Dish> findDishesByDishCategoryId(Long id);
//
//    @Query("select d from Dish d where d.dishCategory.name = ?1")
//    List<Dish> findDishesByDishCategoryName(String name);

}
