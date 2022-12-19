import { useRoutes } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Home from '../View/Home/Home';
import Login from '../View/Login/Login';
import WishList from '../View/WishList/WishList';

export const Router = {
  appRouter: [
    {
      path: '*', 
      element: <ErrorPage />
    },
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/wishList',
      element: <WishList />,
    },
  ],

  Home: () => '/',
  LoginPage: () => 'login',
  WishList: () => 'wishList'
};

const AppRouter = () => {
  let routes = useRoutes(Router.appRouter);
  return routes;
};

export default AppRouter;

