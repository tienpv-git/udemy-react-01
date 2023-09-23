import videoHomepage from '../../assets/video/video-homepage.mp4'

const HomeComponent = () => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source src={videoHomepage} type='video/mp4'></source>
            </video>
        </div>
    )
}

export default HomeComponent