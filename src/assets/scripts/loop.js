import React from 'react'
import SVG from 'react-inlinesvg'
const PauseIcon = require('../images/icons/pause-icon.svg')
const PlayIcon = require('../images/icons/play-icon.svg')

export default class Loop extends React.Component {
    constructor(props) {
    	super(props)
        this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this)
        this.handlePlayPause = this.handlePlayPause.bind(this)
    }

    componentDidMount() {
        const { audio } = this
        
        audio.onplay = () => {
        }

        audio.onpause = () => {

        }

        audio.onended = function () {
            this.handlePlayPause()
        }.bind(this)
    }

    componentDidUpdate() {
        const { playing } = this.props
        const audio = this.audio
        
    	if (playing && audio.paused) {
    		audio.play()
    	} if (!playing && !audio.paused) {
            audio.pause()
            audio.currentTime = 0
    	}
    }

    handlePlayPause() {
        const { id, handleToggleClick } = this.props
        handleToggleClick(id)
    }
    
    handlePlayPauseClick(e) {
        e.preventDefault();
        const { id, handleToggleClick } = this.props
        handleToggleClick(id)
    }

    render() {
        const { source, name, playing, pic } =  this.props
        const className = "img-fluid loop__image " + this.props.className
        const loopClass = playing ? "loop__control loop__control_active" : "loop__control"
        const src = playing ? PauseIcon : PlayIcon

        return(
            <a className="loop" onClick={ this.handlePlayPauseClick }>
                <img src={ pic } alt={ name } className={ className }/>
                <h4> { name } </h4>
                <div className={ loopClass }>
                    <SVG src={ src } /> Play
                </div>
                <audio ref={node => (this.audio = node)} src={source} />
            </a>
        )
    }
}