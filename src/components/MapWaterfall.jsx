// import component
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";

// import style
import "leaflet/dist/leaflet.css"

// import images
import curugCeheng from '../assets/ceheng.jpg'
import icon from "leaflet/dist/images/marker-icon.png";

const MapWaterfall = () => {
    // set marker
    let DefaultIcon = L.icon({
        iconUrl: icon,
    });

    L.Marker.prototype.options.icon = DefaultIcon

    // data air terjun
    const waterfalls = [
        {
            name: "Ceheng Waterfall",
            image: curugCeheng,
            location: "M7G7+HJG, Gandatapa I, Gandatapa, Kec. Sumbang, Kabupaten Banyumas, Jawa Tengah 53183",
            long: -7.323390633703521,
            lat: 109.26442339050075
        }
    ]


    return (<>
        <div className="content container mx-auto">
            <div className="mymap p-4 border flex drop-shadow-xl bg-white -mt-24 rounded-tl-3xl rounded-tr-3xl relative z-10" data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="1000">
                <MapContainer center={[-7.421082555393165, 109.23802764764444]} zoom={9} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=3SGAV6Zv17P9yOYDs6XRFI4xQDECOqZZFt80Jsslwomo9RTQ572gCylyVzE8vDuv"
                    />
                    {waterfalls.map((waterfall => (
                        <div id={waterfall.name}>
                            <Marker position={[waterfall.long, waterfall.lat]}>
                                <Popup>
                                    <div className="content flex flex-col gap-4">
                                        <img src={waterfall.image} alt={waterfall.name} className="w-96" />
                                        <div className="title font-bold text-2xl">
                                            {waterfall.name}
                                        </div>
                                        <div className="location flex flex-col gap-2">
                                            <div className="title-location font-bold">
                                                Location 
                                            </div>
                                            {waterfall.location}
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        </div>
                    )))}

                    {/* <Marker position={[-7.323390633703521, 109.26442339050075]}>
                        <Popup>
                            <div className="content flex flex-col gap-4">
                                <img src={curugCeheng} alt="idk" className="w-96" />
                                <div className="title font-bold text-2xl">
                                    hehe
                                </div>
                                <div className="location">
                                    hehe
                                </div>
                            </div>
                        </Popup>
                    </Marker> */}

                </MapContainer>
            </div>
        </div>
    </>);
}

export default MapWaterfall;