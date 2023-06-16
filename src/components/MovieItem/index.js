import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachItem} = props
  const {thumbnailUrl, videoUrl} = eachItem

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="image" />}
        className="popup-content"
      >
        {close => (
          <>
            <div className="video-container">
              <button
                type="button"
                className="trigger-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size={20} />
              </button>
              <div className="video">
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
