# Development Guide

## 📚 Documentation de Développement

### Architecture Globale

```
┌─────────────────────────────────────────┐
│         Frontend (React + Vite)         │
│    Running on http://localhost:3000    │
└──────────────────┬──────────────────────┘
                   │
                   │ HTTP Requests
                   ▼
┌─────────────────────────────────────────┐
│    Backend (Spring Boot + Tomcat)       │
│    Running on http://localhost:8080     │
└──────────────────┬──────────────────────┘
                   │
                   │ JDBC
                   ▼
┌─────────────────────────────────────────┐
│   PostgreSQL Database                   │
│   Running on localhost:5432             │
└─────────────────────────────────────────┘
```

### Frontend Architecture

```
src/
├── App.jsx              # Main App component
├── main.jsx             # Entry point
├── index.css            # Global styles
├── App.css              # App styles
├── components/          # Reusable components
│   ├── UserForm.jsx     # User form component
│   └── UserList.jsx     # User list component
├── pages/               # Page components
│   └── Home.jsx         # Home page
├── services/            # API services
│   └── api.js           # Axios client & API calls
└── styles/              # Component styles
    ├── UserForm.css
    ├── UserList.css
    └── Home.css
```

### Backend Architecture

```
src/main/java/com/example/app/
├── Application.java           # Main Spring Boot Application
├── controller/
│   ├── UserController.java    # REST endpoints for users
│   └── HealthController.java  # Health check endpoints
├── service/
│   └── UserService.java       # Business logic
├── repository/
│   └── UserRepository.java    # Data access (JPA)
└── entity/
    └── User.java              # JPA entity model
```

### Database Schema

```sql
users
├── id (BIGSERIAL PRIMARY KEY)
├── name (VARCHAR(100) NOT NULL)
├── email (VARCHAR(100) NOT NULL UNIQUE)
├── description (VARCHAR(500))
├── created_at (TIMESTAMP NOT NULL)
└── updated_at (TIMESTAMP)
```

## 🔄 Data Flow

### Creating a User

1. **Frontend** - User fills form in `UserForm.jsx`
2. **Service** - Form submitted to `api.js` via `userService.createUser()`
3. **Backend** - HTTP POST to `/api/users` hits `UserController.createUser()`
4. **Business Logic** - `UserService.createUser()` processes the request
5. **Database** - `UserRepository.save()` persists to PostgreSQL
6. **Response** - User object returned and updated in React state

```
UserForm → api.js → POST /api/users → UserController → UserService → UserRepository → PostgreSQL
```

## 🐳 Docker Networking

Services communicate through the `app-network`:

- **Frontend** (port 3000) → Nginx
- **Backend** (port 8080) → Spring Boot (inside docker uses hostname `backend`)
- **Database** (port 5432) → PostgreSQL (inside docker uses hostname `postgres`)

## 🔐 CORS Configuration

CORS is configured in `Application.java`:

```java
registry.addMapping("/api/**")
    .allowedOrigins("http://localhost:3000", "http://frontend:3000")
    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
    .allowedHeaders("*")
    .allowCredentials(true)
```

## 📝 API Documentation

### Users Endpoints

#### GET /api/users
Get all users
```bash
curl http://localhost:8080/api/users
```

#### GET /api/users/{id}
Get user by ID
```bash
curl http://localhost:8080/api/users/1
```

#### GET /api/users/email/{email}
Get user by email
```bash
curl http://localhost:8080/api/users/email/admin@example.com
```

#### POST /api/users
Create new user
```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "description": "Developer"
  }'
```

#### PUT /api/users/{id}
Update user
```bash
curl -X PUT http://localhost:8080/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Name",
    "email": "updated@example.com",
    "description": "Updated description"
  }'
```

#### DELETE /api/users/{id}
Delete user
```bash
curl -X DELETE http://localhost:8080/api/users/1
```

### Health Endpoints

#### GET /health
Basic health check
```bash
curl http://localhost:8080/health
```

#### GET /api/health
API health with JSON response
```bash
curl http://localhost:8080/api/health
```

## 🧪 Testing

### Backend Tests

Run tests with Maven:
```bash
cd backend
mvn test
```

Or with Docker:
```bash
docker-compose exec backend mvn test
```

### Frontend Testing

ESLint validation:
```bash
cd frontend
npm run lint
```

## 🔧 Configuration Files

### Backend - application.properties
Located in `backend/src/main/resources/`

Key configurations:
- `server.port` - Server port (default: 8080)
- `spring.datasource.url` - Database URL
- `spring.jpa.hibernate.ddl-auto` - Schema generation (update/validate)
- `spring.jpa.show-sql` - Log SQL queries

### Frontend - vite.config.js
Located in `frontend/`

Key configurations:
- `server.port` - Dev server port (default: 3000)
- `server.host` - Server host (0.0.0.0 for docker)
- Build output directory

### Frontend - .env
Environment variables for frontend:
```env
VITE_API_URL=http://localhost:8080/api
```

## 🐘 Database Operations

### Connect to Database

```bash
docker-compose exec postgres psql -U postgres -d lafeerima_db
```

### Common SQL Commands

List all users:
```sql
SELECT * FROM users;
```

Get user count:
```sql
SELECT COUNT(*) FROM users;
```

Delete all users:
```sql
DELETE FROM users;
```

Reset sequences:
```sql
ALTER SEQUENCE users_id_seq RESTART WITH 1;
```

## 📊 Performance Optimization

### Backend
- Connection pooling (HikariCP) configured
- Database indexes on frequently queried columns
- JPA batch processing enabled

### Frontend
- Production build with minification
- CSS/JS compression in Nginx
- Lazy loading components

### Database
- Indexes on `email` and `created_at`
- Connection pooling configured

## 🚀 Deployment Checklist

- [ ] Update `DB_PASSWORD` in `.env`
- [ ] Set `SPRING_JPA_HIBERNATE_DDL_AUTO=validate` for production
- [ ] Configure proper SSL certificates
- [ ] Set up automated backups for PostgreSQL
- [ ] Configure proper logging
- [ ] Set up monitoring/alerting
- [ ] Review CORS settings for production domain
- [ ] Configure load balancer if needed

## 📚 Dependencies

### Backend (pom.xml)
- Spring Boot 3.2.0
- Spring Data JPA
- PostgreSQL Driver 42.7.1
- Lombok (code generation)

### Frontend (package.json)
- React 18.2.0
- Vite 5.0.8
- Axios 1.6.2
- React Router 6.20.0

## 🐛 Common Issues & Solutions

### Issue: Backend cannot connect to database
**Solution**: Check `postgres` service is healthy
```bash
docker-compose logs postgres
```

### Issue: Frontend shows CORS error
**Solution**: Verify CORS is configured in `Application.java`

### Issue: Port already in use
**Solution**: Change ports in `.env`

### Issue: Database connection refused
**Solution**: Wait for postgres to be ready (check health checks)

## 📞 Getting Help

1. Check logs: `docker-compose logs`
2. Verify network: `docker-compose exec backend ping postgres`
3. Test endpoints: Use curl or Postman
4. Check environment variables: `docker-compose config`

---

**Happy Coding! 🚀**
