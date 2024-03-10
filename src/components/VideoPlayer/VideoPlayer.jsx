import './VideoPlayer.css'
import { useRef } from 'react'
import video_player from '../../assets/videoplay.mp4'



const VideoPlayer = ({playState, SetPlayState}) => {

    const player = useRef(null);

  const closePlayer = (e) => {
    if(e.target == player.current){
      SetPlayState(false);
    }
  }

  return (
    <div  className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
       <video src={video_player} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer