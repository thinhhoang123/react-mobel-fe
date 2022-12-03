import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Contact from '../Contact';
import Home from '../View/Home/Home';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/abc',
    element: <Contact />,
  },
]);

export default AppRouter;
