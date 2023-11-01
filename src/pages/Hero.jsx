import React, {useState, useEffect} from 'react';
import busIcon from "../assets/bus-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import iconCar from '../assets/iconCar.svg';
import taxi from '../assets/taxi.png';
import Advantage from './Advantage';
import Booking from './Booking';
import Facts from './Facts';
import Benefits from './Benefits';
import SeamlessExp from './SeamlessExp';
import Footer from './Footer';
import { FAQ } from '.';

const Hero = () => {

  const [activeTab, setActiveTab] = useState("Outstation"); 
  const [sourceLocation, setSourceLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [isSourceFocused, setIsSourceFocused] = useState(false);
  const [isDestinationFocused, setIsDestinationFocused] = useState(false);
  const [sourceCoordinate, setSourceCoordinate] = useState({
    lat: 0,
    lon: 0
  });

  const [destinationCoordinate, setDestinationCoordinate] = useState({
    lat: 0,
    lon: 0
  });

 
 

  
  useEffect(() => {
    if (sourceLocation && isSourceFocused) {
      getAutoCompletePlace(sourceLocation).then((places) =>
        setSourceSuggestions(places)
      );
    }
  }, [sourceLocation, isSourceFocused]);
 

 

  useEffect(() => {
    if (destinationLocation && isDestinationFocused) {
      getAutoCompletePlace(destinationLocation).then((places) =>
        setDestinationSuggestions(places)
      );
    }
  }, [destinationLocation, isDestinationFocused]);




  const getAutoCompletePlace = async (text) => {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&format=json&apiKey=c63ed050e81b4a768ca14398a1ea24ee`
    );
    const data = await response.json();
    return data.results;
  };

  const handleSourceLocation = (e) => {
    setSourceLocation(e.target.value);
  };

  const handleDestinationLocation = (e) => {
    setDestinationLocation(e.target.value);
  };
  
  return (
    <><div className="booking">
      <div className="row">
        <div className="col-2">
          <h6>BOOK NOW</h6>
          <h1>IntrCitiCabs</h1>
          <div className="navigate flex flex-row gap-1 ml-2">
            <button
              className={`tablinks ${activeTab === "Outstation" ? "active" : ""}`}
              onClick={() => setActiveTab("Outstation")}
            >
              Outstation
            </button>
            <button
              className={`tablinks ${activeTab === "One Way Trip" ? "active" : ""}`}
              onClick={() => setActiveTab("One Way Trip")}
            >
              One Way Trip
            </button>
            <button
              className={`tablinks ${activeTab === "Round Trip" ? "active" : ""}`}
              onClick={() => setActiveTab("Round Trip")}
            >
              Round Trip
            </button>
            <button
              className={`tablinks ${activeTab === "Local/Airport" ? "active" : ""}`}
              onClick={() => setActiveTab("Local/Airport")}
            >
            Local/Airport
            </button>
          </div>
          <div className="form flex flex-col mx-2 bg-white rounded-bl-3xl rounded-br-3xl">
            {activeTab === "Outstation" && (
              <>
                <input
                  className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4 mt-10 justify-end"
                  type="text"
                  placeholder="Enter pickup city (Outstation)" 
                  onChange={handleSourceLocation}
                  value={sourceLocation}
                  onFocus={() => setIsSourceFocused(true)}
                  onBlur={() => setIsSourceFocused(false)} required />
                  {sourceSuggestions.map((suggestion) => (
              <div
                key={suggestion.place_id}
                className="suggestion"
                onClick={() => {
                  setSourceLocation(suggestion.formatted);
                  setSourceCoordinate({
                    lat: suggestion.lat,
                    lon: suggestion.lon
                  });
                  setSourceSuggestions([]);
                }}
              >
                {suggestion.formatted}
              </div>
            ))}
                  
                
                
                   <input
              className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4"
              type="text"
              placeholder="Enter destination city/location" 
              onChange={handleDestinationLocation}
              value={destinationLocation}
              onFocus={() => setIsDestinationFocused(true)}
              onBlur={() => setIsDestinationFocused(false)} required />
               {destinationSuggestions.map((suggestion) => (
              <div
                key={suggestion.place_id}
                className="suggestion"
                onClick={() => {
                  setDestinationLocation(suggestion.formatted);
                  setDestinationCoordinate({
                    lat: suggestion.lat,
                    lon: suggestion.lon
                  });
                  setDestinationSuggestions([]);
                }}
              >
                {suggestion.formatted}
              </div>
            ))}
             
            <input
              className="block px-[15px] py-[15px] mb-[7px] bg-[#dedede] text-base rounded-md mx-4"
              type="tel"
              placeholder="Enter mobile no." required/>
            <a href="/cars" >
              <div className='hero-btn4 hover:bg-[#fec901] hover:text-black mb-5 mx-9'>Search Cabs</div>
            </a>
              </>
            )}
            {activeTab === "One Way Trip" && (
              <> <input
              className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4 mt-10 justify-end"
              type="text"
              placeholder="Enter pickup city (Outstation)" 
              onChange={handleSourceLocation}
              value={sourceLocation}
              onFocus={() => setIsSourceFocused(true)}
              onBlur={() => setIsSourceFocused(false)} required />
              {sourceSuggestions.map((suggestion) => (
          <div
            key={suggestion.place_id}
            className="suggestion"
            onClick={() => {
              setSourceLocation(suggestion.formatted);
              setSourceCoordinate({
                lat: suggestion.lat,
                lon: suggestion.lon
              });
              setSourceSuggestions([]);
            }}
          >
            {suggestion.formatted}
          </div>
        ))}
               
               <input
              className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4"
              type="text"
              placeholder="Enter destination city/location" 
              onChange={handleDestinationLocation}
              value={destinationLocation}
              onFocus={() => setIsDestinationFocused(true)}
              onBlur={() => setIsDestinationFocused(false)} required />
               {destinationSuggestions.map((suggestion) => (
              <div
                key={suggestion.place_id}
                className="suggestion"
                onClick={() => {
                  setDestinationLocation(suggestion.formatted);
                  setDestinationCoordinate({
                    lat: suggestion.lat,
                    lon: suggestion.lon
                  });
                  setDestinationSuggestions([]);
                }}
              >
                {suggestion.formatted}
              </div>
            ))}

            <input
              className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4"
              type="tel"
              placeholder="Enter mobile no." required />
            <a href="/cars" >
              <div className='hero-btn4 hover:bg-[#fec901] hover:text-black mb-5 mx-9'>Search Cabs</div>
            </a>
                  
              </>
            )}
            {activeTab === "Round Trip" && (
              <>
                <input
                  className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4 mt-10 justify-end"
                  type="text"
                  placeholder="Enter pickup city (Outstation)" 
                  onChange={handleSourceLocation}
                  value={sourceLocation}
                  onFocus={() => setIsSourceFocused(true)}
                  onBlur={() => setIsSourceFocused(false)} required />
                  {sourceSuggestions.map((suggestion) => (
              <div
                key={suggestion.place_id}
                className="suggestion"
                onClick={() => {
                  setSourceLocation(suggestion.formatted);
                  setSourceCoordinate({
                    lat: suggestion.lat,
                    lon: suggestion.lon
                  });
                  setSourceSuggestions([]);
                }}
              >
                {suggestion.formatted}
              </div>
            ))}
                     <input
              className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4"
              type="text"
              placeholder="Enter destination city/location" 
              onChange={handleDestinationLocation}
              value={destinationLocation}
              onFocus={() => setIsDestinationFocused(true)}
              onBlur={() => setIsDestinationFocused(false)} required />
               {destinationSuggestions.map((suggestion) => (
              <div
                key={suggestion.place_id}
                className="suggestion"
                onClick={() => {
                  setDestinationLocation(suggestion.formatted);
                  setDestinationCoordinate({
                    lat: suggestion.lat,
                    lon: suggestion.lon
                  });
                  setDestinationSuggestions([]);
                }}
              >
                {suggestion.formatted}
              </div>
            ))}
               <input
              className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4"
              type="text"
              placeholder="Add more cities" required />

            <input
              className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4"
              type="tel"
              placeholder="Enter mobile no." />
            <a href="/cars">
              <div className='hero-btn4 hover:bg-[#fec901] hover:text-black mb-5 mx-9'>Search Cabs</div>
            </a>
              </>
            )}
            {activeTab === "Local/Airport" && (
              <>
               <input
                  className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4 mt-10 justify-end"
                  type="text"
                  placeholder="Enter pickup city (Outstation)" 
                  onChange={handleSourceLocation}
                  value={sourceLocation}
                  onFocus={() => setIsSourceFocused(true)}
                  onBlur={() => setIsSourceFocused(false)} required />
                  {sourceSuggestions.map((suggestion) => (
              <div
                key={suggestion.place_id}
                className="suggestion"
                onClick={() => {
                  setSourceLocation(suggestion.formatted);
                  setSourceCoordinate({
                    lat: suggestion.lat,
                    lon: suggestion.lon
                  });
                  setSourceSuggestions([]);
                }}
              >
                {suggestion.formatted}
              </div>
            ))}
                    <input
              className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4"
              type="text"
              placeholder="Enter destination city/location" 
              onChange={handleDestinationLocation}
              value={destinationLocation}
              onFocus={() => setIsDestinationFocused(true)}
              onBlur={() => setIsDestinationFocused(false)} required />
               {destinationSuggestions.map((suggestion) => (
              <div
                key={suggestion.place_id}
                className="suggestion"
                onClick={() => {
                  setDestinationLocation(suggestion.formatted);
                  setDestinationCoordinate({
                    lat: suggestion.lat,
                    lon: suggestion.lon
                  });
                  setDestinationSuggestions([]);
                }}
              >
                {suggestion.formatted}
              </div>
            ))}

            <input
              className="block px-[15px] py-[15px] mb-[7px] bg-[#dedede] text-base rounded-md mx-4"
              type="tel"
              placeholder="Enter mobile no." required />
              <div className='form'>
            <a href="/cars" >
              <div className='hero-btn4 hover:bg-[#fec901] hover:text-black mb-5 mx-9'>Search Cabs</div>
            </a>
            </div>
              </>
            )}
          </div>
          
        </div>
        <div className='col-2'>
          <img src={iconCar} alt='car_icon' /> 
        </div>
      </div>
    </div>
    <Advantage />
    <Booking />
    <Facts />
    <Benefits />
    <FAQ />
    <SeamlessExp />
    <Footer />
    </>

     
      
     

    
   
  )

}

export default Hero

