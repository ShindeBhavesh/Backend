import { useState } from 'react';

type TabType = 'overview' | 'setup' | 'api' | 'models' | 'testing';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'setup', label: 'Setup Guide' },
    { id: 'api', label: 'API Reference' },
    { id: 'models', label: 'Data Models' },
    { id: 'testing', label: 'Testing' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">ShopEase API</h1>
              <p className="text-xs text-slate-400">E-Commerce Backend Documentation</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
              v1.0.0
            </span>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <nav className="border-b border-slate-700 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium text-sm transition-colors whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? 'text-emerald-400 border-emerald-400'
                    : 'text-slate-400 border-transparent hover:text-white hover:border-slate-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'setup' && <SetupTab />}
        {activeTab === 'api' && <ApiTab />}
        {activeTab === 'models' && <ModelsTab />}
        {activeTab === 'testing' && <TestingTab />}
      </main>

      <footer className="border-t border-slate-700 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          ShopEase E-Commerce API • Built with Spring Boot, Spring Security, JWT, and Stripe
        </div>
      </footer>
    </div>
  );
}

function OverviewTab() {
  const features = [
    { icon: '🔐', title: 'JWT Authentication', desc: 'Secure token-based auth with refresh tokens' },
    { icon: '👥', title: 'Role-Based Access', desc: 'USER and ADMIN roles with granular permissions' },
    { icon: '🛒', title: 'Shopping Cart', desc: 'Full cart management with stock validation' },
    { icon: '📦', title: 'Order Processing', desc: 'Complete order lifecycle management' },
    { icon: '💳', title: 'Stripe Payments', desc: 'Secure checkout with webhook handling' },
    { icon: '📚', title: 'OpenAPI Docs', desc: 'Interactive Swagger UI documentation' },
  ];

  const techStack = [
    { name: 'Java 17', color: 'bg-red-500' },
    { name: 'Spring Boot 3.2', color: 'bg-green-500' },
    { name: 'Spring Security', color: 'bg-green-600' },
    { name: 'JWT', color: 'bg-purple-500' },
    { name: 'MySQL', color: 'bg-blue-500' },
    { name: 'Stripe', color: 'bg-indigo-500' },
    { name: 'JUnit 5', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Production-Ready E-Commerce Backend
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          A complete Spring Boot backend with authentication, product management,
          cart, orders, and Stripe payment integration.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-colors">
            <span className="text-3xl mb-4 block">{feature.icon}</span>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm">{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span key={i} className={`${tech.color} px-3 py-1 rounded-full text-white text-sm font-medium`}>
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Project Structure</h3>
        <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
{`backend/
├── src/main/java/com/shopease/
│   ├── EcommerceApplication.java
│   ├── config/          # Security, Stripe, OpenAPI configs
│   ├── controller/      # REST API endpoints
│   ├── dto/             # Request/Response DTOs
│   ├── entity/          # JPA entities
│   ├── exception/       # Global exception handling
│   ├── mapper/          # Entity-DTO mappers
│   ├── repository/      # Spring Data repositories
│   ├── security/        # JWT, filters, user details
│   ├── service/         # Business logic
│   └── util/            # Utility classes
├── src/main/resources/
│   └── application.yml  # Configuration
├── src/test/            # Unit & integration tests
└── pom.xml              # Maven dependencies`}
        </pre>
      </section>
    </div>
  );
}

function SetupTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Setup Guide</h2>

      <div className="space-y-4">
        <Step number={1} title="Prerequisites">
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>JDK 17 or higher</li>
            <li>Maven 3.8+</li>
            <li>MySQL 8.0+</li>
            <li>Stripe Account (for payments)</li>
          </ul>
        </Step>

        <Step number={2} title="Database Setup">
          <CodeBlock language="sql">{`CREATE DATABASE shopease_db;
CREATE USER 'shopease'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON shopease_db.* TO 'shopease'@'localhost';
FLUSH PRIVILEGES;`}</CodeBlock>
        </Step>

        <Step number={3} title="Environment Variables">
          <CodeBlock language="bash">{`# Database
export DB_HOST=localhost
export DB_PORT=3306
export DB_NAME=shopease_db
export DB_USERNAME=shopease
export DB_PASSWORD=your_password

# JWT - Use a secure base64-encoded key (256+ bits)
export JWT_SECRET=dGhpc0lzQVZlcnlMb25nU2VjcmV0S2V5Rm9ySldUVG9rZW4...
export JWT_EXPIRATION=86400000

# Stripe - Get from Stripe Dashboard
export STRIPE_API_KEY=sk_test_your_secret_key
export STRIPE_PUBLIC_KEY=pk_test_your_public_key
export STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret`}</CodeBlock>
        </Step>

        <Step number={4} title="Build & Run">
          <CodeBlock language="bash">{`cd backend

# Install dependencies and build
mvn clean install

# Run the application
mvn spring-boot:run

# Or run the JAR directly
java -jar target/ecommerce-api-1.0.0.jar`}</CodeBlock>
        </Step>

        <Step number={5} title="Verify Installation">
          <p className="text-slate-300 mb-3">Access these URLs to verify the setup:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-sm font-mono">
                http://localhost:8080/swagger-ui.html
              </span>
              <span className="text-slate-400">Swagger UI</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-sm font-mono">
                http://localhost:8080/api-docs
              </span>
              <span className="text-slate-400">OpenAPI JSON</span>
            </li>
          </ul>
        </Step>
      </div>
    </div>
  );
}

function ApiTab() {
  const endpoints = [
    {
      category: 'Authentication',
      color: 'emerald',
      routes: [
        { method: 'POST', path: '/api/auth/register', desc: 'Register new user', auth: false },
        { method: 'POST', path: '/api/auth/login', desc: 'User login', auth: false },
        { method: 'GET', path: '/api/auth/me', desc: 'Get current user', auth: true },
        { method: 'POST', path: '/api/auth/logout', desc: 'Logout', auth: true },
      ]
    },
    {
      category: 'Products',
      color: 'blue',
      routes: [
        { method: 'GET', path: '/api/products', desc: 'List all products', auth: false },
        { method: 'GET', path: '/api/products/{id}', desc: 'Get product by ID', auth: false },
        { method: 'GET', path: '/api/products/search', desc: 'Search products', auth: false },
        { method: 'POST', path: '/api/products', desc: 'Create product', auth: 'ADMIN' },
        { method: 'PUT', path: '/api/products/{id}', desc: 'Update product', auth: 'ADMIN' },
        { method: 'DELETE', path: '/api/products/{id}', desc: 'Delete product', auth: 'ADMIN' },
      ]
    },
    {
      category: 'Cart',
      color: 'purple',
      routes: [
        { method: 'GET', path: '/api/cart', desc: 'Get cart', auth: true },
        { method: 'POST', path: '/api/cart/items', desc: 'Add to cart', auth: true },
        { method: 'PUT', path: '/api/cart/items/{productId}', desc: 'Update quantity', auth: true },
        { method: 'DELETE', path: '/api/cart/items/{productId}', desc: 'Remove item', auth: true },
        { method: 'DELETE', path: '/api/cart', desc: 'Clear cart', auth: true },
      ]
    },
    {
      category: 'Orders',
      color: 'orange',
      routes: [
        { method: 'POST', path: '/api/orders', desc: 'Create order', auth: true },
        { method: 'GET', path: '/api/orders/{id}', desc: 'Get order', auth: true },
        { method: 'GET', path: '/api/orders/my-orders', desc: 'Get user orders', auth: true },
        { method: 'POST', path: '/api/orders/{id}/cancel', desc: 'Cancel order', auth: true },
        { method: 'GET', path: '/api/orders/admin/all', desc: 'Get all orders', auth: 'ADMIN' },
      ]
    },
    {
      category: 'Payments',
      color: 'pink',
      routes: [
        { method: 'POST', path: '/api/payments/checkout', desc: 'Create checkout session', auth: true },
        { method: 'GET', path: '/api/payments/status/{orderId}', desc: 'Get payment status', auth: true },
        { method: 'GET', path: '/api/payments/confirm', desc: 'Confirm payment', auth: true },
        { method: 'POST', path: '/api/payments/webhook', desc: 'Stripe webhook', auth: false },
      ]
    },
  ];

  const methodColors: Record<string, string> = {
    GET: 'bg-green-500',
    POST: 'bg-blue-500',
    PUT: 'bg-yellow-500',
    DELETE: 'bg-red-500',
    PATCH: 'bg-purple-500',
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">API Reference</h2>

      {endpoints.map((group, i) => (
        <div key={i} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
          <div className={`px-4 py-3 bg-${group.color}-500/10 border-b border-slate-700`}>
            <h3 className={`font-semibold text-${group.color}-400`}>{group.category}</h3>
          </div>
          <div className="divide-y divide-slate-700/50">
            {group.routes.map((route, j) => (
              <div key={j} className="px-4 py-3 flex items-center gap-4 hover:bg-slate-700/30 transition-colors">
                <span className={`${methodColors[route.method]} px-2 py-0.5 rounded text-xs font-bold text-white min-w-[50px] text-center`}>
                  {route.method}
                </span>
                <code className="text-slate-300 font-mono text-sm flex-1">{route.path}</code>
                <span className="text-slate-400 text-sm hidden sm:block">{route.desc}</span>
                {route.auth === 'ADMIN' ? (
                  <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs">Admin</span>
                ) : route.auth ? (
                  <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded text-xs">Auth</span>
                ) : (
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">Public</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Sample Requests</h3>
        <div className="space-y-4">
          <div>
            <p className="text-slate-400 text-sm mb-2">Register User</p>
            <CodeBlock language="bash">{`curl -X POST http://localhost:8080/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "SecurePass123!"
  }'`}</CodeBlock>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-2">Create Order</p>
            <CodeBlock language="bash">{`curl -X POST http://localhost:8080/api/orders \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "shippingAddress": "123 Main St",
    "shippingCity": "New York",
    "shippingState": "NY",
    "shippingZipCode": "10001",
    "shippingCountry": "USA"
  }'`}</CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModelsTab() {
  const models = [
    {
      name: 'User',
      fields: [
        { name: 'id', type: 'Long', desc: 'Primary key' },
        { name: 'firstName', type: 'String', desc: 'User first name' },
        { name: 'lastName', type: 'String', desc: 'User last name' },
        { name: 'email', type: 'String', desc: 'Unique email address' },
        { name: 'password', type: 'String', desc: 'BCrypt hashed password' },
        { name: 'role', type: 'Role', desc: 'USER or ADMIN' },
        { name: 'enabled', type: 'boolean', desc: 'Account status' },
      ]
    },
    {
      name: 'Product',
      fields: [
        { name: 'id', type: 'Long', desc: 'Primary key' },
        { name: 'name', type: 'String', desc: 'Product name' },
        { name: 'description', type: 'String', desc: 'Product description' },
        { name: 'price', type: 'BigDecimal', desc: 'Product price' },
        { name: 'stockQuantity', type: 'Integer', desc: 'Available stock' },
        { name: 'imageUrl', type: 'String', desc: 'Product image URL' },
        { name: 'category', type: 'String', desc: 'Product category' },
        { name: 'active', type: 'boolean', desc: 'Product visibility' },
      ]
    },
    {
      name: 'Order',
      fields: [
        { name: 'id', type: 'Long', desc: 'Primary key' },
        { name: 'orderNumber', type: 'String', desc: 'Unique order number' },
        { name: 'user', type: 'User', desc: 'Order owner (Many-to-One)' },
        { name: 'items', type: 'List<OrderItem>', desc: 'Order items (One-to-Many)' },
        { name: 'totalPrice', type: 'BigDecimal', desc: 'Total order amount' },
        { name: 'paymentStatus', type: 'PaymentStatus', desc: 'Payment state' },
        { name: 'orderStatus', type: 'OrderStatus', desc: 'Order state' },
        { name: 'shippingAddress', type: 'String', desc: 'Delivery address' },
      ]
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Data Models</h2>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Entity Relationships</h3>
        <pre className="text-sm text-slate-300 font-mono">
{`User ─────┬──── Cart (One-to-One)
          │       └── CartItem (One-to-Many)
          │              └── Product (Many-to-One)
          │
          └──── Order (One-to-Many)
                  └── OrderItem (One-to-Many)
                         └── Product (Many-to-One)`}
        </pre>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {models.map((model, i) => (
          <div key={i} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
            <div className="px-4 py-3 bg-emerald-500/10 border-b border-slate-700">
              <h3 className="font-semibold text-emerald-400">{model.name}</h3>
            </div>
            <div className="p-4 space-y-2">
              {model.fields.map((field, j) => (
                <div key={j} className="flex items-start gap-2 text-sm">
                  <code className="text-purple-400 min-w-[100px]">{field.name}</code>
                  <span className="text-slate-500">{field.type}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Enums</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Role</h4>
            <code className="text-slate-300 text-sm">USER, ADMIN</code>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">PaymentStatus</h4>
            <code className="text-slate-300 text-sm">PENDING, PROCESSING, COMPLETED, FAILED, REFUNDED, CANCELLED</code>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">OrderStatus</h4>
            <code className="text-slate-300 text-sm">PENDING, CONFIRMED, PROCESSING, SHIPPED, DELIVERED, CANCELLED, RETURNED</code>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestingTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Testing</h2>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Running Tests</h3>
        <CodeBlock language="bash">{`# Run all tests
mvn test

# Run with coverage report
mvn test jacoco:report

# Run specific test class
mvn test -Dtest=AuthServiceTest

# Run integration tests only
mvn test -Dtest=*IntegrationTest`}</CodeBlock>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Unit Tests</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>AuthServiceTest
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>ProductServiceTest
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>CartServiceTest
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>OrderServiceTest
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>PaymentServiceTest
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>JwtTokenProviderTest
            </li>
          </ul>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Integration Tests</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>AuthControllerIntegrationTest
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>ProductControllerIntegrationTest
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Test Configuration</h3>
        <p className="text-slate-400 mb-4">
          Integration tests use H2 in-memory database configured in <code className="text-emerald-400">application-test.yml</code>
        </p>
        <CodeBlock language="yaml">{`spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
  jpa:
    hibernate:
      ddl-auto: create-drop`}</CodeBlock>
      </div>
    </div>
  );
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {number}
        </span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function CodeBlock({ children, language }: { children: string; language: string }) {
  return (
    <div className="relative">
      <span className="absolute top-2 right-2 text-xs text-slate-500 uppercase">{language}</span>
      <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto text-sm text-slate-300 font-mono">
        {children}
      </pre>
    </div>
  );
}
