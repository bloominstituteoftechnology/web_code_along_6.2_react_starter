import React, { useState } from "react";

import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [openWeather, setOpenWeather] = useState("Fake data for now!");
  const [userData, setUserData] = useState({ name: "Casey Harding", age: 74, bestInstructor: true });

  return (
    <div>
      <WeatherDisplay openWeather={openWeather} userData={userData} />
    </div>
  )
}

export default App;
