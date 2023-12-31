# Nice Places

**Задача:** Сверстать в формате VK Mini App приложение под кодовым названием *Nice Places*.

**Фреймворк:** React

## Задание

Приложение представляет собой карту (сервис на выбор разработчика — Яндекс, Google, Mapbox, и т.д.), поверх которой есть модальное окно с категориями. Его можно потянуть вверх и увидеть рекомендуемые места или выбрать места конкретной категории.

При выборе места карта приближается к нужной точке, а в модальном окне находится информация о месте.

Дизайн выполнен в приложении Figma и доступен по ссылке - [Макет](https://www.figma.com/file/IAEolRtTuHO35DyZiFn40O/Nice-Places-_-%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?type=design&node-id=0%3A1&mode=dev)

## Использованные библиотеки
- **@pbe/react-yandex-maps** для работы с Яндекс картой
- **react-modal-sheet** для плавающих модальных окон и поддержки свайпов
- **zustand** для контроля глобального состояния

## Возможности и фишки
- Возможность просмотр карты и ее отдаление
- Возможность выбора точки, как прямо на карте, так и через фильтр
- Возможность сортировать карту и список через категории, а так же поиск через поле для ввода
- Возможность скрыть и открыть фильтр через плавающую иконку Бургера
- Возможность центрировать карту через иконку Навигации
- Резиновый адаптив ПК и Мобильная версия
- Плавность и множество анимаций
- Плавающие кнопки полностью мобильны и подстраиваются под высоту модального окна, а так же автоматически скрываются когда места для отрисовки недостаточно

## Отклонения от дизайна
![bug-1.jpg](readme%2Fbug-1.jpg)
Увеличен line-height текста, так как он выходил за пределы контейнера и обрезался

![bug-2.jpg](readme%2Fbug-2.jpg)
Иконки экспортированы без фона, так как они были объединены прямо с тенью

![bug-3.jpg](readme%2Fbug-3.jpg)
Отключен градиент внизу страницы, при полно экранном открытии информации о точке, так как блокировало пункт Меню
