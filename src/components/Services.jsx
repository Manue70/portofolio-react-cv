import React from 'react';

function Services() {
  return (
    <>
      <div className="banner"
        style={{ 
          backgroundImage: `url('/assets/banner.jpg')`,
          height: '20vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
      </div>

      <div className='container mt-5'>
        <h2 className='text-center mb-4'><strong>Mon offre de Services</strong></h2>
        <p className='text-center mb-4'>Voici les prestations sur lesquelles je peux intervenir</p>
        
          <hr
           style={{
            height: '4px',
            width: '450px',
            backgroundColor: 'blue',
            border: 'none',
            margin: '1rem auto',

          }}
          />
      </div>

      <div className='container mt-5'>  

        <div className='row'>
          <div className='col-md-4 mb-3 d-flex'>
            <div className='card shadow-sm service-card'>
              <div className='card-body'>
                <i class="bi bi-brush fs-2 text-primary d-block text-center "></i>
                <h5 className='card-title text-center'><strong>UX design</strong></h5>
                <p className='card-text'>l'UX design est une discipline qui consiste à concevoir des produits
                 (sites web, applications mobiles, logiciels, objets connectés, etc...)en plaçant l'utilisateur
                 au centre des préoccupations. l'objectif est de rendre l'expérience utilisateurs la plus fluide et 
                 la plus agréable possibles.
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3 d-flex'>
            <div className='card shadow-sm service-card'>
              <div className='card-body'>
                <i class="bi bi-code-slash fs-2 text-primary d-block text-center "></i>
                <h5 className='card-title text-center'><strong>Développement web</strong></h5>
                <p className='card-text'>Le développement de sites web consiste à créer des sites internet
                  en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des 
                  frameworks (Boostrap, react, Angular, etc..).</p>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3 d-flex'>
            <div className='card shadow-sm service-card'>
              <div className='card-body'>
                <i class="bi bi-search fs-2 text-primary d-block text-center" ></i>
                <h5 className='card-title text-center'><strong>Référencement</strong></h5>
                <p className='card-text'>Le référencement naturel (SEO) est une technique qui consiste à 
                  optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche 
                  (Google, Bing, Yahoo, etc..). L'objectif est d'attirer un maximum de visiteurs qualifiés 
                  sur le site.</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    
    </>  
  );
}

export default Services
