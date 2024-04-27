import { Navigate, useRoutes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { privateRoutes, publicRoutes } from "./route.config";

const isLoggedIn = false;

export const AppCreatePublicRoutes = (props) => {
    const routes = useRoutes(publicRoutes(props));
    return routes ? routes : <Navigate replace to={{ pathname: '/' }} />;
}

export const AppCreatePrivateRoutes = (props) => {
    const routes = useRoutes(privateRoutes(props));
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home');
    }, [navigate]);
    return routes;
}

export const PublicRoute = (props) => {
    if (isLoggedIn) return <AppCreatePrivateRoutes {...props} />
    return <AppCreatePublicRoutes {...props} />;
}