import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [trains, setTrains] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const mockTrains = [
      { id: 1, name: 'Express 101', from: 'New York', to: 'Boston', departure: '08:00', arrival: '12:30', status: 'On Time' },
      { id: 2, name: 'Local 202', from: 'Boston', to: 'Providence', departure: '09:15', arrival: '10:45', status: 'Delayed' },
      { id: 3, name: 'Bullet 303', from: 'Washington DC', to: 'Philadelphia', departure: '10:30', arrival: '12:00', status: 'On Time' },
      { id: 4, name: 'Regional 404', from: 'Philadelphia', to: 'New York', departure: '11:45', arrival: '13:30', status: 'On Time' },
      { id: 5, name: 'Express 505', from: 'Chicago', to: 'Detroit', departure: '13:00', arrival: '16:15', status: 'Cancelled' },
    ];
    
    setTrains(mockTrains);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTrains = trains.filter(train => 
    train.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find My Train</h1>
        <p>Track your train status and schedule</p>
      </header>
      
      <main className="App-main">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by train name or station..." 
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="trains-container">
          <h2>Train Schedule</h2>
          {loading ? (
            <p>Loading trains...</p>
          ) : (
            <table className="trains-table">
              <thead>
                <tr>
                  <th>Train</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Departure</th>
                  <th>Arrival</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrains.map(train => (
                  <tr key={train.id} className={`status-${train.status.toLowerCase().replace(' ', '-')}`}>
                    <td>{train.name}</td>
                    <td>{train.from}</td>
                    <td>{train.to}</td>
                    <td>{train.departure}</td>
                    <td>{train.arrival}</td>
                    <td>{train.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
      
      <footer className="App-footer">
        <p>&copy; 2025 Find My Train. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
