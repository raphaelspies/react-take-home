import React from 'react';
import '../App.css';
import downloadIcon from '../download-icon.svg'
import linkIcon from '../link-icon.svg'

export default function Media(props) {
const {
  cover_photo_url,
  download_url,
  media_type,
  tracking_link,
} = props.media

  function downloadMedia (e) {

  }

  return (
    <div className="media-body">
      <div className="media-image-div">
        <img src={cover_photo_url} className="media-image"/>
      </div>
        <img src={downloadIcon} onClick={downloadMedia}  className="icon"/>
        <img src={linkIcon} className="icon"/>
    </div>
  )
}