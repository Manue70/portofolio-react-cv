
import React from 'react';

function Portofolio() {
  const projets = [
    {
      id: 1,
      image: '/assets/fresh-food.jpg',
      titre: <h3 className='text-center'>Fresh Food</h3>,
      description: <p className='text-center'>Site de vente de produits frais en ligne.</p>,
      lien: '#',
      techno: <p>Site réalisé avec PHP et MySQL</p>
    },
    {
      id: 2,
      image: '/assets/restaurant-japonais.jpg',
      titre: <h3 className='text-center'>Restaurant Akira</h3>,
      description: <p className='text-center'>Site de vente de produits frais en ligne.</p>,
      lien: '#',
      techno: <p>Site réalisé avec WordPress</p>
    },
    {
      id: 3,
      image: '/assets/espace-bien-etre.jpg',
      titre: <h3 className='text-center' >Espace bien-être</h3>,
      description: <p className='text-center'>Site de vente de produits frais en ligne.</p>,
      lien: '#',
      techno: <p>Site réalisé avec LARAVEL</p>
    },
    {
      id: 4,
      image: '/assets/seo.jpg',
      titre: <h3 className='text-center'  >SEO</h3>,
      description: <p className='text-center' style={{ whiteSpace: 'nowrap' }}>Amélioration du référencement d'un site e-commerce.</p>,
      lien: '#',
      techno: <p>Amélioration du référencement d'un site e-commerce</p>
    },
    {
      id: 5,
      image: '/assets/coder.jpg',
      titre: <h3 className='text-center'>Création d'une API</h3>,
      description: <p className='text-center'>Création d'une API RESTFULL publique.</p>,
      lien: '#',
      techno: <p>PHP - SYMFONY</p>
    },
    {
      id: 6,
      image: '/assets/screens.jpg',
      titre: <h3 className='text-center'>Maquette d'un site web</h3>,
      description: <p className='text-center'>Création du prototype d'un site.</p>,
      lien: '#',
      techno: <p>Réalisé avec FIGMA</p>
    },
  ];

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

      
      <div className="container mt-5">
        <h2 className="text-center">Portofolio</h2>
        <p className="text-center">Voici quelques-unes de mes réalisations</p>
      </div>

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
      <br />


      <div className="container mt-4">
        <div className="row">
          {projets.map((projet) => (
            <div key={projet.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={projet.image} className="card-img-top" alt={projet.titre} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{projet.titre}</h5>
                  <p className="card-text">{projet.description}</p>
                  <a
                    href={projet.lien}
                    className="btn btn-primary btn-small mt-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir le site
                  </a>


              
                </div>
                <div className="card-footer text-muted small text-center">
                  {projet.techno}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portofolio;

