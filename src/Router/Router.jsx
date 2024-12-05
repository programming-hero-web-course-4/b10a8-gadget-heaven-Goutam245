import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import ProductCard from "../Components/ProductCard";
import ProductDeatils from "../Components/ProductDeatils";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <ProductCard></ProductCard>,
                        loader: ()=> fetch('../products.json'),
                    },
                    {
                        path: '/category/:category',
                        element: <ProductCard></ProductCard>,
                        loader: ()=> fetch('../products.json'),
                    }
                ]
            },
            {
                path: '/product/:id',
                element: <ProductDeatils></ProductDeatils>,
                loader: ()=> fetch('../products.json'),
            },
            {
                path: '/statistic',
                element: <Statistics></Statistics>,
                loader: ()=> fetch('../products.json'),
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },
]);

export default routes;