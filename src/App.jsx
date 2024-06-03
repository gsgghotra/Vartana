import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary'; // Corrected import
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import RootLayout from './components/layouts/RootLayout';
import Logs from './pages/Logs';
import NotFound from './pages/NotFound';
import ErrorComponent from './pages/ErrorComponent';

const GlobalError = ({ error }) => (
  <div>
    <h2>Something went wrong:</h2>
    <pre>{error}</pre>
  </div>
);

const ErrorBoundaryLayout = () => (
  <ErrorBoundary fallback={<GlobalError />}>
    <Outlet />
  </ErrorBoundary>
);

export const AppRoutes = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "logs",
            element: <Logs />,
          },
          {
            path: "error",  // New route for testing
            element: <ErrorComponent />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={AppRoutes} />
  );
}

export default App;
