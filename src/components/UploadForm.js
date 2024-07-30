import React, { useState } from 'react';
import axios from 'axios';
import './UploadForm.css';

const statesCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Rajahmundry"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Pasighat"],
  "Assam": ["Guwahati", "Dibrugarh", "Jorhat", "Silchar", "Tezpur"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga"],
  "Chhattisgarh": ["Raipur", "Bilaspur"," Durg", "Bhilai", "Korba"],
  "Delhi": ["New Delhi", "Old Delhi"],
  "Goa": ["Panaji", "Margao"," Vasco da Gama", "Mapusa"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Rohtak", "Hisar"],
  "Himachal Pradesh": ["Shimla, Manali, Dharamshala, Solan, Mandi"],
  "Jharkhand":["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City", "Deoghar"],
  "Karnataka":["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Alappuzha"],
  "Kerela": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Alappuzha", "Kannur", "Palakkad"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"," Aurangabad", "Solapur"],
  "Manipur": ["Imphal", "Churachandpur"],
  "Meghalaya": ["Shillong", "Tura"],
  "Mizoram": ["Aizawl", "Lunglei"],
  "Nagaland": ["Kohima", "Dimapur"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur", "Balasore"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"," Ajmer", "Bikaner"],
  "Sikkim": ["Gangtok", "Namchi"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode"],
  "Telengana": ["Hyderabad"," Warangal", "Nizamabad"," Khammam", "Karimnagar"],
  "Tirpura": ["Agartala", "Udaipur"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Allahabad", "Aligarh"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Nainital"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla"],
};

const sports = ["Armwrestling", "Powerlifting", "Bodybuilding"];

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [timing, setTiming] = useState('');
  const [venue, setVenue] = useState('');
  const [prize, setPrize] = useState('');
  const [image, setImage] = useState(null);
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('state', selectedState);
    formData.append('city', selectedCity);
    formData.append('timing', timing);
    formData.append('venue', venue);
    formData.append('prize', prize);
    formData.append('image', image);
    formData.append('sport', selectedSport);
   

    try {
      const response = await axios.post('http://localhost:5000/api/tournaments', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity(''); // Reset city when state changes
  };

  return (
    <div id = 'cover'>
    <div id='main'>
    <form onSubmit={handleSubmit}>
      <h2>Upload Tournament</h2>
      <div class="childDiv">
    Gym Name/ Organizer Name: 
      <input
        type="text"
        placeholder="Tittle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <div class="childDiv" id='sportName'>
        Select Sport: 
      <select value={selectedSport} onChange={(e) => setSelectedSport(e.target.value)}>
        <option value="">Select Sport</option>
        {sports.map((sport, index) => (
          <option key={index} value={sport}>{sport}</option>
        ))}
      </select>
      </div>
    <div class="childDiv" id='city'>
    State and City:
    <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {Object.keys(statesCities).map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </select>
      {selectedState && (
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select City</option>
          {statesCities[selectedState].map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      )}
    </div>
    <div class="childDiv" id='time'>
    Start Time:
    <input
        type="text"
        placeholder="Timing"
        value={timing}
        onChange={(e) => setTiming(e.target.value)}
      />
    </div>
    <div class="childDiv" id='venue'>
        Venue: 
    <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
      />
    </div>
    <div class="childDiv" >
    Prize for Winners: 
    <input
        type="text"
        placeholder="Prize"
        value={prize}
        onChange={(e) => setPrize(e.target.value)}
      />
    </div>
    <div class="childDiv" id='poster'>
    Poster:
    <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
    </div>
    <div class='childDiv' id="uploadBTN">
    <button type="submit">Upload</button>
    </div>
    </form>
    </div>
    </div>
  );
};
export default UploadForm;
