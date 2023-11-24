const fs = require('fs')

function getInfoYaoi(category) {
const categoryFolder = `module/images/category/${category}.json`

if (!fs.existsSync(categoryFolder)) {
return 'Categoría no encontrada'
}

const fileContent = require(categoryFolder)
return fileContent
}

module.exports = getInfoYaoi
