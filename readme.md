![version](https://img.shields.io/badge/version-1.0-red.svg?style=flat-square "Version Frontend-kit")
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/sinups/)

## Стартовый репозиторий .

Установка: `npm i`.

Запуск: `npm start`.

Сборка - <b>Gulp 4</b>

Запуск конкретной задачи: `npm start имя_задачи` (список задач  в `gulpfile.js`)

Остановка: <kbd>Ctrl + C</kbd>

## Bывод svg sprite

`<svg class="custom-class" width="14px" height="14px"><use xlink:href="img/sprite-svg.svg#img_name"></use></svg>`

Или можете сделать include в верху сайта  ниже тега `Body`

`@@include('img/sprite-svg.svg')`

И выводить на странице таким образом:

`<svg  width="28"  height="28"  class="custom_class"><use  xlink:href="#image_name"></use></svg>`

## Bывод png sprite

Предоставленные миксины предназначены для использования с переменными

` .icon-imagename {   @include sprite($image_name); }`

Пример использования в HTML:

`display: block` sprite:

`<div class="icon-imagename"></div>`

Изменитe `display` ( `display: inline-block;`), мы предлагаем использовать общий css класс:

CSS

`.icon {   display: inline-block; }`

HTML

`<i class="icon icon-home"></i>`


## Обновить зависимости

Удаляем:
node_modules
package-lock.json
package.json

Устанавливаем:
`npm install gulp gulp-sass sass gulp-rename gulp-sourcemaps gulp-postcss css-mqpacker gulp-replace del@3.0.0 browser-sync gulp-gh-pages gulp-newer gulp-uglify gulp-concat gulp-cheerio gulp-svgstore gulp-svgmin gulp-notify gulp-plumber gulp-cleancss gulp-file-include gulp-html-beautify gulp.spritesmith merge-stream vinyl-buffernpm install gulp gulp-sass sass gulp-rename gulp-sourcemaps gulp-postcss css-mqpacker gulp-replace del@3.0.0 browser-sync gulp-gh-pages gulp-newer gulp-uglify gulp-concat gulp-cheerio gulp-svgstore gulp-svgmin gulp-notify gulp-plumber gulp-cleancss gulp-file-include gulp-html-beautify gulp.spritesmith merge-stream vinyl-buffer`
