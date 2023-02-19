package ar.com.country.restaurant.seeders;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.dao.entities.spec.DishSpec;
import ar.com.country.restaurant.services.DishCategoryService;
import ar.com.country.restaurant.services.DishService;
import ar.com.country.restaurant.web.dto.DishCategoryDTO;
import ar.com.country.restaurant.web.dto.DishDTO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DishesSeed implements CommandLineRunner {

    private final DishService dishService;

    private final DishCategoryService dishCategoryService;

    public DishesSeed(DishService dishService, DishCategoryService dishCategoryService){
        this.dishService = dishService;
        this.dishCategoryService = dishCategoryService;
    }

    @Override
    public void run(String... args) throws Exception {
        // categorias
        DishCategory dishCategory1 = new DishCategory();
        dishCategory1.setName("Pizzas");
        dishCategory1.setImgUrl("https://res.cloudinary.com/doxahduh8/image/upload/v1676594881/Diseño_sin_título_80_1_vahbhd.png");
        DishCategory dishCategory2 = new DishCategory();
        dishCategory2.setName("Pastas");
        dishCategory2.setImgUrl("https://res.cloudinary.com/doxahduh8/image/upload/v1676594879/categoria_pastas_1_uu60cm.png");
        DishCategory dishCategory3 = new DishCategory();
        dishCategory3.setName("Saludables");
        dishCategory3.setImgUrl("https://res.cloudinary.com/doxahduh8/image/upload/v1676594879/Diseño_sin_título_82_1_sobknf.png");
        DishCategory dishCategory4 = new DishCategory();
        dishCategory4.setName("Cafeteria");
        dishCategory4.setImgUrl("https://res.cloudinary.com/doxahduh8/image/upload/v1676594930/Diseño_sin_título_89_1_lbau3n.png");
        DishCategory dishCategory5 = new DishCategory();
        dishCategory5.setName("Postres");
        dishCategory5.setImgUrl("https://res.cloudinary.com/doxahduh8/image/upload/v1676594931/Diseño_sin_título_79_1_yviibk.png");
        DishCategory dishCategory6 = new DishCategory();
        dishCategory6.setName("Churrasqueria");
        dishCategory6.setImgUrl("https://res.cloudinary.com/doxahduh8/image/upload/v1676594931/Dise%C3%B1o_sin_t%C3%ADtulo_88_1_btb96u.png");

        DishCategory saveDishCategory1 = dishCategoryService.createDishCategory(dishCategory1);
        DishCategory saveDishCategory2 = dishCategoryService.createDishCategory(dishCategory2);
        DishCategory saveDishCategory3 = dishCategoryService.createDishCategory(dishCategory3);
        DishCategory saveDishCategory4 = dishCategoryService.createDishCategory(dishCategory4);
        DishCategory saveDishCategory5 = dishCategoryService.createDishCategory(dishCategory5);
        DishCategory saveDishCategory6 = dishCategoryService.createDishCategory(dishCategory6);

        // platillos

        Dish dish_1 = new Dish();
        dish_1.setName("Combo libra");
        dish_1.setDescription("Hamburguesa, lechuga, tomate, cebolla morada, pepino, y cheddar + papas");
        dish_1.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594926/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-15T183907_1_cbjj8f.png");
        dish_1.setPrice(3500D);
        dish_1.setCategory(saveDishCategory6);
        DishSpec dish1 = new DishSpec(dish_1, 6L);

        Dish dish_2 = new Dish();
        dish_2.setName("Tabla I");
        dish_2.setDescription("Carne salteada, aceituna, salame, queso roquefort, queso caprese, salsa picante");
        dish_2.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594925/Dise%C3%B1o_sin_t%C3%ADtulo_90_1_gatcrg.png");
        dish_2.setPrice(2500D);
        dish_2.setCategory(saveDishCategory6);
        DishSpec dish2 = new DishSpec(dish_2, 6L);

        Dish dish_3 = new Dish();
        dish_3.setName("Tabla II");
        dish_3.setDescription("Salame, jamon crudo, queso gruyere, aceitunas mixtas, salsa especial");
        dish_3.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594927/Dise%C3%B1o_sin_t%C3%ADtulo_91_1_ioviex.png");
        dish_3.setPrice(2800D);
        dish_3.setCategory(saveDishCategory6);
        DishSpec dish3 = new DishSpec(dish_3, 6L);

        Dish dish_4 = new Dish();
        dish_4.setName("Tabla III");
        dish_4.setDescription("Salsa picante, salsa cheddar, salsa 4 quesos, choclo asado, mix de chorizos, porcion de papas");
        dish_4.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594925/Dise%C3%B1o_sin_t%C3%ADtulo_92_1_ijfnos.png");
        dish_4.setPrice(4800D);
        dish_4.setCategory(saveDishCategory6);
        DishSpec dish4 = new DishSpec(dish_4, 6L);

        Dish dish_5 = new Dish();
        dish_5.setName("Pizza mixta");
        dish_5.setDescription("Panceta, choclo, aceitunas negras y champiñon");
        dish_5.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594921/pexels-yassir-abbas-12046657_1_xvhuoi.png");
        dish_5.setPrice(1020D);
        dish_5.setCategory(saveDishCategory1);
        DishSpec dish5 = new DishSpec(dish_5, 1L);

        Dish dish_6 = new Dish();
        dish_6.setName("Pizza cantimpalo");
        dish_6.setDescription("Queso muzzarella, cantimpalo y morrón");
        dish_6.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594921/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-16T132343_1_nlhtir.png");
        dish_6.setPrice(1420D);
        dish_6.setCategory(saveDishCategory1);
        DishSpec dish6 = new DishSpec(dish_6, 1L);

        Dish dish_7 = new Dish();
        dish_7.setName("Pizza de rúcula");
        dish_7.setDescription("Queso muzzarella, tomate cherry y rúcula");
        dish_7.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594917/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-16T131849_1_mq6z3d.png");
        dish_7.setPrice(1320D);
        dish_7.setCategory(saveDishCategory1);
        DishSpec dish7 = new DishSpec(dish_7, 1L);

        Dish dish_8 = new Dish();
        dish_8.setName("Pizza de choclo");
        dish_8.setDescription("Queso muzzarella, salsa de choclo, aceitunas negras y tomate");
        dish_8.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594920/choclo_1_1_fkzkn8.png");
        dish_8.setPrice(1720D);
        dish_8.setCategory(saveDishCategory1);
        DishSpec dish8 = new DishSpec(dish_8, 1L);

        Dish dish_9 = new Dish();
        dish_9.setName("Pizza de muzzarella");
        dish_9.setDescription("Queso muzzarella y hojas de albahaca");
        dish_9.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594914/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-16T133745_1_rri4o3.png");
        dish_9.setPrice(1200D);
        dish_9.setCategory(saveDishCategory1);
        DishSpec dish9 = new DishSpec(dish_9, 1L);

        Dish dish_10 = new Dish();
        dish_10.setName("Pizza de especial");
        dish_10.setDescription("Queso muzzarella, aceitunas, panceta, champiñon y verdeo");
        dish_10.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594913/shourav-sheikh-a66sGfOnnqQ-unsplash_1_fetnur.png");
        dish_10.setPrice(1800D);
        dish_10.setCategory(saveDishCategory1);
        DishSpec dish10 = new DishSpec(dish_10, 1L);

        Dish dish_11 = new Dish();
        dish_11.setName("Panchos");
        dish_11.setDescription("Salsa criolla, tomate, lechuga + 3 aderezos");
        dish_11.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594917/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-15T184205_1_uksalm.png");
        dish_11.setPrice(1890D);
        dish_11.setCategory(saveDishCategory6);
        DishSpec dish11 = new DishSpec(dish_11, 6L);

        Dish dish_12 = new Dish();
        dish_12.setName("Papas con cheddar");
        dish_12.setDescription("Bastones de papas, queso cheddar, verdeo y panceta");
        dish_12.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594915/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-16T140448_1_ctpp1u.png");
        dish_12.setPrice(1200D);
        dish_12.setCategory(saveDishCategory6);
        DishSpec dish12 = new DishSpec(dish_12, 6L);

        Dish dish_13 = new Dish();
        dish_13.setName("Tostado especial");
        dish_13.setDescription("Pollo, queso muzzarella y verduras salteadas");
        dish_13.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594915/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-15T184015_1_zjcsdv.png");
        dish_13.setPrice(1300D);
        dish_13.setCategory(saveDishCategory6);
        DishSpec dish13 = new DishSpec(dish_13, 6L);

        Dish dish_14 = new Dish();
        dish_14.setName("Tiramisú");
        dish_14.setDescription("Bizcocho, cacao, mascarpone y cafe");
        dish_14.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594907/Dise%C3%B1o_sin_t%C3%ADtulo_75_1_zjewuh.png");
        dish_14.setPrice(2850D);
        dish_14.setCategory(saveDishCategory5);
        DishSpec dish14 = new DishSpec(dish_14, 5L);

        Dish dish_15 = new Dish();
        dish_15.setName("Lemon pie");
        dish_15.setDescription("Mouse de limon y merengue");
        dish_15.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594906/t_con_fruto_2_1_lle7wp.png");
        dish_15.setPrice(1150D);
        dish_15.setCategory(saveDishCategory5);
        DishSpec dish15 = new DishSpec(dish_15, 5L);

        Dish dish_16 = new Dish();
        dish_16.setName("Brownie");
        dish_16.setDescription("Baño de chocolate + bombón Ferrero");
        dish_16.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594906/vinitha-v-E_uxJrOKw6I-unsplash_1_fgp02z.png");
        dish_16.setPrice(750D);
        dish_16.setCategory(saveDishCategory5);
        DishSpec dish16 = new DishSpec(dish_16, 5L);

        Dish dish_17 = new Dish();
        dish_17.setName("Pancakes de fresas");
        dish_17.setDescription("Pancakes con frutos rojos y banana");
        dish_17.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594903/parvez-azarqaderi-f2LR0IIRd5s-unsplash_1_y3mcyw.png");
        dish_17.setPrice(650D);
        dish_17.setCategory(saveDishCategory5);
        DishSpec dish17 = new DishSpec(dish_17, 5L);

        Dish dish_18 = new Dish();
        dish_18.setName("Pastafrola");
        dish_18.setDescription("Mixta de batata y membrillo");
        dish_18.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594910/t_con_fruto_1_1_lvafpw.png");
        dish_18.setPrice(1350D);
        dish_18.setCategory(saveDishCategory5);
        DishSpec dish18 = new DishSpec(dish_18, 5L);

        Dish dish_19 = new Dish();
        dish_19.setName("Helado");
        dish_19.setDescription("Gusto a elección + frutos rojos");
        dish_19.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594906/t_con_fruto_3_1_yecdq7.png");
        dish_19.setPrice(900D);
        dish_19.setCategory(saveDishCategory5);
        DishSpec dish19 = new DishSpec(dish_19, 5L);

        Dish dish_20 = new Dish();
        dish_20.setName("Ensalada de frutas");
        dish_20.setDescription("Frutos rojos, naranja, durazno, uvas y kiwi");
        dish_20.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594903/t_con_fruto_1_m6zziv.png");
        dish_20.setPrice(750D);
        dish_20.setCategory(saveDishCategory3);
        DishSpec dish20 = new DishSpec(dish_20, 3L);

        Dish dish_21 = new Dish();
        dish_21.setName("Desayuno especial");
        dish_21.setDescription("Medialunas rellenas");
        dish_21.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594895/Dise%C3%B1o_sin_t%C3%ADtulo_97_1_jjtz6f.png");
        dish_21.setPrice(1050D);
        dish_21.setCategory(saveDishCategory4);
        DishSpec dish21 = new DishSpec(dish_21, 4L);

        Dish dish_22 = new Dish();
        dish_22.setName("Waffles de fresas");
        dish_22.setDescription("Waffle, fresas y moras");
        dish_22.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594901/Dise%C3%B1o_sin_t%C3%ADtulo_74_1_xqixti.png");
        dish_22.setPrice(650D);
        dish_22.setCategory(saveDishCategory4);
        DishSpec dish22 = new DishSpec(dish_22, 4L);

        Dish dish_23 = new Dish();
        dish_23.setName("Desayuno de Campo");
        dish_23.setDescription("Tostadas de campo");
        dish_23.setImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594899/Dise%C3%B1o_sin_t%C3%ADtulo_96_1_h7s2hy.png");
        dish_23.setPrice(800D);
        dish_23.setCategory(saveDishCategory4);
        DishSpec dish23 = new DishSpec(dish_23, 4L);

        Dish saveDish1 = dishService.createDish(dish1);
        Dish saveDish2 = dishService.createDish(dish2);
        Dish saveDish3 = dishService.createDish(dish3);
        Dish saveDish4 = dishService.createDish(dish4);
        Dish saveDish5 = dishService.createDish(dish5);
        Dish saveDish6 = dishService.createDish(dish6);
        Dish saveDish7 = dishService.createDish(dish7);
        Dish saveDish8 = dishService.createDish(dish8);
        Dish saveDish9 = dishService.createDish(dish9);
        Dish saveDish10 = dishService.createDish(dish10);
        Dish saveDish11 = dishService.createDish(dish11);
        Dish saveDish12 = dishService.createDish(dish12);
        Dish saveDish13 = dishService.createDish(dish13);
        Dish saveDish14 = dishService.createDish(dish14);
        Dish saveDish15 = dishService.createDish(dish15);
        Dish saveDish16 = dishService.createDish(dish16);
        Dish saveDish17 = dishService.createDish(dish17);
        Dish saveDish18 = dishService.createDish(dish18);
        Dish saveDish19 = dishService.createDish(dish19);
        Dish saveDish20 = dishService.createDish(dish20);
        Dish saveDish21 = dishService.createDish(dish21);
        Dish saveDish22 = dishService.createDish(dish22);
        Dish saveDish23 = dishService.createDish(dish23);

    }
}
