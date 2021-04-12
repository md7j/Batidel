import '../styles/MapScreen.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function MapScreen() {
    const position = [48.864716, 2.349];
    return (
        <div className="wrapper">
            <div className="card map">
                <div className="card-header">
                    Carte
                </div>
                <div className="card-body">
                    <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <div className="card options">

            </div>
        </div>
    );
}

export default MapScreen;