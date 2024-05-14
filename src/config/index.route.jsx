import { Navigate, useRoutes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./route.config";
import { isLoggedIn } from "../helper/generics";

export const AppCreatePublicRoutes = (props) => {
    const routes = useRoutes(publicRoutes(props));
    return routes ? routes : <Navigate replace to={{ pathname: '/' }} />;
}

export const AppCreatePrivateRoutes = (props) => {
    const routes = useRoutes(privateRoutes(props));
    return routes;
}

export const PublicRoute = (props) => {
    if (isLoggedIn()) return <AppCreatePrivateRoutes {...props} />
    return <AppCreatePublicRoutes {...props} />;
}