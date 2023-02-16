# Country restaurant

## Ejecutar el proyecto

Se requiere tener instalado:

- Maven 3
- Java 17

Y ejecutamos:

```
mvn clean package
mvn -pl backend spring-boot:run
```

## Links

- [Wireframes](https://www.figma.com/file/NJQDXd6YCHibUsOUUMfmBY/Untitled?node-id=0%3A1&t=TAQBnxUjQUaaXMCT-1)

- [Miro](https://miro.com/app/board/uXjVPrrAB5Q=/)

## Historias de usuario

### Usuario no autenticado

- Como **usuario no autenticado**, quiero poder navegar dentro del sistema para
  conocer el menú electrónico del restaurante.

- Como **usuario no autenticado**, quiero poder buscar y filtrar por categoría y
  precios los platillos del restaurante para encontrar rápidamente los platillos
  de mi interés.

- Como **usuario no autenticado**, quiero conocer los platillos más relevantes
  dentro del sistema para degustar y posteriormente otorgar una calificación.

- Como **usuario no autenticado**, quiero poder iniciar sesión dentro del
  sistema para darme de alta y modificar mis datos generales y bancarios.

### Usuario autenticado

- Como **usuario autenticado**, quiero ingresar al sistema para visualizar y
  consultar la búsqueda de mis platillos para agregar elementos al carrito de
  compras.

- Como **usuario autenticado**, quiero consultar mi selección de alimentos para
  poder generar mi método de pago y ticket de compra.

- Como **usuario autenticado**, quiero dejar sugerencias o quejas del servicio
  para mejorar mi experiencia y la de futuros clientes con el restaurante.

### Usuario administrador

- Como **usuario administrador**, quiero iniciar sesión dentro del sistema para
  visualizar los recursos del sistema.

- Como **usuario administrador**, quiero acceder al sistema y consultar las
  ventas generadas semanal y mensualmente para llevar un control de los ingresos
  generados a través de las ventas.

- Como **usuario administrador**, quiero acceder al sistema y generar altas o
  bajas de los recursos para tener actualizado el menú electrónico del sistema.

- Como **usuario administrador**, quiero acceder al sistema y conocer a mis
  clientes más frecuentes para notificarles de las promociones a los que son
  beneficiarios.

## Requisitos de software

### Introducción

#### Propósito

Este documento se encargará de brindar una descripción del producto a
desarrollar para dar a cada persona interesada una amplia perspectiva del mismo.

#### Alcance

El software que se necesita desarrollar consiste en una plataforma e-commerce
para el restaurante Country-Restaurant. El objetivo principal de este proyecto
es aportar a los clientes una herramienta web a través de la cual puedan conocer
el menú del restaurante. Los principales problemas que el software propuesto
busca solucionar son los siguientes:

- Facilitar la búsqueda de platillos disponibles en el menú del restaurante.
- Visualizar las promociones disponibles del restaurante.
- Simplificar la compra de platillos con el restaurante.
- Gestión de platillos del restaurante.
- La interacción entre el cliente y el restaurante.

#### Definiciones, acrónimos, y abreviaciones

| Concepto o abreviatura | Significado |
|------------------------|-------------|
|                        |             |
|                        |             |

#### Referencias

-

#### Visión general

Este documento está dividido en diferentes secciones, donde las primeras se
centran en dar una introducción de este documento, posteriormente las siguientes
secciones explican y describen de manera general, el producto a desarrollar, así
como sus funcionales principales, sus restricciones y supuestos, también se
consideran los tipos de usuarios que el producto podrá administrar y una
perspectiva de las diferentes interfaces a utilizar para el producto. Por
último, se detallan licencias, copyrights y estándares aplicables a este
proyecto.

### Descripción general

#### Perspectiva del producto

El software planteado consiste en una plataforma e-commerce que provea una
herramienta útil para los clientes actuales y futuros. Se tiene la perspectiva
de que este software pueda servir como ventaja competitiva contra los
restaurantes de la región. Además, se ha analizado que dicha ventaja puede
lograrse si la herramienta es capaz de exponer llamativamente el catálogo de
platillos del restaurante; de facilitar la búsqueda y filtrado de platillos de
interés; y si se facilita la compra de platillos utilizando medios de pago
electrónicos. Con lo anterior mencionado, se estima que un software que provea
esas funcionalidades podría mejorar las ventas de Country-Restaurant hasta un
15% para el próximo año.

#### Funciones del producto

Las principales funcionalidades del sistema son las siguientes:

- Visualización de los platillos del menú del restaurante.
- Visualización de las promociones del restaurante.
- Carrito de compras.
- Compra de platillos utilizando medios electrónicos de pago.
- Búsqueda facetada de platillos.
- Gestión de los platillos del restaurante.
- Autenticación de usuarios.

#### Características de los usuarios

Se han identificado tres tipos de usuarios que podrán interactuar con el
sistema. Los usuarios tendrán acceso a las siguientes funcionalidades de acuerdo
a su tipo:

##### Usuario no autenticado

- Visualización de los platillos.
- Visualización de las promociones del restaurante.
- Búsquedas de platillos.
- Ver las calificaciones de un platillo.

##### Usuario autenticado

Este tipo de usuario tendrá acceso a las funcionalidades disponibles para
*Usuario no autenticado* y también tendrá acceso a las siguientes
funcionalidades:

- Acceso al carrito de compras (guardar platillos).
- Compra de platillos utilizando medios electrónicos de pago.
- Calificar platillos.

##### Usuario administrador

- Creación de platillos para su venta.
- Eliminación de platillos.
- Actualización de los datos de un platillo.
- Acceso al registro de ventas del restaurante.
- Acceso a métricas relacionadas con el consumo de recursos del servidor en el
  que se ejecuta el sistema.

### Requerimientos específicos

#### Funcionalidad

A continuación se presenta la lista de requerimientos funcionales del sistema.
Los requerimientos se encuentran separados por “Paquetes de funcionalidad” (PF)
para ayudar a mantener un orden y mejorar la lectura.

##### PF-1 Visualización de platillos

- El sistema permitirá visualizar las siguientes características de un
  platillo:

    - Imágenes representativas.
    - Descripción.
    - Precio.
    - Calificaciones del producto.

##### PF-2 Búsqueda de platillos

- El sistema deberá permitir al usuario filtrar platillos utilizando los
  siguientes campos:

    - Nombre del platillo.
    - Categoría.
    - Rango de precios.
    - Calificaciones.

##### PF-3 Inicio de sesión

-

##### PF-4 Registro de usuarios

-

##### PF-5 Carrito de compras

-

##### PF-6 Pagos electrónicos

-

##### PF-7 Gestión de platillos

-

#### Usabilidad

- El sistema deberá mostrar mensajes de error cada vez que el usuario intente
  realizar una acción inválida al llenar formularios.

- El sistema deberá proporcionar mensajes de error informativos evitando
  detalles técnicos.

#### Fiabilidad

- El sistema deberá recuperarse de algún error en menos de 20 segundos en el 95%
  de los casos.

#### Rendimiento

#### Compatibilidad

#### Seguridad

- El sistema permitirá la creación de una cuenta con los siguientes datos
  proporcionados por el usuario:

    - Correo electrónico.
    - Contraseña.

- El sistema permitirá la creación de una cuenta a través de la autenticación de
  Google.

- El sistema permitirá iniciar sesión con un correo electrónico y una contraseña
  previamente registrados.

- El sistema permitirá iniciar sesión con una cuenta de Google previamente
  registrada.

- El sistema permitirá cerrar sesión de la cuenta.

#### Restricciones de diseño

- Frontend:

    - ReactJs (versión 18).
    - Styled-components.
    - Tailwindcss.
    - React-router-dom.
    - Redux.
    - Jest.
    - React testing library.

- Backend:

    - Spring framework (MVC, Data, Security, HATEOAS).
    - Hibernate.
    - MySql.
    - Swagger.
    - Maven.
    - Docker.

#### Documentación de usuario

La documentación de un manual de usuario no será elaborada debido a que el
software planteado es una aplicación e-commerce, por lo que no es posible ni
necesario entregar un manual a los usuarios que decidan descargar la aplicación.

#### Interfaces

##### Interfaces de usuario

El sistema deberá implementar las interfaces de usuario definidas por el equipo
de UI/UX de la empresa. Los cuales de manera inicial se contará con las
siguientes pantallas:

- **Home** (barra de navegación, platillos destacados, promociones).
- **Inicio de sesión**.
- **Registro**.
- **Búsqueda de platillos** (caja de búsqueda, filtros).
- **Carrito de compras**.
- **Realización de pago de platillos**.
- **Panel administrador**.

##### Interfaces de hardware

Por el momento no se han considerado interfaces de hardware.

##### Interfaces de software

- Vercel
- Railway

##### Modelo de entidad-relación
![entityManagerFactory(EntityManagerFactoryBuilder)](https://user-images.githubusercontent.com/90712394/219444684-a8cfdfe5-cf14-4152-a1e5-70b239487988.png)


#### Requerimientos de licencia

Por el momento no se han considerado licencias para el proyecto.

#### Avisos legales, de derechos de autor y otros.

Por el momento no se han considerado licencias para el proyecto.

#### Estándares aplicables

- *Estándar ISO 25000. Estándar aplicable para la implementación de un modelo
  para el aseguramiento de la calidad del software*.
