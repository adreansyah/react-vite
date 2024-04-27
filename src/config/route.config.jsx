import Home from "../pages/home"
import Login from "../pages/login"
import PilihMobil from "../pages/pilih.mobil"

export const privateRoutes = () => {
    return [{
        index: true,
        path: "/home",
        element: 'pembayaran',
    }]
}

export const publicRoutes = (props) => {
    return [{
        index: true,
        path: "/",
        element: <Home title="Home" {...props} />,
    }, {
        index: true,
        path: "/pilih-mobil",
        element: <PilihMobil title="mulai sewa" {...props} />,
    }
        , {
        index: true,
        path: "/login",
        element: <Login {...props} />,
    }, {
        index: true,
        path: "/register",
        element: 'dafter',
    }]
}
