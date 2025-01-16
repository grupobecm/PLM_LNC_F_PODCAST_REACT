const AboutFirst = () => {
   return (
     <div className="about-first">
       <div className="about-grid">
         <section className="about-left blue">
           <div className="carousel-holder">
             <figure>
               <img src="assets/img/about/image1.png" alt="testimonial 1" />
             </figure>
           </div>
         </section>
         <section className="about-right info">
           <em className="section-label">ABOUT</em>
           <h3>
             Unlock the Secrets to a Longer, <span> Better Life. </span>
           </h3>
           <div className="section-resume">
             <p>
               Elen Capri, a renowned entrepreneur featured in Forbes, Vogue,
               GQ, and Bazaar, brings her passion for health and longevity to
               life through The Master Key.
             </p>
           </div>

           <div className="section-categories">
             <div>
               <h5 className='blue-txt'> Humanitarian Efforts </h5>
               <p>
                 Elen has lived in Africa, working to find solutions for those
                 in extreme poverty. Her work includes a collaboration with
                 NASAQ to bring water machines to communities in need. Recently,
                 she partnered with the government and the UN on impactful
                 projects inspired by a Harvard study.
               </p>
             </div>
             <div>
               <h5 className='blue-txt'> Podcast Initiative </h5>
               <p>
                 Elen is about to launch a podcast aimed at making medical
                 knowledge accessible to all. The podcast will feature
                 celebrities and doctors from around the world, presenting
                 complex topics in an easy-to-understand manner.
               </p>
             </div>
             <div>
               <h5 className='blue-txt'> Health Journey and Expertise </h5>
               <p>
                 During her battle with illness, Elen delved into health
                 research, which ignited her passion for longevity technologies
                 and innovative health solutions.
               </p>
             </div>
             <div>
               <h5 className='blue-txt'> Mission and Vision </h5>
               <p>
                 Elen is dedicated to empowering people with the tools and
                 knowledge to improve their lives. Her mission is to unlock the
                 potential of health and longevity solutions for everyone.
               </p>
             </div>
           </div>
         </section>
       </div>
     </div>
   );
}
 
export default AboutFirst;