import Home from "../pages/home"
import Login from "../pages/login"
import PilihMobil from "../pages/pilih.mobil"
import DetailPage from "../pages/pilih.mobil/detail"
import Register from "../pages/register"

export const privateRoutes = (props) => {
    return [{
        index: true,
        path: "/",
        element: <Home title="Home" {...props} />,
    }, {
        index: true,
        path: "/home",
        element: <Home title="Home" {...props} />,
    }, {
        index: true,
        path: "/pilih-mobil",
        element: <PilihMobil title="mulai sewa" {...props} />,
    }, {
        index: true,
        path: "/detail/:carId",
        element: <DetailPage title="Detail Mobil" {...props} />,
    }, {
        index: true,
        path: "/payment",
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
    }, {
        index: true,
        path: "/login",
        element: <Login {...props} />,
    }, {
        index: true,
        path: "/register",
        element: <Register {...props} />,
    }]
}
