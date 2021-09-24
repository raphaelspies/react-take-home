import React from 'react';
import '../App.css';

export default function Media(props) {
const {
  cover_photo_url,
  download_url,
  media_type,
  tracking_link,
} = props.media

  return (
    <div className="media-image-div">
      <img src={cover_photo_url} height="200px"/>
    </div>
  )
}