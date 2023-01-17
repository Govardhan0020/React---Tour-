import React, { useEffect, useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css"
import { Link } from 'react-router-dom';
import './Locations.css'
import Cards from '../FetchData/Cards';

const Locations = () => {

  //popup message
  const [currentPlace, setCurrentPlace] = useState(null)

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

  const handleClick = (id) => {
    setCurrentPlace(!currentPlace)
  }

  return (
    <>
      < div className='main-map'>
        <div className='map'>
          <Map
            initialViewState={{
              longitude: 78.4867,
              latitude: 17.3850,
              zoom: 11.19,
            }}
            mapboxAccessToken='pk.eyJ1Ijoic3JlZXJhbS05NjMiLCJhIjoiY2xjNHU1NWZ6MHJmOTNvcGduYWw4c29kbCJ9.doao-ptGc_cZGyLGCrVZUg'

            style={{
              height: "700px",
              border: "1px solid black",
              overflow: "hidden"
            }}
            mapStyle="mapbox://styles/mapbox/satellite-streets-v12">

            {
              pin.map((item, i) => {
                const { location: { coordinate: [lan, lat] } } = item;
                return (
                  <div key={i}>

                    <Marker key={i} longitude={lan} latitude={lat}  >
                      <img src="https://cdn-icons-png.flaticon.com/512/7976/7976202.png" alt="" className='marker' />
                    </Marker>

                    <Popup longitude={lan} latitude={lat} anchor="top">
                      <div className='popup'>
                        {item.title}
                      </div>
                    </Popup>

                  </div>
                )
              })
            }
          </Map>
          <Link to='/addlocation' className="mapbutton">Add New Locations</Link>

        </div>

        <Cards />
      </div>

    </>
  );

}

export default Locations