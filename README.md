# Prueba técnica Backend

Este es el readme para levantar el proyecto en desarrollo y tiene la documentación de la API.

## Repositorio

Antes que nada, necesitas tener acceso al repositorio donde se encuentra el proyecto. Puedes clonarlo desde la terminal de tu computadora con el siguiente comando:

```
git clone <url del proyecto>
```

## Instalación de dependencias

Una vez que tienes el proyecto en tu computadora, necesitas instalar las dependencias para que puedas correrlo localmente. Para hacer esto, puedes correr el siguiente comando:

```
npm install
```


## Creación de la base de datos

Para crear la base de datos, necesitas tener instalado MySQL en tu computadora. Si ya lo tienes, entonces sigue los siguientes pasos:

1. Inicia sesión en MySQL escribiendo el siguiente comando y presionando Enter, donde "usuario" es el nombre de usuario de tu cuenta MySQL:
```mysql -u usuario -p```


2. Introduce la contraseña de tu cuenta MySQL y presiona Enter.
3. Una vez que hayas iniciado sesión en MySQL, puedes crear una nueva base de datos con el siguiente comando:
```CREATE DATABASE nombre_de_tu_base_de_datos;```


4. Puedes verificar que la base de datos se haya creado correctamente escribiendo el siguiente comando:
```SHOW DATABASES;```


5. Para salir de MySQL y volver a la línea de comandos de tu sistema operativo, escribe el siguiente comando y presiona Enter:
```exit;```


## Variables de entorno

Para que puedas correr el proyecto de manera local, necesitas llenar las variables de entorno con sus respectivos valores. Para hacer esto, debes renombrar el archivo ```.env.example``` por ```.env``` y luego llenar las variables de entorno con sus respectivos valores.

## Correr el proyecto

Ahora, puedes correr el proyecto de manera local con el siguiente comando:
```
npm run dev
```

# Documentación de la API

## 1. Crear una categoría

Endpoint: `POST http://localhost:3000/categorias`

Crea una nueva categoría. El cuerpo de la solicitud debe ser un objeto JSON con los siguientes campos:

- `nombre`: (string) el nombre de la categoría.

Ejemplo de cuerpo de solicitud:

```json
{
  "nombre": "Hamburguesas"
}
```

## 2. Crear un producto

Endpoint: `POST http://localhost:3000/productos`

Crea un nuevo producto. El cuerpo de la solicitud debe ser un objeto JSON con los siguientes campos:

- `nombre`: (string) el nombre del producto.
- `precio`: (float) el precio del producto.
- `categoriaId`: (integer) identificador de la categoría.

Ejemplo de cuerpo de solicitud:

```json
{
  "nombre": "Hamburguesas",
  "precio": 49.9,
  "categoriaId": 1
}
```

## 3. Obtener todos los productos
Endpoint: `GET http://localhost:3000/productos`

Obtiene una lista de todos los productos registrados.

Respuesta:
La respuesta incluirá un arreglo de objetos de productos en formato JSON.

## 4. Obtener productos por categoría
Endpoint: `GET http://localhost:3000/productos/:categoria`

Obtiene una lista de todos los productos que pertenecen a una categoría en particular. El parámetro ```:categoria``` en la ruta de la solicitud debe ser el nombre de la categoría. ```Ejm: Hamburguesas```

Respuesta:
La respuesta incluirá un arreglo de objetos de productos pertenecen a una categoría en particular en formato JSON.

# Stack usado
* Node.js
* Express
* Sequelize
* mysql2
