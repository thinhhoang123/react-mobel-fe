import { useRoutes } from 'react-router-dom';
import Home from '../View/Home/Home';
import Login from '../View/Login/Login';

export const Router = {
  appRouter: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ],

  Home: () => '/',
  LoginPage: () => 'login',
};

const AppRouter = () => {
  let routes = useRoutes(Router.appRouter);
  return routes;
};

export default AppRouter;

