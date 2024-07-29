import { useEffect, useState } from "react";
import Map from "./components/Map"
import { MarkerStore } from "./store/Store"

type CurrentLocation = {
  latitude: number;
  longitude: number;
};

type Filters = {
  type :number;
  id: number;
}


function App() {
  const markerList = MarkerStore(state => state.markers);

  const DefaultLocation: CurrentLocation = {
    latitude: 37.5665,
    longitude: 126.978,
  };

  const [currentLocation, setCurrentLocation] = useState<CurrentLocation>(DefaultLocation);
  const [zero, setZero] = useState<Filters>();
  const [one, setOne] = useState<Filters>();
  const [two, setTwo] = useState<Filters>();

    useEffect(() => {
      const handleMessage = (event: any) => {
        const message = JSON.parse(event.data);
        if (message.type === "location") {
          setCurrentLocation({
            latitude: message.payload.latitude,
            longitude: message.payload.longitude,
          });
          return currentLocation;
        }
        if (message.type === 0) {
          setZero({
            type: message.payload.type,
            id: message.payload.id,
          });
          return zero;
        }
        if (message.type === 1) {
          setOne({
            type: message.payload.type,
            id: message.payload.id,
          });
          return one;
        }
        if (message.type === 2) {
          setTwo({
            type: message.payload.type,
            id: message.payload.id,
          });
          return two;
        }
      };
      

      if (navigator.userAgent.match(/Android/i)) {
        document.addEventListener("message", handleMessage,true);
      } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        window.removeEventListener("message", handleMessage);
      }
      
  
    }, [markerList]);

  return (
   <div>
    <Map latitude={currentLocation.latitude} longitude={currentLocation.longitude} />
   </div>
  )
}

export default App
