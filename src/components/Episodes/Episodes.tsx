

import ericVerdinVideo from '../../assets/video/episodes/eric_verdin.mov';
import './Episodes.css';
import EpisodesPlatforms from './EpisodesPlatforms';
import EpisodesSlider from './EpisodesSlider';




const Episodes = () => {
    return (  
      <section className="mainsection episodes">
        <em className="section-label"> 
          EPISODES
        </em>

        <h3 className="section-title">
          Every-word 
          <span> that can change the world. </span>
        </h3>

        <div className="episodes-description">
           A podcast exploring ideas, stories, and conversations that redefine perspectives and inspire change.
        </div>

        <div className="episodes-video">
            <div className="episodes-layer">
               <div className="episodes-info">
                 <em> Episode 1 </em> 
                 <h4>
                   Eric Verdin 
                   <span> (Buck Institute) </span>
                 </h4>
                 <button className='episode-btn'>
                    LISTEN NOW
                 </button>
               </div>
               <div className="episodes-headline">
                  THE MASTER 
                  <span> 
                    <img src="assets/img/episodes/key.png" /> 
                    KEY 
                  </span>
               </div>
            </div>
            <video>
                <source src={ericVerdinVideo}  />
            </video>
        </div>

        <EpisodesSlider />

        <EpisodesPlatforms />

      </section>
    );
}
 
export default Episodes;