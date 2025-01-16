import './MainBanner.css';
import VideoMp4 from '../../assets/video/video_banner.mp4';

const MainBanner = () => {
    return (  
        <section className="mainsection video">  
        <div className="layer">
          <h4> INTRODUCING THE <span> PODCAST </span> </h4>
          <h1 className='layer-title'>
             THE MASTER   
             <span> KEY </span>
          </h1>
          <div className='subtitle'>
             Unlock the Secrets to a Longer, 
             <span> Better Life. </span>
          </div>
          <p>
             Exploring the science, stories, and strategies behind living healthier and longer
          </p>
          <button className='layer__button'>
            DISCOVER PODCAST
          </button>
        </div>
        <div className="mainsection__video">
          <video>
            <source src={VideoMp4} type="video/mp4"  />
          </video>
        </div>
        <footer className='video__footer'></footer>
      </section>   
    );
}
 
export default MainBanner;