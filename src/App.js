import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'


//Pages
import Home from './components/Home';
import Create from './components/Create';
import About from './components/About';
import RootLayouts from './layouts/RootLayout';
import Learn from './components/Learn';
import Contact from './components/Contact';
import Archive from './components/Archive';
import Signup from './components/Signup';
import Login from './components/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path='create' element={<Create />} />
      <Route path='archive' element={<Archive />} />
      <Route path='learn' element={<Learn />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
)

function App() {


  return (

    <RouterProvider router={router} />

  );
}

export default App;
