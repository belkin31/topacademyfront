**Техническое задание (ТЗ)**  
**Экзаменационный проект: Микросервисная CRM-система магазина цветов**  
*Стек: Laravel (API) + любой фронтенд-фреймворк (React/Vue/Blade+JS — на выбор студента)*  
*Формат сдачи: Docker-контейнеры (backend + frontend отдельно), репозиторий GitHub*

---

### **1. Общие требования**
- **6 независимых микросервисов** (взаимодействие между ними **не требуется**).
- Каждый микросервис — **отдельный Laravel-проект** в **отдельном Docker-контейнере**.
- Фронтенд — **отдельный контейнер** (Nginx + сборка фронтенд-приложения).
- Каждый сервис используют **одну базу данных MySQL** (можно через Docker Compose).
- Доступ к API — через `http://localhost:8XXX/api/...` (порт по номеру сервиса).
- Аутентификация **не требуется**.

---

### **2. Список микросервисов**

| № | Название сервиса         | Таблица БД             | Сущность (пример полей) |
|---|--------------------------|------------------------|--------------------------|
| 1 | **Tasks**                | `tasks`                | `id`, `title`, `description`, `status`, `due_date`, `created_at`, `updated_at` |
| 2 | **Clients**              | `clients`              | `id`, `name`, `phone`, `email`, `address`, `created_at`, `updated_at` |
| 3 | **Sales**                | `sales`                | `id`, `client_id`, `total_amount`, `sale_date`, `status`, `created_at`, `updated_at` |
| 4 | **MerchantSettings**     | `merchant_settings`    | `id`, `shop_name`, `currency`, `tax_rate`, `working_hours`, `created_at`, `updated_at` |
| 5 | **Products**             | `products`             | `id`, `name`, `price`, `stock`, `group_id`, `description`, `created_at`, `updated_at` |
| 6 | **ProductGroups**        | `product_groups`       | `id`, `name`, `description`, `created_at`, `updated_at` |

> Каждый студент **самостоятельно выбирает 1 микросервис** из списка выше.  
> Все сервисы **одинаковы по структуре и требованиям**.

---

### **3. Структура Laravel-микросервиса (backend)**

```
app/
├── Models/
│   └── Task.php (или Client.php и т.д.)
database/
├── migrations/
│   └── 2025_XX_XX_create_tasks_table.php
├── seeders/
│   └── TaskSeeder.php
routes/
└── api.php
app/Http/Controllers/
└── TaskController.php
```

#### Обязательные компоненты:
1. **Миграция** — создаёт таблицу с указанными полями + `timestamps()`.
2. **Модель** — Eloquent, с `fillable`.
3. **Сидер** — минимум 5 записей.
4. **Контроллер** — RESTful методы:
    - `GET /api/tasks` → список
    - `GET /api/tasks/{id}` → просмотр
    - `POST /api/tasks` → создание
    - `PUT /api/tasks/{id}` → обновление
    - `DELETE /api/tasks/{id}` → удаление
5. **Маршруты** — в `routes/api.php` с префиксом `api`.

---

### **4. API Спецификация (пример для Tasks)**

```http
GET     /api/tasks
GET     /api/tasks/{id}
POST    /api/tasks        { "title": "...", "description": "...", ... }
PUT     /api/tasks/{id}   { "title": "...", ... }
DELETE  /api/tasks/{id}
```

- Ответы в **JSON**.
- Валидация входящих данных (Request-класс или в контроллере).
- Коды HTTP: `200`, `201`, `400`, `404`, `422`, `500`.

---

### **5. Фронтенд (отдельный контейнер)**

- Реализует **все CRUD-операции** через API.
- Интерфейс: таблица + модальные окна (создание/редактирование).
- Используется `fetch` или `axios`.
- Сборка: `npm run build` → статика в Nginx.
- Доступ: `http://localhost:8XXX` (например, `8001` для Tasks).

---

### **6. Docker**

#### `docker-compose.yml` (пример для одного сервиса — Tasks)

```yaml
version: '3.8'

services:
  tasks-backend:
    build: ./tasks-backend
    ports:
      - "8001:80"
    depends_on:
      - mysql
    environment:
      DB_HOST: mysql
      DB_DATABASE: flower_shop
      DB_USERNAME: root
      DB_PASSWORD: secret

  tasks-frontend:
    build: ./tasks-frontend
    ports:
      - "3001:80"
    depends_on:
      - tasks-backend

  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: flower_shop
    ports:
      - "3306:3306"
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data:
```

> Каждый студент создаёт **свою пару контейнеров** с уникальными портами.
> Примеры контейнеров и фронта можете найти тут
> https://github.com/belkin31/topacademyfront/
> https://github.com/belkin31/academyphp
---

### **7. Требования к сдаче**

1. **GitHub-репозиторий**:
    - Папки: `tasks-backend/`, `tasks-frontend/`
    - `README.md` с инструкцией запуска
2. **`docker-compose up --build`** — всё запускается
3. **База данных** заполняется сидерами
4. **Фронтенд** полностью работает с API
5. **Код** — чистый, с комментариями, PSR-12

---

### **8. Критерии оценки (из 100 баллов)**

| Критерий                          | Баллы |
|-----------------------------------|-------|
| Корректные миграции и модель      | 15    |
| Рабочие CRUD API (валидация)      | 25    |
| Сидеры (5+ записей)               | 5     |
| Фронтенд: все операции            | 25    |
| Docker + docker-compose           | 15    |
| Чистота кода, README, структура   | 10    |
| Запуск без ошибок                 | 5     |

---

### **9. Пример названий и портов **

- Backend: `http://localhost:8000/api/tasks`
- Frontend: `http://localhost:3001`
---

**Удачи на экзамене!**  
*Вопросы — в чат или на паре.*