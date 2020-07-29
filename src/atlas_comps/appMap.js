import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import "../css_comps/atlas.css"



function AppMap(props){
    let item =props.item;

  return(
    <div>
      <Map center={[item.latlng[0], item.latlng[1]]} zoom={5}>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[31.5, 34.75]}
            />
          </Map>
    </div> 
  )
}

export default AppMap


//npm install leaflet  
// npm install react-leaflet 