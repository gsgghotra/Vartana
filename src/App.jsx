import { BrowserRouter as Router, Route, createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbaord from './pages/Dashboard';
import RootLayout from './components/layouts/RootLayout';
import Logs from './pages/Logs';
import NotFound from './pages/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashbaord/>}/>
        <Route path="logs" element={<Logs/>}/>

        <Route path="*" element={<NotFound />} />
      </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
