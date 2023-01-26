import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"

const MapWaterfall = () => {
    return (<>
        <div className="mymap p-3 border flex bg-white -mt-16 rounded-3xl">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=3SGAV6Zv17P9yOYDs6XRFI4xQDECOqZZFt80Jsslwomo9RTQ572gCylyVzE8vDuv"
                />
                <Marker position={[51.505, -0.09]}>
                </Marker>
            </MapContainer>
        </div>
    </>);
}

export default MapWaterfall;