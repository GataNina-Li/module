# module-gatadios

Este módulo ofrece funciones para obtener información de imágenes de manera aleatoria, centrándose principalmente en contenido relacionado con Yaoi. Sin embargo, este proyecto está abierto a modificaciones y a la incorporación de nuevas ideas.

## Requisitos
> Este módulo requiere Node.js y npm instalados en su entorno de desarrollo.

## Instalación
> Puede instalar este módulo en tu proyecto utilizando el siguiente comando:
```bash
npm install module-gatadios
```

## Agregar a package.json
```json
"dependencies": {
  "module-gatadios": "^1.0.0"
}
```

### Disponible
| Categoría   | Campos                   |
|-------------|--------------------------|
| yaoi-hard   | `link` `author` `name` `description` |

## Documentación 
<details>
<summary><b>Uso de categoría</b></summary>
  
```js
const yaoiImages = require('module-gatadios');

// Ejemplo 1
const result1 = yaoiImages.getRandomImage('yaoi-hard', ['link'])
console.log(result1.link)
// devolverá solo el enlace de una imagen aleatoria de la categoría 'yaoi-hard'.

// Ejemplo 2
const result2 = yaoiImages.getRandomImage('yaoi-hard', ['author', 'name'])
console.log(`Autor: ${result2.author}, Nombre: ${result2.name}`)
// se obtiene el autor y el nombre de una imagen aleatoria de la categoría 'yaoi-hard'.

// Ejemplo 3
const result = yaoiImages.getRandomImage('yaoi-hard', ['link', 'author', 'name', 'description'])
console.log(`Autor: ${result.author}
Nombre: ${result.name}
Descripción: ${result.description}
Enlace: ${result.link}`)
// obtener toda la información disponible (enlace, autor, nombre y descripción) de una imagen aleatoria de 'yaoi-hard'

// Ejemplo 4
const result4 = yaoiImages.getRandomImage('categoría-no-existente', ['link', 'author']);
if ('error' in result4) {
  console.error(result4.error);
} else {
  console.log(`Enlace: ${result4.link}, Autor: ${result4.author}`);
}
// se maneja el escenario donde la categoría no existe, y si no hay errores, se obtiene el enlace y el autor.
```
> **NOTE** Si un campo no tiene valor o es `null`, este no se mostrará en el resultado final del JSON. Si el campo es `null` y es usado después del formato JSON, este será `undefined`
</details>
