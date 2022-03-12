import React,{ useState } from 'react';
import ReactMapGl from 'react-map-gl';

const Map = () => {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitute: 37.7577,
        longitude: -122.4376,
        zoom: 8,
    });
    return (
        <ReactMapGl
        mapStyle='mapbox://styles/ashishbara/cksplo2110fdc17lk0m67d95l'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}

        >

        </ReactMapGl>
    );
}

export default Map;
