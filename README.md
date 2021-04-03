# AuthApp

Éste proyecto corresponde a la septima y última app que desarrollé a través del curso de `Angular: de cero a experto (edición 2021)` de Fernando Herrera en Udemy. Es una app construida con el stack MEAN, que consta de un registro y un login, el cual lleva a un dashboard protegido tanto por el frontend (con _Guards_) como por el backend (con un _JSON Web Token_).

El _Frontend_ se encuentra hecho con **Angular CLI** (versión 11.0.4.), con un patrón de diseño **Lazyload**.

El _Backend_ es un API REST construido con **Node.js** y **Express**. La base de datos utlizada fue **MongoDB** deployada en **MongoDB Atlas** y como ODM utilicé **Mongoose**.

> Su dirección web: https://angular-authapp-mean.herokuapp.com/

## Abrirlo localmente

Instalar y/o disponer de **Angular CLI** (https://angular.io/cli), **Node.js**(https://nodejs.org/en/download/) y **Nodemon** (https://www.npmjs.com/package/nodemon).

## Iniciar la aplicación (Backend)

Posicionarse dentro de la carpeta _backend_ e instalar las dependencias del proyecto con:

```bash
npm install
```

También dentro de la carpeta _backend_ escribir:

```bash
npm run dev
```

Si todo sale bien debe aparecer en la consola lo siguiente:

```bash
SERVER UP ON PORT 4000!!
Conectado a la base de datos!!
```

## Iniciar la aplicación (Frontend)

Posicionarse dentro de la carpeta _frontend_ e instalar las dependencias del proyecto con:

```bash
npm install
```

Por último, para abrir la aplicación:

```bash
ng serve -o
```

Abrirá la página en la siguiente URL: `http://localhost:4200/`.
