# The Bookery (Server)

The Bookery is an online platform designed to streamline library management and improve the user experience for borrowing books. This repository contains the backend codebase for the system.

Check out: [The Bookery (Client)](https://github.com/bp82125/TheBookery-Client)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Prisma ORM)
- **Authentication**: Passport.js with JWT and Local Strategies
- **Validation**: zod, express-validator, class-validator and class-transformer

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)
- npm or yarn package manager

### Installation

#### 1. Clone the repository:

   ```bash
   git clone https://github.com/bp82125/thebookery-server.git
   cd thebookery-server
   ```

#### 2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

#### 3. Set Up the Database
- Install MongoDB locally or create a cluster using MongoDB Atlas.
- Obtain your MongoDB connection URI (e.g., `mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority`).
- Ensure the `DATABASE_URL` in your .env file matches the connection URI you obtained.

#### 4. Set Up Cloudinary
Create a Cloudinary bucket and obtain the following credentials if you don’t already have them:

- Cloud Name
- API Key
- API Secret
- Upload Preset

#### 5. Configure Environment Variables
Copy the .env.example file to create your .env file:
```bash
cp .env.example .env
```

Update the .env file with the necessary values:
```env
# MongoDB connection URI (for local or MongoDB Atlas)
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority"

# Cloudinary credentials (refer to the values you obtained in step 4)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_UPLOAD_PRESET=your_upload_preset

# JWT configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRE_IN=1h

# Admin credentials (used to log into the system)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
```

#### 6. Generate Prisma client:

   ```bash
   npx prisma generate
   ```

#### 7. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

   The server will run at `http://localhost:5000` by default.

### Development Workflow

**Prisma Migrations**: To apply database schema changes:

  ```bash
  npx prisma migrate dev
  ```

**Linting**: Ensure code quality with ESLint:
  ```bash
  npm run lint
  # or
  yarn lint
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
