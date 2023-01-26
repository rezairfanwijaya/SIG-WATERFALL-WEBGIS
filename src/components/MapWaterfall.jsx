// import component
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";

// import style
import "leaflet/dist/leaflet.css"

// import images
import curugCeheng from '../assets/ceheng.jpg'
import curugBayan from '../assets/bayan.jpg'
import curugCarang from '../assets/carang.jpg'
import curugTelu from '../assets/telu.jpg'
import curugJenggala from '../assets/jenggala.jpg'
import icon from "leaflet/dist/images/marker-icon-new.png";

const MapWaterfall = () => {
    // set marker
    let DefaultIcon = L.icon({
        iconUrl: icon,
        iconSize: 30
    });

    L.Marker.prototype.options.icon = DefaultIcon

    // data air terjun
    const waterfalls = [
        {
            name: "Ceheng Waterfall",
            image: curugCeheng,
            location: "Gandatapa I, Gandatapa, Kec. Sumbang, Kabupaten Banyumas, Jawa Tengah 53183",
            long: -7.323390633703521,
            lat: 109.26442339050075,
            detail:"https://shrtco.de/y2Pow"
        },
        {
            name: "Bayan Waterfall",
            image: curugBayan,
            location: "Dusun II Ketenger, Ketenger, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53151",
            long: -7.325150369299774,
            lat: 109.21927987103176,
            detail:"https://shrtco.de/uEL3da"
        },
        {
            name: "Carang Waterfall",
            image: curugCarang,
            location: "Kemutug Kidul, Sawah, Kotayasa, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53151",
            long: -7.339378676090392,
            lat:  109.24249452098472,
            detail:"https://shrtco.de/Qkl5sP"
        },
        {
            name: "Telu Waterfall",
            image: curugTelu,
            location: "Sawah & Hutan, Karangsalam, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53151",
            long: -7.3195557284330235,
            lat:  109.24248896732911,
            detail:"https://shrtco.de/TDDKdy"
        },
        {
            name: "Jenggala Waterfall",
            image: curugJenggala,
            location: "Jl. Pangeran Limboro, Dusun III Kalipagu, Ketenger, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53152",
            long: -7.308856428168456, 
            lat:  109.20944288452392,
            detail:"https://shrtco.de/GS1GUm"
        },
       
    ]

    return (<>
        <div className="content container mx-auto">
            <div className="mymap p-4 border flex drop-shadow-xl bg-white -mt-24 rounded-tl-3xl rounded-tr-3xl relative z-10" data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="1000">
                <MapContainer center={[-7.299914377805299, 109.21486432568072]} zoom={11} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=3SGAV6Zv17P9yOYDs6XRFI4xQDECOqZZFt80Jsslwomo9RTQ572gCylyVzE8vDuv"
                    />
                    {waterfalls.map((waterfall => (
                        <div key={waterfall.name}>
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
                                            <div className="detail">
                                                <a href={waterfall.detail} target={"_blank"}>
                                                    See Detail
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        </div>
                    )))}
                </MapContainer>
            </div>
        </div>
    </>);
}

export default MapWaterfall;