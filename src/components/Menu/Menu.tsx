import { useState } from 'react';
import './Menu.css';
const Menu: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);  
  
  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  return (

    <>
      {!isOpenMenu && (
        <button 
          className="menu-btn"
          onClick={handleToggleMenu}
        >
          <img src="assets/img/menu/menu_btn.png" alt="menu btn" />
        </button>
      )}

      {isOpenMenu && (
        <div className='main-menu'>
          <button 
            className="menu-btn"
            onClick={handleToggleMenu}
          >
            <img src="assets/img/menu/close_btn.png" alt="menu btn" />
          </button>     

          <div className="main-menu__holder">
            <section className='main-menu__left'>
               <div className='main-menu__title'>
                THE MASTER 
                <span>
                  
                  KEY
                  <em> PODCAST </em>
                </span>
               </div> 
               <ul>
                 <li>
                  <a>  
                    Intro
                  </a>
                 </li>
                 <li>
                  <a>  
                    About
                  </a>
                 </li>
                 <li>
                  <a>  
                    Manifesto
                  </a>
                 </li>
                 <li>
                  <a>  
                    Befenits
                  </a> 
                 </li>
                 <li>
                  <a>  
                    Episodes
                  </a> 
                 </li>
               </ul>
            </section>

            <section className="main-menu__right">
              <h5> LAST EPISODES </h5>
              <div className='main-menu__videoHolder'>
                 <video>
                 </video> 
                 <footer className='main-menu__videoFooter'>
                    <div>
                        <span className='episodeNumber'>
                          Episode 2  
                        </span>
                    </div>
                 </footer>
              </div>
            </section>
          </div>

        </div>
      )}
      
    
    </>
   
       
   
    
  );
}
 
export default Menu;