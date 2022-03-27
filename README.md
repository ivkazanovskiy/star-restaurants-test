# Star Restaurants

Данный репозиторий является результатом тестового задания по работе с Картами

https://starrestaurants.herokuapp.com/ - deploy

## Инициализация проекта

Создайте файл **.env** в разделе **client**
Получить ключи для формирования запросов можно тут:
https://developer.tech.yandex.ru/services/ - API Поиск по оргинизациям
https://unsplash.com/ - ключ для поиска изображений

Запуск клиентской части в режиме разработки:
``` JS
cd client && npm i && npm start
```

Настройки по умолчанию:
- Центр карты привязан к Санкт-Петербургу.
- Организации загружаются по 20 шт.

Изменить данные параметры можно в файлах:
``` JS
./client/src/redux/reducers/mapReduser.js => initialState.center // центр карты
./client/src/redux/reducers/dataReduser.js => initialState.loadingPack // количество загружаемых организаций
```

Поиск организаций идет от центра области (где инициализированна карта).
