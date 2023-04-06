import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Villagers from "./villagers";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const URL = "https://api.nookipedia.com/villagers";

  const VillagersData = async () => {
    try {
      setError(null);
      setData(null);
      const response = await axios.get(URL, {
        headers: {
          "X-API-KEY": process.env.REACT_APP_API_KEY,
          "Accept-Version": "1.1.0",
        },
      });
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    VillagersData();
  }, []);

  if (error) return <div>error</div>;
  if (!data) return <div>없다능</div>;

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <Villagers
            key={item.id}
            name={item.name}
            species={item.species}
            gender={item.gender}
            image_url={item.image_url}
          />
        );
      })}
    </div>
  );
}

export default App;
