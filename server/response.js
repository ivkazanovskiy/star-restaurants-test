const { default: axios } = require('axios');
const fs = require('fs');

axios('https://search-maps.yandex.ru/v1/?text=%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD&apikey=89df495a-b5a6-4e62-a27e-4f2d00b206e5&lang=ru_RU&bbox=30.211842%2C59.889218%7E30.435743%2C59.97568&type=biz')
  .then(res => {
    const data = res.data
    const dataString = JSON.stringify(data)
    fs.writeFile('./text.txt', dataString, err => {
      if (err) {
        console.error(err)
        return
      }
    })

  })



