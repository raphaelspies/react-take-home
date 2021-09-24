import React, { useEffect, useState } from 'react';
import '../App.css';
import Axios from 'axios'

import Campaign from './Campaign.jsx'

function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  const getData = function() {
    setIsLoaded(false)
    Axios.get('https://www.plugco.in/public/take_home_sample_feed')
      .then((res) => {
        setData(res.data)
        setIsLoaded(true)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        PLUGS
      </header>
      <div className="App-body">
        {!isLoaded ? "Loading..." : data.campaigns.map((campaign) => {
          return (<Campaign campaign={campaign} key={campaign.campaign_name}/>)
        })}
        Media Object (medias = [...args])
      </div>
    </div>
  );
}

export default App;
