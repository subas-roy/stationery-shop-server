// Importing required modules
import express, { Application, Request, Response } from 'express'; // Express framework and TypeScript types
import cors from 'cors'; // Cross-Origin Resource Sharing middleware

// Initialize the Express application
const app: Application = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); // Parses incoming JSON payloads and makes them available on req.body

// Middleware to enable Cross-Origin Resource Sharing
app.use(cors()); // Allows the server to handle requests from different origins (useful for APIs accessed from different domains)

/**
 * Define a basic route for the root URL ('/')
 * Method: GET
 * Description: Responds with a numeric value
 */
app.get('/', (req: Request, res: Response) => {
  const a: number = 10; // Define a numeric constant `a`

  res.send(a.toString()); // Send the numeric value as a string in the response
});

// Export the application object for use in other files
export default app;
