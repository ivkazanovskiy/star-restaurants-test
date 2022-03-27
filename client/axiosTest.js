const axios = require('axios')
const url = 'https://yandex.ru/maps/org/restoran_leth/16724138917/?ll=30.332067%2C59.926498&z=15'

axios(url).then(console.log)
