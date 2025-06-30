
import React, { useState } from 'react';
import ModalGitHub from './ModalGitHub';

function Home() {
   const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (

     <>
     {/* photo + présentation et modale */}

       <div className="hero"
         style={{ 
          backgroundImage: `url('/assets/hero-bg.jpg')`,
          height: '80vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          
       }}>

        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>

        <button className="btn btn-danger mt-3" onClick={() => setShowModal(true)}>
          En savoir plus
        </button>

      </div>
      <ModalGitHub show={showModal} handleClose={() => setShowModal(false)} />

      <section className="p-5 ">
        <div className="container bg-white text-black rounded shadow">
          <div className="row align-items-start">

            {/* Colonne gauche : texte + photo */}

            <div className="col-md-6 text-center">
              <h2>À propos </h2>

              <hr
              style={{
                height: '4px',
                width: '100%',
                maxWidth: '400px',
                backgroundColor: 'blue',
                border: 'none',
                margin: '1rem auto',
              }}
            />
            
              <img
                src="/assets/john-doe-about.jpg"
                alt="John Doe"
                className="img-fluid rounded mt-3"
                
              />
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore, <br/> 
                  sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore, <br/> 
                  sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>

            {/* Colonne droite : compétences */}

            <div className="col-12 col-md-6">
              <h2>Mes Compétences</h2>
            

              <hr
              style={{
                height: '4px',
                width: '100%',
                maxWidth: '400px',
                backgroundColor: 'blue',
                border: 'none',
                margin: '1rem auto',
              }}/>
            
              {/* barre de progression + couleur et pourcentage */}


              <div className='mb-3'>
                <strong className="d-block mb-1">HTML 90%</strong>
                <div className='progress'>
                  <div className='progress-bar bg-danger' style={{ width: '90%' }}>90%</div>
                </div>
              </div>

              <div className='mb-3'>
                <strong className="d-block mb-1">CSS 80%</strong>
                <div className='progress'>
                  <div className='progress-bar bg-info' style={{ width: '80%' }}>80%</div>
                </div>
              </div>

              <div className='mb-3'>
                <strong className="d-block mb-1">JavaScript 70%</strong>
                <div className='progress'>
                  <div className='progress-bar bg-warning' style={{ width: '70%' }}>70%</div>
                </div>
              </div>

              <div className='mb-3'>
                <strong className="d-block mb-1">PHP 60%</strong>
                <div className='progress'>
                  <div className='progress-bar bg-success' style={{ width: '60%' }}>60%</div>
                </div>
              </div>

              <div className='mb-3'>
                <strong className="d-block mb-1">React 50%</strong>
                <div className='progress'>
                  <div className='progress-bar bg-primary' style={{ width: '50%' }}>50%</div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
