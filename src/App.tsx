import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

/**
 * Main App Component
 * Entry point that provides routing to the application
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
