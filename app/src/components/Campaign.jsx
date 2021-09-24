import React, { useEffect, useState } from 'react';
import '../App.css';

import Media from './Media.jsx'

export default function Campaign(props){
  const {
    campaign_icon_url,
    campaign_name,
    pay_per_install,
    medias,
  } = props.campaign

  return (
    <div className="campaign">
      <div className="horizontal-campaign-header">
        <img src={campaign_icon_url} height={"50px"} width={"50px"} className="campaign-icon"/>
        <div className="campaign-vertical-subheader">
          {campaign_name}
        </div>
        <div className="campaign-payPerInstall">
          {pay_per_install}
        </div>
      </div>
      <div className="campaign-image-carousel">
        {medias.map((media) => {
          return (<Media media={media} key={media.cover_photo_url}/>)
        })}
      </div>
    </div>
  )
}