### 1. Введение

#### 1.1 Общее описание

API интернет-магазина предоставляет возможность взаимодействия с ресурсами магазина, такими как товары, категории, пользователи, заказы и платежи. API позволяет создавать, читать, обновлять и удалять данные, а также управлять пользователями и их заказами.

#### 1.2 Базовый URL

http://<your-domain>/api/

### 2. Аутентификация

-   **Методы аутентификации**:
-   JSON Web Token (JWT). Пользователи должны получить токен, выполнив вход в систему.

#### 2.1 Получение токена

-   **URL**: `/auth/token/login/`
-   **Метод**: `POST`
-   **Тело запроса**:
    json
    {
    "username": "your_username",
    "password": "your_password"
    }

-   **Ответ**:
    json
    {
    "auth_token": "your_token"
    }

### 3. Пользователи

#### 3.1 Регистрация пользователя

-   **URL**: `/auth/register/`
-   **Метод**: `POST`
-   **Тело запроса**:
    json
    {
    "username": "new_username",
    "email": "user@example.com",
    "password": "your_password"
    }

-   **Ответ**:
    json
    {
    "id": 1,
    "username": "new_username",
    "email": "user@example.com"
    }

#### 3.2 Получение информации о пользователе

-   **URL**: `/users/<int:user_id>/`
-   **Метод**: `GET`
-   **Ответ**:
    json
    {
    "id": 1,
    "username": "new_username",
    "email": "user@example.com"
    }

### 4. Продукты

#### 4.1 Получение списка продуктов

-   **URL**: `/products/`
-   **Метод**: `GET`
-   **Ответ**:
    json
    [
    {
    "id": 1,
    "name": "Product 1",
    "price": 100.0,
    "description": "Description of Product 1",
    "category": "category_id"
    },
    {
    "id": 2,
    "name": "Product 2",
    "price": 150.0,
    "description": "Description of Product 2",
    "category": "category_id"
    }
    ]

#### 4.2 Получение информации о продукте

-   **URL**: `/products/<int:product_id>/`
-   **Метод**: `GET`
-   **Ответ**:
    json
    {
    "id": 1,
    "name": "Product 1",
    "price": 100.0,
    "description": "Description of Product 1",
    "category": "category_id"
    }

#### 4.3 Создание продукта

-   **URL**: `/products/`
-   **Метод**: `POST`
-   **Тело запроса**:
    json
    {
    "name": "New Product",
    "price": 200.0,
    "description": "Description of New Product",
    "category": "category_id"
    }

-   **Ответ**:
    json
    {
    "id": 3,
    "name": "New Product",
    "price": 200.0,
    "description": "Description of New Product",
    "category": "category_id"
    }

### 5. Категории

#### 5.1 Получение списка категорий

-   **URL**: `/categories/`
-   **Метод**: `GET`
-   **Ответ**:
    json
    [
    {
    "id": 1,
    "name": "Category 1"
    },
    {
    "id": 2,
    "name": "Category 2"
    }
    ]

#### 5.2 Создание категории

-   **URL**: `/categories/`
-   **Метод**: `POST`
-   **Тело запроса**:
    json
    {
    "name": "New Category"
    }

-   **Ответ**:
    json
    {
    "id": 3,
    "name": "New Category"
    }

### 6. Заказы

#### 6.1 Создание заказа

-   **URL**: `/orders/`
-   **Метод**: `POST`
-   **Тело запроса**:
    json
    {
    "user_id": 1,
    "products": [
    {"product_id": 1, "quantity": 2},
    {"product_id": 2, "quantity": 1}
    ]
    }

-   **Ответ**:
    json
    {
    "id": 1,
    "user_id": 1,
    "products": [
    {"product_id": 1, "quantity": 2},
    {"product_id": 2, "quantity": 1}
    ],
    "status": "pending",
    "total_price": 350.0
    }

#### 6.2 Получение информации о заказе

-   **URL**: `/orders/<int:order_id>/`
-   **Метод**: `GET`
-   **Ответ**:
    json
    {
    "id": 1,
    "user_id": 1,
    "products": [
    {"product_id": 1, "quantity": 2},
    {"product_id": 2, "quantity": 1}
    ],
    "status": "pending",
    "total_price": 350.0
    }

### 7. Ошибки

Документация на ошибки должна содержать примеры возможных кодов состояния, таких как 400 (плохой запрос), 401 (неавторизован), 404 (не найдено) и 500 (ошибка сервера).

#### Пример сообщения об ошибке

json
{
"detail": "Данный ресурс не найден."
}

### 8. Заключение

В этой документации представлены основные эндпоинты вашего API интернет-магазина. Каждый эндпоинт описывает требуемые методы, параметры запроса и формат ответа.

### 9. Инструменты

Рекомендуется использовать такие инструменты, как [Swagger](https://swagger.io/) или [Postman](https://www.postman.com/), для тестирования и документирования API с возможностью интерактивного изучения ваших маршрутов.

### 10. Дополнительно

Ссылки на дополнительные ресурсы, такие как:

-   [Документация Django Rest Framework](https://www.django-rest-framework.org/)
-   [JSON Web Tokens (JWT)](https://jwt.io/)
