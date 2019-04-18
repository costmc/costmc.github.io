import React from 'react';
import Track from './track';
import Loop from './loop';

export default class Tracks extends React.Component {
    constructor(props) {
        super(props)

        let tracks = []
        props.tracks.map(track => {
        	tracks.push(track)
        })

        let loops = []
        props.loops.map(loop => {
        	loops.push(loop)
        })

        this.state = {
            tracks: tracks,
            loops: loops
        }
        this.handleTrackPlayPause = this.handleTrackPlayPause.bind(this)
        this.handleLoopPlayPause = this.handleLoopPlayPause.bind(this)
    }

    handleTrackPlayPause(id) {
        let { tracks, loops } = this.state

        loops.map((loop) => {
        	loop.playing = false
        })

    	tracks.map((track, key) => {
            track.playing = key == id ? !track.playing : false
        })

    	this.setState({
            tracks: tracks,
            loops: loops
    	})
    }

    handleLoopPlayPause(id) {
        let { loops, tracks } = this.state

        tracks.map((track) => {
        	track.playing = false
        })

    	loops.map((loop, key) => {
            loop.playing = key == id ? !loop.playing : false
        })

    	this.setState({
            tracks: tracks,
            loops: loops
    	})
    }

    render() {
        const { tracks, loops } = this.state
        let TrackElements = []
        let LoopElements = []

        tracks.map((track, k) => {
            TrackElements.push(
                <Track
                    {...track}
                    handleToggleClick={ this.handleTrackPlayPause }
                    key = { k }
                    id = { k }
                />   
            )
        })

        loops.map((loop, k) => {
            LoopElements.push(
                <Loop
                    {...loop}
                    handleToggleClick={ this.handleLoopPlayPause }
                    key = { k }
                    id = { k }
                />   
            )
        })
        
        return (
        <React.Fragment>
            <div className="loops">
                { LoopElements }
            </div>
            <div className="tracks">
                { TrackElements }
            </div>
        </React.Fragment>
        )
    }
}