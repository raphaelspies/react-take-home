import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsloaded] = useState(false)

  const getData = function() {
    setIsloaded(false)
    Axios.get('https://www.plugco.in/public/take_home_sample_feed')
      .then((res) => setData(res))
      .then(setIsloaded(true))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="horizontal-app-header">
        Campaign_icon_url
        </div>
        Campaign_name
        pay_per_install
      </header>
      <div className="body">
        Media Object (medias = [...args])
      </div>
    </div>
  );
}

export default App;
