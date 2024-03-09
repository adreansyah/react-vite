import { useGeolocated } from "react-geolocated";

const Location = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <>Your browser does not support Geolocation</>
    ) : !isGeolocationEnabled ? (
        <>Geolocation is not enabled</>
    ) : coords ? (
        <>{coords.latitude} - {coords.latitudelongitude}</>
    ) : (
        <>Getting the location data&hellip; </>
    )
}

export default Location;