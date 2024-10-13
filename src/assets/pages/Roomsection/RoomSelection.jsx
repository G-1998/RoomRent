import React, { useState, useRef } from 'react';
import './Roomsection.css';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick"; // Import the Slider
import singleRoomData from './SingleRoom.json';
import doubleRoomData from './DoubleRoom.json';
import tripleRoomData from './TripleRoom.json';
import floorData from './Floor.json';

const RoomSelection = () => {
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const sliderRef = useRef(null); // Create a ref for the slider

  const roomData = {
    'Single Room': singleRoomData,
    'Double Room': doubleRoomData,
    'Triple Room': tripleRoomData,
    'Floor': floorData,
  };

  const handleRoomClick = (roomType) => {
    setSelectedRoomType((prev) => (prev === roomType ? null : roomType));
  };

  const filteredRooms = selectedRoomType
    ? roomData[selectedRoomType].filter(room =>
        room.Landloardname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.phone.includes(searchQuery) ||
        room.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  
  return (
    <div className='background-about'>
      <section className="search-bar">
        <input
          type="text"
          placeholder="Search by name, phone, price, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search for rooms"
        />
      </section>

      {/* Room Selection Section */}
      <section className="room-selection">
        <div className="container-room">
          {Object.keys(roomData).map((roomType) => (
            <div 
              key={roomType} 
              className={`room ${selectedRoomType === roomType ? 'active' : ''}`} 
              onClick={() => handleRoomClick(roomType)}
              role="button"
              aria-pressed={selectedRoomType === roomType}
            >
              <h2>{roomType}</h2>
            </div>
          ))}
        </div>
      </section>

     
      <section className="room-details">  
      <div className='headingroomtype'>     
              <h2>{selectedRoomType}</h2> 
              </div>    
        <div className="room-details-container">         
          {selectedRoomType && (             
            <div className="room-info">                
                {filteredRooms.map((room, index) => (
                  <div key={index} className="room-card">
                    <div className="room-card-content">
                      <p><strong>Landlord Name:</strong> {room.Landloardname}</p>
                      <p><strong>Description:</strong> {room.description}</p>
                      <p><strong>Price:</strong> {room.price}</p>
                      <div className="more-details">
                        <a href="#">More Details..</a>
                      </div>
                    </div>
                  </div>
                ))}
              

             
             
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RoomSelection;
