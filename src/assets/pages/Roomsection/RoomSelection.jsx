import React, { useState } from 'react';
import singleRoomData from './SingleRoom.json';
import doubleRoomData from './DoubleRoom.json';
import tripleRoomData from './TripleRoom.json';
import floorData from './Floor.json';

const RoomSelection = () => {
  const [selectedRoomType, setSelectedRoomType] = useState(null); // Store the selected room type (e.g., Single Room)
  const [searchQuery, setSearchQuery] = useState('');

  // Combine all room data into one object
  const roomData = {
    'Single Room': singleRoomData,
    'Double Room': doubleRoomData,
    'Triple Room': tripleRoomData,
    'Floor': floorData,
  };

  const handleRoomClick = (roomType) => {
    // Toggle room display: if the same room is clicked, hide it
    if (selectedRoomType === roomType) {
      setSelectedRoomType(null);
    } else {
      setSelectedRoomType(roomType);
    }
  };

  // Filter rooms based on the search query
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
          {/* Main Div for each room type */}
          {Object.keys(roomData).map((roomType) => (
            <div key={roomType} className="room" onClick={() => handleRoomClick(roomType)}>
              <h2>{roomType}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* Room Detail Section */}
      <section className="room-details">
        <div className="container-room">
          <div className="container-room detail">
            {selectedRoomType && (
              <div className="room-info">
                <h3>{selectedRoomType}</h3>
                {filteredRooms.map((room, index) => (
                  <div key={index} className="room-details-card">
                    <div className="room-div">
                      <div className="room-div detail">
                      <p><strong>LandLord Name:</strong> {room.Landloardname}</p>
                        <p><strong>Description:</strong> {room.description}</p>
                        <p><strong>Price:</strong> {room.price}</p>
                        <p><strong>Location:</strong> {room.location}</p>
                        <p><strong>Phone:</strong> {room.phone}</p>
                        <p><strong>Amenities:</strong></p>
                        <ul>
                          {room.amenities.map((amenity, i) => (
                            <li key={i}>{amenity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
      </section>
   </div>
  );
};

export default RoomSelection;
