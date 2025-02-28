# Portfolio

## Описание проекта

Это персональное портфолио, созданное с использованием React и Vite. Проект демонстрирует навыки разработки на фронтенде, включая работу с библиотеками и технологиями, такими как React, TypeScript, Redux и styled-components.

## Инструкция: Как запустить проект

### 1. Установите Node.js и npm

Для того чтобы начать работу с проектом, необходимо установить [Node.js](https://nodejs.org/) и npm (пакетный менеджер для JavaScript).

- Скачайте и установите Node.js, следуя инструкциям на официальной странице.
- Проверьте, что Node.js и npm успешно установлены, выполнив следующие команды в терминале:

```bash
node -v
npm -v
```

### 2. Cклонируйте репозиторий

Склонируйте репозиторий с проектом на свой локальный компьютер, используя команду:

```bash
git clone https://github.com/LeMelifs/portfolio.git
```

### 3. Перейдите в директорию проекта

После того как репозиторий был склонирован, откройте терминал и перейдите в папку с проектом:

```bash
cd portfolio
```

### 4. Установите зависимости

Проект использует пакетный менеджер npm для управления зависимостями. Чтобы установить все необходимые библиотеки, выполните команду:

```bash
npm install
```

Эта команда загрузит все пакеты, указанные в package.json, и установит их.

### 5. Запустите проект в режиме разработки

После установки зависимостей вы можете запустить проект в режиме разработки, используя команду:

```bash
npm run dev
```

Проект будет запущен на локальном сервере. Обычно это будет http://localhost:5173. Откройте этот адрес в браузере, чтобы увидеть ваше приложение в действии.

### 6. Остановка сервера

Чтобы остановить сервер разработки, вернитесь в терминал и нажмите Ctrl + C.

## Структура проекта

Вот краткое описание ключевых папок и файлов в проекте:

    src/ — основная папка с исходным кодом;
    components/ — компоненты React, такие как Header, Footer, и другие части страницы;
    pages/ — страницы сайта;
    assets/ — папка, в которой лежат ассеты проекта (картинки, шрифты и пр.);
    data/ — данные для сайта;
    forms/ — формы;
    context/ — контекст (управление глобальными данными);
    services/ — сервисы;
    store/ — менеджер состояний (Redux) и его компоненты;
    types/ — пользовательские типы;
    App.tsx — основной компонент приложения;
    main.tsx — точка входа приложения;
    package.json — файл с зависимостями и скриптами для npm;
    vite.config.ts — конфигурация для сборщика Vite.
