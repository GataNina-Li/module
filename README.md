# 🌱 module-gatadios

Este módulo ofrece funciones para obtener información de imágenes de manera aleatoria, centrándose principalmente en contenido relacionado con Yaoi. Sin embargo, este proyecto está abierto a modificaciones y a la incorporación de nuevas ideas.

## 💥 Requisitos
> Este módulo requiere Node.js y npm instalados en su entorno de desarrollo.

## 💻 Instalación
> Puede instalar este módulo en tu proyecto utilizando el siguiente comando:
```bash
npm i module-gatadios
```

## 📁 Agregar a package.json
```json
"dependencies": {
  "module-gatadios": "^1.0.1"
}
```

### 💫 Información de imagen
| Categoría   | Campos                   |
|-------------|--------------------------|
| yaoi-hard   | `link` `author` `name` `description` |

## 🖥️ Documentación 
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

-----

## Contribuye al Proyecto

#### 😸 ¿Cómo Puedes Contribuir?
Contribuir es fácil y no importa si eres un desarrollador experimentado o si estás dando tus primeros pasos. Aquí te dejo algunas formas en las que puedes ayudar:

#### 🤔 Encuentra un Problema
Si encuentras un error, un problema o simplemente tienes una idea para mejorar, ¡haznoslo saber! Abre un `issue` y describe lo que estás experimentando.

#### 🛠 Realiza Cambios
`¿Tienes la solución para un problema o una nueva característica que te gustaría agregar?` ¡Perfecto! Haz un `fork` del repositorio, realiza tus cambios y envíanos un `pull request`. Estaré encantada de revisar y fusionar las contribuciones.

#### 🌐 Mejora la Documentación
La documentación clara es esencial. Si encuentras partes confusas o tienes ideas para mejorarla, ¡estamos abiertos a sugerencias! Realiza cambios en la documentación y envía un `pull request`.

#### ¿Por Qué Contribuir?
🤝 Formar parte de una comunidad activa y amigable.

🚀 Aprender y mejorar.

🌍 Colaborar ea ayudar a personas de todo el mundo.

**✨ ¡Esperamos tus pull requests! ✨**

-----

### 🌟 CREADORA 
[![GataNina-Li](https://github.com/GataNina-Li.png?size=100)](https://github.com/GataNina-Li) 
> Este proyecto está bajo la Licencia MIT - vea el archivo **[LICENSE](LICENSE)** para más detalles.
