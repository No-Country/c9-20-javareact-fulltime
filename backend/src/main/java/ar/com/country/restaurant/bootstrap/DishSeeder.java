package ar.com.country.restaurant.bootstrap;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.dao.entities.DishImage;
import ar.com.country.restaurant.dao.entities.spec.DishCategorySpec;
import ar.com.country.restaurant.dao.entities.spec.DishSpec;
import ar.com.country.restaurant.services.DishCategoryService;
import ar.com.country.restaurant.services.DishService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

@Component
@RequiredArgsConstructor
@Profile("seeder")
public class DishSeeder implements CommandLineRunner {
    private final DishService dishService;
    private final DishCategoryService dishCategoryService;

    @Override
    @Transactional
    public void run(String... args) {
        // Categorías
        DishCategory dishCategory1 = new DishCategory();
        dishCategory1.setName("Pizzas");
        dishCategory1.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594881/Diseño_sin_título_80_1_vahbhd.png"));

        DishCategory dishCategory2 = new DishCategory();
        dishCategory2.setName("Pastas");
        dishCategory2.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594879/categoria_pastas_1_uu60cm.png"));

        DishCategory dishCategory3 = new DishCategory();
        dishCategory3.setName("Saludables");
        dishCategory3.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594879/Diseño_sin_título_82_1_sobknf.png"));

        DishCategory dishCategory4 = new DishCategory();
        dishCategory4.setName("Cafeteria");
        dishCategory4.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594930/Diseño_sin_título_89_1_lbau3n.png"));

        DishCategory dishCategory5 = new DishCategory();
        dishCategory5.setName("Postres");
        dishCategory5.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594931/Diseño_sin_título_79_1_yviibk.png"));

        DishCategory dishCategory6 = new DishCategory();
        dishCategory6.setName("Churrasqueria");
        dishCategory6.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594931/Dise%C3%B1o_sin_t%C3%ADtulo_88_1_btb96u.png"));

        DishCategory saveDishCategory1 = dishCategoryService.createDishCategory(new DishCategorySpec(dishCategory1));
        DishCategory saveDishCategory2 = dishCategoryService.createDishCategory(new DishCategorySpec(dishCategory2));
        DishCategory saveDishCategory3 = dishCategoryService.createDishCategory(new DishCategorySpec(dishCategory3));
        DishCategory saveDishCategory4 = dishCategoryService.createDishCategory(new DishCategorySpec(dishCategory4));
        DishCategory saveDishCategory5 = dishCategoryService.createDishCategory(new DishCategorySpec(dishCategory5));
        DishCategory saveDishCategory6 = dishCategoryService.createDishCategory(new DishCategorySpec(dishCategory6));

        // Platillos
        Dish dish_1 = new Dish();
        dish_1.setName("Combo libra");
        dish_1.setDescription("Hamburguesa, lechuga, tomate, cebolla morada, pepino, y cheddar + papas");
        dish_1.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594926/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-15T183907_1_cbjj8f.png"));
        dish_1.setPrice(3500D);
        dish_1.setCategory(saveDishCategory6);
        dish_1.setPortionPerUnit(1);
        dish_1.setPeople(1);
        DishSpec dish1 = new DishSpec(dish_1, 6L);

        Dish dish_2 = new Dish();
        dish_2.setName("Tabla I");
        dish_2.setDescription("Carne salteada, aceituna, salame, queso roquefort, queso caprese, salsa picante");
        dish_2.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594925/Dise%C3%B1o_sin_t%C3%ADtulo_90_1_gatcrg.png"));
        dish_2.setPrice(2500D);
        dish_2.setCategory(saveDishCategory6);
        dish_2.setPortionPerUnit(1);
        dish_2.setPeople(1);
        DishSpec dish2 = new DishSpec(dish_2, 6L);

        Dish dish_3 = new Dish();
        dish_3.setName("Tabla II");
        dish_3.setDescription("Salame, jamon crudo, queso gruyere, aceitunas mixtas, salsa especial");
        dish_3.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594927/Dise%C3%B1o_sin_t%C3%ADtulo_91_1_ioviex.png"));
        dish_3.setPrice(2800D);
        dish_3.setCategory(saveDishCategory6);
        dish_3.setPortionPerUnit(1);
        dish_3.setPeople(1);
        DishSpec dish3 = new DishSpec(dish_3, 6L);

        Dish dish_4 = new Dish();
        dish_4.setName("Tabla III");
        dish_4.setDescription("Salsa picante, salsa cheddar, salsa 4 quesos, choclo asado, mix de chorizos, porcion de papas");
        dish_4.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594925/Dise%C3%B1o_sin_t%C3%ADtulo_92_1_ijfnos.png"));
        dish_4.setPrice(4800D);
        dish_4.setCategory(saveDishCategory6);
        dish_4.setPortionPerUnit(1);
        dish_4.setPeople(1);
        DishSpec dish4 = new DishSpec(dish_4, 6L);

        Dish dish_5 = new Dish();
        dish_5.setName("Pizza mixta");
        dish_5.setDescription("Panceta, choclo, aceitunas negras y champiñon");
        dish_5.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594921/pexels-yassir-abbas-12046657_1_xvhuoi.png"));
        dish_5.setPrice(1020D);
        dish_5.setCategory(saveDishCategory1);
        dish_5.setPortionPerUnit(1);
        dish_5.setPeople(1);
        DishSpec dish5 = new DishSpec(dish_5, 1L);

        Dish dish_6 = new Dish();
        dish_6.setName("Pizza cantimpalo");
        dish_6.setDescription("Queso muzzarella, cantimpalo y morrón");
        dish_6.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594921/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-16T132343_1_nlhtir.png"));
        dish_6.setPrice(1420D);
        dish_6.setCategory(saveDishCategory1);
        dish_6.setPortionPerUnit(8);
        dish_6.setPeople(2);
        DishSpec dish6 = new DishSpec(dish_6, 1L);

        Dish dish_7 = new Dish();
        dish_7.setName("Pizza de rúcula");
        dish_7.setDescription("Queso muzzarella, tomate cherry y rúcula");
        dish_7.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594917/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-16T131849_1_mq6z3d.png"));
        dish_7.setPrice(1320D);
        dish_7.setCategory(saveDishCategory1);
        dish_7.setPortionPerUnit(8);
        dish_7.setPeople(2);
        DishSpec dish7 = new DishSpec(dish_7, 1L);

        Dish dish_8 = new Dish();
        dish_8.setName("Pizza de choclo");
        dish_8.setDescription("Queso muzzarella, salsa de choclo, aceitunas negras y tomate");
        dish_8.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594920/choclo_1_1_fkzkn8.png"));
        dish_8.setPrice(1720D);
        dish_8.setCategory(saveDishCategory1);
        dish_8.setPortionPerUnit(8);
        dish_8.setPeople(2);
        DishSpec dish8 = new DishSpec(dish_8, 1L);

        Dish dish_9 = new Dish();
        dish_9.setName("Pizza de muzzarella");
        dish_9.setDescription("Queso muzzarella y hojas de albahaca");
        dish_9.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594914/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-16T133745_1_rri4o3.png"));
        dish_9.setPrice(1200D);
        dish_9.setCategory(saveDishCategory1);
        dish_9.setPortionPerUnit(8);
        dish_9.setPeople(2);
        DishSpec dish9 = new DishSpec(dish_9, 1L);

        Dish dish_10 = new Dish();
        dish_10.setName("Pizza de especial");
        dish_10.setDescription("Queso muzzarella, aceitunas, panceta, champiñon y verdeo");
        dish_10.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594913/shourav-sheikh-a66sGfOnnqQ-unsplash_1_fetnur.png"));
        dish_10.setPrice(1800D);
        dish_10.setCategory(saveDishCategory1);
        dish_10.setPortionPerUnit(8);
        dish_10.setPeople(2);
        DishSpec dish10 = new DishSpec(dish_10, 1L);

        Dish dish_11 = new Dish();
        dish_11.setName("Panchos");
        dish_11.setDescription("Salsa criolla, tomate, lechuga + 3 aderezos");
        dish_11.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594917/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-15T184205_1_uksalm.png"));
        dish_11.setPrice(1890D);
        dish_11.setCategory(saveDishCategory6);
        dish_11.setPortionPerUnit(4);
        dish_11.setPeople(1);
        DishSpec dish11 = new DishSpec(dish_11, 6L);

        Dish dish_12 = new Dish();
        dish_12.setName("Papas con cheddar");
        dish_12.setDescription("Bastones de papas, queso cheddar, verdeo y panceta");
        dish_12.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594915/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-16T140448_1_ctpp1u.png"));
        dish_12.setPrice(1200D);
        dish_12.setCategory(saveDishCategory6);
        dish_12.setPortionPerUnit(10);
        dish_12.setPeople(2);
        DishSpec dish12 = new DishSpec(dish_12, 6L);

        Dish dish_13 = new Dish();
        dish_13.setName("Tostado especial");
        dish_13.setDescription("Pollo, queso muzzarella y verduras salteadas");
        dish_13.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594915/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-15T184015_1_zjcsdv.png"));
        dish_13.setPrice(1300D);
        dish_13.setCategory(saveDishCategory6);
        dish_13.setPortionPerUnit(1);
        dish_13.setPeople(1);
        DishSpec dish13 = new DishSpec(dish_13, 6L);

        Dish dish_14 = new Dish();
        dish_14.setName("Tiramisú");
        dish_14.setDescription("Bizcocho, cacao, mascarpone y cafe");
        dish_14.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594907/Dise%C3%B1o_sin_t%C3%ADtulo_75_1_zjewuh.png"));
        dish_14.setPrice(2850D);
        dish_14.setCategory(saveDishCategory5);
        dish_14.setPortionPerUnit(1);
        dish_14.setPeople(1);
        DishSpec dish14 = new DishSpec(dish_14, 5L);

        Dish dish_15 = new Dish();
        dish_15.setName("Lemon pie");
        dish_15.setDescription("Mouse de limon y merengue");
        dish_15.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594906/t_con_fruto_2_1_lle7wp.png"));
        dish_15.setPrice(1150D);
        dish_15.setCategory(saveDishCategory5);
        dish_15.setPortionPerUnit(1);
        dish_15.setPeople(4);
        DishSpec dish15 = new DishSpec(dish_15, 5L);

        Dish dish_16 = new Dish();
        dish_16.setName("Brownie");
        dish_16.setDescription("Baño de chocolate + bombón Ferrero");
        dish_16.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594906/vinitha-v-E_uxJrOKw6I-unsplash_1_fgp02z.png"));
        dish_16.setPrice(750D);
        dish_16.setCategory(saveDishCategory5);
        dish_16.setPortionPerUnit(1);
        dish_16.setPeople(1);
        DishSpec dish16 = new DishSpec(dish_16, 5L);

        Dish dish_17 = new Dish();
        dish_17.setName("Pancakes de fresas");
        dish_17.setDescription("Pancakes con frutos rojos y banana");
        dish_17.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594903/parvez-azarqaderi-f2LR0IIRd5s-unsplash_1_y3mcyw.png"));
        dish_17.setPrice(650D);
        dish_17.setCategory(saveDishCategory5);
        dish_17.setPortionPerUnit(1);
        dish_17.setPeople(1);
        DishSpec dish17 = new DishSpec(dish_17, 5L);

        Dish dish_18 = new Dish();
        dish_18.setName("Pastafrola");
        dish_18.setDescription("Mixta de batata y membrillo");
        dish_18.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594910/t_con_fruto_1_1_lvafpw.png"));
        dish_18.setPrice(1350D);
        dish_18.setCategory(saveDishCategory5);
        dish_18.setPortionPerUnit(1);
        dish_18.setPeople(1);
        DishSpec dish18 = new DishSpec(dish_18, 5L);

        Dish dish_19 = new Dish();
        dish_19.setName("Helado");
        dish_19.setDescription("Gusto a elección + frutos rojos");
        dish_19.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594906/t_con_fruto_3_1_yecdq7.png"));
        dish_19.setPrice(900D);
        dish_19.setCategory(saveDishCategory5);
        dish_19.setPortionPerUnit(1);
        dish_19.setPeople(1);
        DishSpec dish19 = new DishSpec(dish_19, 5L);

        Dish dish_20 = new Dish();
        dish_20.setName("Ensalada de frutas");
        dish_20.setDescription("Frutos rojos, naranja, durazno, uvas y kiwi");
        dish_20.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594903/t_con_fruto_1_m6zziv.png"));
        dish_20.setPrice(750D);
        dish_20.setCategory(saveDishCategory3);
        dish_20.setPortionPerUnit(1);
        dish_20.setPeople(1);
        DishSpec dish20 = new DishSpec(dish_20, 3L);

        Dish dish_21 = new Dish();
        dish_21.setName("Desayuno especial");
        dish_21.setDescription("Medialunas rellenas");
        dish_21.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594895/Dise%C3%B1o_sin_t%C3%ADtulo_97_1_jjtz6f.png"));
        dish_21.setPrice(1050D);
        dish_21.setCategory(saveDishCategory4);
        dish_21.setPortionPerUnit(1);
        dish_21.setPeople(1);
        DishSpec dish21 = new DishSpec(dish_21, 4L);

        Dish dish_22 = new Dish();
        dish_22.setName("Waffles de fresas");
        dish_22.setDescription("Waffle, fresas y moras");
        dish_22.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594901/Dise%C3%B1o_sin_t%C3%ADtulo_74_1_xqixti.png"));
        dish_22.setPrice(650D);
        dish_22.setCategory(saveDishCategory4);
        dish_22.setPortionPerUnit(5);
        dish_22.setPeople(1);
        DishSpec dish22 = new DishSpec(dish_22, 4L);

        Dish dish_23 = new Dish();
        dish_23.setName("Desayuno de Campo");
        dish_23.setDescription("Tostadas de campo");
        dish_23.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594899/Dise%C3%B1o_sin_t%C3%ADtulo_96_1_h7s2hy.png"));
        dish_23.setPrice(800D);
        dish_23.setCategory(saveDishCategory4);
        dish_23.setPortionPerUnit(1);
        dish_23.setPeople(1);
        DishSpec dish23 = new DishSpec(dish_23, 4L);

        Dish dish_24 = new Dish();
        dish_24.setName("Desayuno clásico");
        dish_24.setDescription("Medialunas integrales");
        dish_24.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594899/Dise%C3%B1o_sin_t%C3%ADtulo_98_1_baphfy.png"));
        dish_24.setPrice(850D);
        dish_24.setCategory(saveDishCategory4);
        dish_24.setPortionPerUnit(1);
        dish_24.setPeople(1);
        DishSpec dish24 = new DishSpec(dish_24, 4L);

        Dish dish_25 = new Dish();
        dish_25.setName("Mix primavera");
        dish_25.setDescription("Yogurt natural, frutos rojos, avenas, banana y durazno");
        dish_25.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594902/tetiana-bykovets-T4Q2NX1GP4w-unsplash_1_zvce4h.png"));
        dish_25.setPrice(850D);
        dish_25.setCategory(saveDishCategory4);
        dish_25.setPortionPerUnit(1);
        dish_25.setPeople(1);
        DishSpec dish25 = new DishSpec(dish_25, 4L);

        Dish dish_26 = new Dish();
        dish_26.setName("Ensalada primavera");
        dish_26.setDescription("Papas, palta, pepino, choclo, garbanzos y zanahoria asada");
        dish_26.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594894/Dise%C3%B1o_sin_t%C3%ADtulo_77_1_kgbwpm.png"));
        dish_26.setPrice(1050D);
        dish_26.setCategory(saveDishCategory3);
        dish_26.setPortionPerUnit(1);
        dish_26.setPeople(1);
        DishSpec dish26 = new DishSpec(dish_26, 3L);

        Dish dish_27 = new Dish();
        dish_27.setName("Ensalada mixta");
        dish_27.setDescription("Huevo, rúcula, pollo, tomate, zanahoria salteada");
        dish_27.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594894/Ellipse_12_k7tqxn.png"));
        dish_27.setPrice(840D);
        dish_27.setCategory(saveDishCategory3);
        dish_27.setPortionPerUnit(1);
        dish_27.setPeople(1);
        DishSpec dish27 = new DishSpec(dish_27, 3L);

        Dish dish_28 = new Dish();
        dish_28.setName("Ensalada verano");
        dish_28.setDescription("Mix de vegetales + carne");
        dish_28.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594901/tania-melnyczuk-xeTv9N2FjXA-unsplash_1_dlasor.png"));
        dish_28.setPrice(900D);
        dish_28.setCategory(saveDishCategory3);
        dish_28.setPortionPerUnit(1);
        dish_28.setPeople(1);
        DishSpec dish28 = new DishSpec(dish_28, 3L);

        Dish dish_29 = new Dish();
        dish_29.setName("Ensalada griega");
        dish_29.setDescription("Mix de vegetales + pollo");
        dish_29.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594895/anh-nguyen-kcA-c3f_3FE-unsplash_1_upsvn9.png"));
        dish_29.setPrice(800D);
        dish_29.setCategory(saveDishCategory3);
        dish_29.setPortionPerUnit(1);
        dish_29.setPeople(1);
        DishSpec dish29 = new DishSpec(dish_29, 3L);

        Dish dish_30 = new Dish();
        dish_30.setName("Sopa de espinaca");
        dish_30.setDescription("Espinaca, acelga, papas y huevo");
        dish_30.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594889/t_con_fruto_5_1_xlwoyn.png"));
        dish_30.setPrice(500D);
        dish_30.setCategory(saveDishCategory3);
        dish_30.setPortionPerUnit(1);
        dish_30.setPeople(1);
        DishSpec dish30 = new DishSpec(dish_30, 3L);

        Dish dish_31 = new Dish();
        dish_31.setName("Sopa clásica");
        dish_31.setDescription("Mix de vegetales");
        dish_31.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594888/t_con_fruto_4_1_ng44of.png"));
        dish_31.setPrice(500D);
        dish_31.setCategory(saveDishCategory3);
        dish_31.setPortionPerUnit(1);
        dish_31.setPeople(1);
        DishSpec dish31 = new DishSpec(dish_31, 3L);

        Dish dish_32 = new Dish();
        dish_32.setName("Tallarines");
        dish_32.setDescription("Tomate cherry, albahaca y aceitunas negras");
        dish_32.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594883/plato_pasta_1_x6nev6.png"));
        dish_32.setPrice(950D);
        dish_32.setCategory(saveDishCategory2);
        dish_32.setPortionPerUnit(1);
        dish_32.setPeople(1);
        DishSpec dish32 = new DishSpec(dish_32, 2L);

        Dish dish_33 = new Dish();
        dish_33.setName("Ñoquis");
        dish_33.setDescription("Salsa de tomate, queso crema y albahaca");
        dish_33.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594883/nathalie-klippert-c8anfbnfPRo-unsplash_1_qqedns.png"));
        dish_33.setPrice(950D);
        dish_33.setCategory(saveDishCategory2);
        dish_33.setPortionPerUnit(1);
        dish_33.setPeople(1);
        DishSpec dish33 = new DishSpec(dish_33, 2L);

        Dish dish_34 = new Dish();
        dish_34.setName("Ravioles");
        dish_34.setDescription("Salsa de calabaza y perejil");
        dish_34.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594879/nicolas-cuestas-xc-067-UsOQ-unsplash_1_txttcz.png"));
        dish_34.setPrice(950D);
        dish_34.setCategory(saveDishCategory2);
        dish_34.setPortionPerUnit(1);
        dish_34.setPeople(1);
        DishSpec dish34 = new DishSpec(dish_34, 2L);

        Dish dish_35 = new Dish();
        dish_35.setName("Ravioles");
        dish_35.setDescription("Salsa de calabaza y perejil");
        dish_35.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594885/yoav-aziz-EGRJe6BHG9I-unsplash_1_vux1iz.png"));
        dish_35.setPrice(950D);
        dish_35.setCategory(saveDishCategory2);
        dish_35.setPortionPerUnit(1);
        dish_35.setPeople(1);
        DishSpec dish35 = new DishSpec(dish_35, 2L);

        Dish dish_36 = new Dish();
        dish_36.setName("Mostaccioli");
        dish_36.setDescription("Salsa de tomate, aceitunas y albahaca");
        dish_36.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594884/t_con_fruto_6_1_sisjhr.png"));
        dish_36.setPrice(950D);
        dish_36.setCategory(saveDishCategory2);
        dish_36.setPortionPerUnit(1);
        dish_36.setPeople(1);
        DishSpec dish36 = new DishSpec(dish_36, 2L);

        Dish dish_37 = new Dish();
        dish_37.setName("Carne asada");
        dish_37.setDescription("Carne asada, tomate y aceitunas negras");
        dish_37.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594891/Dise%C3%B1o_sin_t%C3%ADtulo_93_1_sscdbu.png"));
        dish_37.setPrice(1020D);
        dish_37.setCategory(saveDishCategory6);
        dish_37.setPortionPerUnit(1);
        dish_37.setPeople(1);
        DishSpec dish37 = new DishSpec(dish_37, 6L);

        Dish dish_38 = new Dish();
        dish_38.setName("Carne española");
        dish_38.setDescription("Carne y salsa picante");
        dish_38.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594875/Dise%C3%B1o_sin_t%C3%ADtulo_94_1_bkekzx.png"));
        dish_38.setPrice(1020D);
        dish_38.setCategory(saveDishCategory6);
        dish_38.setPortionPerUnit(1);
        dish_38.setPeople(1);
        DishSpec dish38 = new DishSpec(dish_38, 6L);

        Dish dish_39 = new Dish();
        dish_39.setName("Matambre");
        dish_39.setDescription("Verduras salteadas");
        dish_39.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594871/t_con_fruto_8_1_fgl9nk.png"));
        dish_39.setPrice(1050D);
        dish_39.setCategory(saveDishCategory6);
        dish_39.setPortionPerUnit(1);
        dish_39.setPeople(1);
        DishSpec dish39 = new DishSpec(dish_39, 6L);

        Dish dish_40 = new Dish();
        dish_40.setName("Matambre");
        dish_40.setDescription("Con verduras y papas fritas");
        dish_40.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594871/t_con_fruto_10_1_ckxmms.png"));
        dish_40.setPrice(1050D);
        dish_40.setCategory(saveDishCategory6);
        dish_40.setPortionPerUnit(1);
        dish_40.setPeople(1);
        DishSpec dish40 = new DishSpec(dish_40, 6L);

        Dish dish_41 = new Dish();
        dish_41.setName("Hamburguesa");
        dish_41.setDescription("Queso cheddar, cebolla salteada y muzzarella");
        dish_41.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594872/t_con_fruto_11_1_gzzwzh.png"));
        dish_41.setPrice(1250D);
        dish_41.setCategory(saveDishCategory6);
        dish_41.setPortionPerUnit(1);
        dish_41.setPeople(1);
        DishSpec dish41 = new DishSpec(dish_41, 6L);

        Dish dish_42 = new Dish();
        dish_42.setName("Arrollado de carne");
        dish_42.setDescription("Verduras salteadas");
        dish_42.setImage(new DishImage("https://res.cloudinary.com/doxahduh8/image/upload/v1676594871/t_con_fruto_13_1_pesyie.png"));
        dish_42.setPrice(1250D);
        dish_42.setCategory(saveDishCategory6);
        dish_42.setPortionPerUnit(1);
        dish_42.setPeople(1);
        DishSpec dish42 = new DishSpec(dish_42, 6L);

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
        Dish saveDish24 = dishService.createDish(dish24);
        Dish saveDish25 = dishService.createDish(dish25);
        Dish saveDish26 = dishService.createDish(dish26);
        Dish saveDish27 = dishService.createDish(dish27);
        Dish saveDish28 = dishService.createDish(dish28);
        Dish saveDish29 = dishService.createDish(dish29);
        Dish saveDish30 = dishService.createDish(dish30);
        Dish saveDish31 = dishService.createDish(dish31);
        Dish saveDish32 = dishService.createDish(dish32);
        Dish saveDish33 = dishService.createDish(dish33);
        Dish saveDish34 = dishService.createDish(dish34);
        Dish saveDish35 = dishService.createDish(dish35);
        Dish saveDish36 = dishService.createDish(dish36);
        Dish saveDish37 = dishService.createDish(dish37);
        Dish saveDish38 = dishService.createDish(dish38);
        Dish saveDish39 = dishService.createDish(dish39);
        Dish saveDish40 = dishService.createDish(dish40);
        Dish saveDish41 = dishService.createDish(dish41);
        Dish saveDish42 = dishService.createDish(dish42);
    }

}
