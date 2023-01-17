import Map, { Marker,Popup } from 'react-map-gl'
import { useState,useEffect } from 'react'
import "mapbox-gl/dist/mapbox-gl.css"
import "./Newmap.css"
const Newmap = ({ lon, latt }) => {
  const [pin, setPin] = useState([])

  const marking = async () => {
    const response = await fetch('http://localhost:7000/api/Tour')
    const data = await response.json();
    console.log(data)
    setPin(data)
  }
  useEffect(() => {
    marking();
  }, [])

  console.log(lon, latt)
  return (
    <div className='map'>
      <Map
        mapboxAccessToken='pk.eyJ1Ijoic3JlZXJhbS05NjMiLCJhIjoiY2xjNHU1NWZ6MHJmOTNvcGduYWw4c29kbCJ9.doao-ptGc_cZGyLGCrVZUg'

        style={{
          width: "600px",
          height: "400px",
          overflow: "hidden",
          marginTop:"-40px"
        }}
        initialViewState={
          {
            zoom: 16,
            longitude: lon,
            latitude: latt
          }
        }
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12">
      
        
      {
              pin.map((item, i) => {
                const { location: { coordinate: [lan, lat] } } = item;
                return (
                  < div key={i}>
                    <Marker key={i} longitude={lan} latitude={lat}  >
                    <img src="https://cdn-icons-png.flaticon.com/512/7976/7976202.png" alt="" className='marker'/>
                    </Marker>
                   
                      <Popup longitude={lan} latitude={lat} anchor="top">
                        {item.title}
                      </Popup>
                     
                  </div>
                )
              })
            }
      
      </Map>


    </div>
  )
}

export default Newmap