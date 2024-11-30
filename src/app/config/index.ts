// Import required modules
import dotenv from 'dotenv'; // Module to load environment variables from a .env file
import path from 'path'; // Module to handle and transform file paths

// Load environment variables from a .env file
dotenv.config({ path: path.join(process.cwd(), '.env') });
// `process.cwd()` gets the current working directory, and `.env` is the environment configuration file

/**
 * Export configuration values from environment variables
 * - `port`: The port on which the application will run
 * - `database_url`: The MongoDB connection URL
 */
export default {
  port: process.env.PORT, // Port number from .env file
  database_url: process.env.DATABASE_URL, // Database URL from .env file
};
