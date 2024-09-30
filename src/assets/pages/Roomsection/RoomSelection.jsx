import React, { useState } from 'react';
import singleRoomData from './SingleRoom.json';
import doubleRoomData from './DoubleRoom.json';
import tripleRoomData from './TripleRoom.json';
import floorData from './Floor.json';

const RoomSelection = () => {
  const [selectedRoomType, setSelectedRoomType] = useState(null); 
  const [searchQuery, setSearchQuery] = useState('');

  const roomData = {
    'Single Room': singleRoomData,
    'Double Room': doubleRoomData,
    'Triple Room': tripleRoomData,
    'Floor': floorData,
  };

  const handleRoomClick = (roomType) => {
    if (selectedRoomType === roomType) {
      setSelectedRoomType(null);
    } else {
      setSelectedRoomType(roomType);
    }
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
    <div>
      <section className="search-bar">
        <input
          type="text"
          placeholder="Search by name, phone, price, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>

      {/* Room Selection Section */}
      <section className="room-selection">
        <div className="container-room">
          {Object.keys(roomData).map((roomType) => (
            <div key={roomType} className="room" onClick={() => handleRoomClick(roomType)}>
              <h2>{roomType}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* Room Details Section (Cards with Flexbox) */}
      <section className="room-details">
        <div className="room-details-container">
          {selectedRoomType && (
            <div className="room-info">
              <h2>{selectedRoomType}</h2>
              <div className="room-cards">
                {filteredRooms.map((room, index) => (
                  <div key={index} className="room-card">
                    <div className="room-card-content">
                      <p><strong>LandLord Name:</strong> {room.Landloardname}</p>
                      <p><strong>Description:</strong> {room.description}</p>
                      <p><strong>Price:</strong> {room.price}</p>
                      <p><strong>Location:</strong> {room.location}</p>
                      <p><strong>Phone:</strong> {room.phone}</p>
                      <p><strong>Amenities:</strong></p>
                      <ul>
                        {room.amenities?.map((amenity, i) => (
                          <li key={i}>{amenity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
   </div>
  );
};

export default RoomSelection;
