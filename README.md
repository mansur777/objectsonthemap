# MapTest - Отображение объектов на карте

Тестовое приложение на [Angular](https://github.com/angular/angular-cli) 11.0.2 + [Leaflet](https://github.com/Leaflet/Leaflet) 1.7.1,
в котором отображается карта с нанесенными на нее маркерами объектов из [списка](https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json).

При выборе объекта в меню, строка с объектом подсвечивается, а карта автоматически масштабируется и центрируется на выбраном объекте.

## Установка и запуск

```sh
#скачайте репозиторий
git clone https://github.com/mansur777/objectsonthemap.git

#перейдите в папку проекта
cd objectsonthemap

#установите зависимости
npm i

#запустите тестовый сервер
ng serve --open
```

В браузере откроется проект по адресу `http://localhost:4200/`

## Запуск без установки

Перейдите по адресу `https://stackblitz.com/github/mansur777/objectsonthemap`. Дождитесь инициализации проекта.
