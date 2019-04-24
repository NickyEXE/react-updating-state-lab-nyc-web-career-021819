// Code YouTubeDebugger Component Here

import React, {Component} from 'react';

export default class YouTubeDebugger extends Component{

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrate = (event) => {
    this.setState({settings: {...this.state.settings, bitrate: 12}})
  }

  handleResolution = (event) => {
    this.setState({settings: {...this.state.settings, video: {resolution: '720p'}}})
  }

  render(){
    console.log(this.state.settings)
    return <div><button id="bitrate" className="bitrate" onClick={this.handleBitrate}>Change Bitrate to 12</button>
            <button id="resolution" className="resolution" onClick={this.handleResolution}>Change Resolution to 720p</button></div>
  }

}
