// Import required modules
import mongoose from 'mongoose'; // MongoDB object modeling tool
import app from './app'; // Express application instance
import config from './app/config'; // Configuration settings (e.g., database URL, port)

/**
 * Main function to establish database connection and start the server
 */
async function main() {
  try {
    // Connect to the MongoDB database using Mongoose
    await mongoose.connect(config.database_url as string); // Database URL is retrieved from the configuration

    // Start the Express server
    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`); // Log the port the app is running on
    });
  } catch (error) {
    // Handle any errors during database connection or server start-up
    console.error('Error starting the application:', error);
  }
}

// Call the main function to initialize the app
main();
