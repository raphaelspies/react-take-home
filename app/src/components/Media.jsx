import React from 'react';
import '../App.css';
import downloadIcon from '../download-icon.svg'
import linkIcon from '../link-icon.svg'
import playIcon from '../play-icon.svg'

export default function Media(props) {
const {
  cover_photo_url,
  download_url,
  media_type,
  tracking_link,
} = props.media

  function downloadMedia (e) {

  }

  function clickShareIcon (e) {
    navigator.clipboard.writeText(tracking_link);
  }

  return (
    <div className="media-body">
      <div className="media-image-div">
        <img src={cover_photo_url} className="media-image"/>
        {media_type=== "video" ? <div className="play-button-overlay">{playIcon}</div> : <div/> }
      </div>
        <a href={download_url} className="download-button">
          <img src={downloadIcon} className="icon"/>
        </a>
        <a className="share-button" onClick={clickShareIcon}>
          <img src={linkIcon} className="icon" />
        </a>
    </div>
  )
}

