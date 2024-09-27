import React, { useState } from 'react';

// Import JSON files that contain room details
import SingleRoom from './Single.json';
import DoubleRoom from './Double.json';
import TripleRoom from './Triple.json';
import Floor from './Floor.json';

const RoomSelection = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Room details with JSON data mapped to each room
  const roomDetails = {
    'Single Room': SingleRoom,
    'Double Room': DoubleRoom,
    'Triple Room': TripleRoom,
    'Floor': Floor,
  };

  // Filter rooms based on the search query
  const filteredRooms = Object.keys(roomDetails).filter((room) =>
    room.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search bar section */}
      <section className="search-bar">
        <input
          type="text"
          placeholder="Search for a room..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>

      {/* Room Selection Section */}
      <section className="room-selection">
        <div className="container-room">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div className="room" key={room} onClick={() => setSelectedRoom(room)}>
                <h2>{room}</h2>
              </div>
            ))
          ) : (
            <p>No rooms found</p>
          )}
        </div>
      </section>

      {/* Room Detail Section */}
      <section className="room-details">
        <div className="container-room detail">
          {selectedRoom ? (
            <div className="room-info">
              <h3>{selectedRoom}</h3>

              {/* Store room data elements in a div */}
              <div className="room-data">
                <p><strong>Description:</strong> {roomDetails[selectedRoom].description}</p>
                <p><strong>Price:</strong> {roomDetails[selectedRoom].price}</p>
                <p><strong>Amenities:</strong></p>
                <ul>
                  {roomDetails[selectedRoom].amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p>Select a room to see details</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default RoomSelection;
