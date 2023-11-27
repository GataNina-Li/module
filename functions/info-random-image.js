const fs = require('fs')
const path = require('path')

function getRandomImage() {
try {
const categoryFolder = path.join(__dirname, '..', 'images', 'category', 'yaoi-hard.json')

if (!fs.existsSync(categoryFolder)) {
return 'Categoría no encontrada:\n\nVisite https://github.com/GataNina-Li/module para conocer las categorías disponibles.'
}

const fileContent = require(categoryFolder)
const randomItem = fileContent[Math.floor(Math.random() * fileContent.length)]
return randomItem
  
} catch (error) {
return `Ah surgido un error inesperado. Comuníquese con el proyecto encargado:\n\nhttps://github.com/GataNina-Li/module`
}}

module.exports = getRandomImage

