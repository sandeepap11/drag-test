import React, { Component } from 'react';
import '../../node_modules/video-react/dist/video-react.css'; 
import { Player, LoadingSpinner, ControlBar, ForwardControl } from 'video-react';
//import {RdxVideo, Overlay, Controls} from 'react-html5-video-editor'

class VideoPlayer extends Component {
    render() {
        return (
            <div>
                <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
    <ControlBar autoHide={false}>
        <ForwardControl seconds={5} order={3.1} />
        <ForwardControl seconds={10} order={3.2} />
        <ForwardControl seconds={30} order={3.3} />
      </ControlBar>
    <LoadingSpinner />
    </Player>


                
            </div>
        );
    }
}

export default VideoPlayer;