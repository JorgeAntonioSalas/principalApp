import Video from '../media/background.mp4'
import '../App.css'

const Background = () => {
    return (
        <video className="background_vid" loop muted autoPlay>
            <source src={Video} type="video/mp4" />
        </video>
        
    )
}
export default Background;