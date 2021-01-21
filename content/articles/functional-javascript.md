---
title: 'Javascript Funcional'
description: 'La programacion funcional en javascript viene en muchos casos a simplificarnos tanto la escritura y lectura del codigo, en este post vamos a estar viendo una introduccion y como se aplica la programacion funcional en nuestro diario vivir como desarrolladores javascript.'
path: '/functional-javascript'
year: ene 6, 2021
img: 'javascript-funcional.jpg'
slug: 'functional-javascript'
type: 'article'
tags: ['javascript', 'programacion', 'funcional']
---
Hola devs, este post va dirigido a mostrarte las caracteristicas de ES6 que mas utilizo a la hora de codear en las aplicaciones web, vamos a repasar un poco los inicios de ES6.

A principios de 2015, se lanza el nuevo estandar de Javascript (con bombos y platillos, XD), pero no es hasta 2016 y principios de 2017 donde toma mas fuerza el uso de este estandar, y que es lo mejor del nuevo estandar de Javascript (ojo que ya hay actualizaciones del estandar que lo dejare para otro post)?... A primera vista nos salta la simpleza y el facil entender que hay a lo que se esta haciendo y/o declarando, en pocas palabras nos hace la vida mas facil a nosotros los programadores en javascript (pero ojito tambien que si no se los sabe utilizar resultan un dolor de cabeza).

Y bien, a continuacion ire nombrando las caracteristicas que mas utilizo en mi dia a dia como desarrollador y un plus extra al final con caracteristicas que no uso aun pero que de todas formas estan alli.

# 1. Funciones flecha

```js
const saludar = () => console.log( 'Hola mundo' )
```

# 2. Template literals

```js
const nombre = 'Diego'
const apellido = 'Ticona'
const nombreCompleto = `${nombre} ${apellido}`
console.log( nombreCompleto )
```


# 3. Destructuracion de objetos

```js
const { nombre, apellido, correo } = usuario;
```

# 4. Operadores condicionales ternarios

```js
edad > 18 ? 'usted es mayor de edad' : 'usted es menor de edad'
```