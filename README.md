# The Bookery (Server)

> This project is the final assignment for the CT449 Web Application Development course.


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
To enable media upload and storage with Cloudinary, you’ll need the following credentials:

- `cloud_name`
- `api_key`
- `api_secret`
- `upload_preset`

#### Steps to obtain the credentials if you don't have ones:

- Sign Up or Log In:
   - Go to [Cloudinary](https://cloudinary.com/) and sign up or log in.

- Get Cloud Name, API Key, and API Secret:
   - After logging in, go to your [Cloudinary Dashboard](https://cloudinary.com/console).
   - Under **Account Details**, copy the following:
     - **Cloud Name**
     - **API Key**
     - **API Secret**

- Create an Upload Preset:
   - Go to **Settings** > **Upload** tab.
   - Scroll down to the **Upload Presets** section.
   - Click **Add upload preset**.
   - Configure the preset:
     - Enable **unsigned uploads** if you want client-side uploads (from frontend).
     - Optionally configure folder, allowed formats, transformations, etc.
   - Save and copy the **Upload Preset Name**.

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

#### ⚠️ Note: MongoDB Replica Set Required 

Prisma requires MongoDB to run as a **replica set** to support transactions.

If you're using a local MongoDB instance, you can follow this [workaround](https://github.com/prisma/prisma/discussions/18958#discussioncomment-10943316) to set up a single-node replica set.


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
