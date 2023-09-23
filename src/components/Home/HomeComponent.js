import videoHomepage from '../../assets/video/video-homepage.mp4'

const HomeComponent = () => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source src={videoHomepage} type='video/mp4'></source>
            </video>
            <div className='homepage-content'>
                <div className='homepage-title'>
                    There's a better way to ask
                </div>
                <div className='homepage-desc'>
                    <strong>You don't want to make a boring form. </strong>
                    And your audience won't answer one.
                    Create a typeform instead-and make everyone happy.

                </div>
                <div className='homepage-btn'>
                    <button>Get's started. It's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent