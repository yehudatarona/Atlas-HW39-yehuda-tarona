import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import "../css_comps/atlas.css"



function AppMap(props){
    let item =props.item;

  return(
    <div className="mt-2 map col">
      <Map  center={[item.latlng[0], item.latlng[1]]} zoom={4}>
            <TileLayer 
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker 
              position={[item.latlng[0], item.latlng[1]]}
            />
          </Map>
     </div> 
  )
}

export default AppMap
