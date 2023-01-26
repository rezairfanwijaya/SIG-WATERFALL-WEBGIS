import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"

const MapWaterfall = () => {
    return (<>
        <div className="mymap p-3 border flex bg-white -mt-24 rounded-tr-3xl rounded-tl-3xl relative z-10" data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="1000">
            <MapContainer center={[-7.421082555393165, 109.23802764764444]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=3SGAV6Zv17P9yOYDs6XRFI4xQDECOqZZFt80Jsslwomo9RTQ572gCylyVzE8vDuv"
                />
            </MapContainer>
        </div>
    </>);
}

export default MapWaterfall;