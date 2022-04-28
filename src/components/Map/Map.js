import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import dataR from '../../assets/data.json';
import './Map.scss'

const Map = () => {
    return (
        <div className="map-wrapper">
            <MapContainer center={[40.6144847,22.9498393]} zoom={12.75}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    dataR['ΣΥΝΟΛΟ 2016'].map(item => (
                        <Marker 
                        key={item['Α/Α']} 
                        position={[
                            item.ΣΥΝΤΕΤΑΓΜΕΝΕΣ[0],
                            item.ΣΥΝΤΕΤΑΓΜΕΝΕΣ[1]
                        ]} 
                     />
                    ))}
            </MapContainer>
        </div>
    )
}

export default Map;