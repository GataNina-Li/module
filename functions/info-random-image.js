function getRandomImage(category, requestedFields = []) {
const categoryFolder = `yaoiGen/category/${category}.json`

// Verifica si el archivo  existe
if (!fs.existsSync(categoryFolder)) {
return 'Categoría no encontrada'
}

// Lee archivo seleccionado
const fileContent = require(categoryFolder);

// Si no se especifica qué campos quiere, solo se devolverá imagen
const fieldsToInclude = requestedFields.length === 0 ? ['link'] : requestedFields;

// Filtrar la información
const filteredData = {}
fieldsToInclude.forEach(field => {
if (field in fileContent && fileContent[field]) {
filteredData[field] = fileContent[field];
}
})

return filteredData
}

module.exports = getRandomImage
