
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function MentionsLegales() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions Légales</title>
      </Helmet>

      <div className="container my-5">
        <h1 className="mb-4 text-center">Mentions Légales</h1>

        <hr
              style={{
                height: '4px',
                width: '500px',
                backgroundColor: 'blue',
                border: 'none',
                margin: '1rem auto',
              }}
            />
            <br />

        <Accordion defaultActiveKey="0">
          {/* Éditeur */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              
              <h4 className="mb-1">John Doe</h4>
              <p className="mb-1"><i className="bi bi-map fs-6"></i>  40 Rue Laure Diebold, <br /><i className="bi bi-geo-alt fs-6"></i> 69009 Lyon, France</p>
              <p className="mb-1"><i className="bi bi-envelope-at fs-6"></i>  Email : john.doe@gmail.com</p>
              <p className="mb-1"><i className="bi bi-phone fs-6"></i>  Tél : 10 20 30 40 50</p>
            
            </Accordion.Body>
          </Accordion.Item>

          {/* Hébergeur */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur du site</Accordion.Header>
            <Accordion.Body>
              <h3>alwaysdata</h3> 
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris.  </p>
                <span style={{ fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}> 
                  <i class="bi bi-globe"></i>
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a>.
                </span>
            </Accordion.Body>
          </Accordion.Item>

          {/* Crédits */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h3>Crédits</h3>.
              <p>
                Ce site a été réalisé par John DOE, étudiant au {''}
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'blue', textDecoration: 'underline' }}
                >   
                  Centre Européen de Formation
                </a>
              </p>

              <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site  {''}
                <a
                  href="https://pixabay.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'blue', textDecoration: 'underline' }}
                >
                      Pixabay.
                </a>
                
              </p>

              <p>Le favicon de ce site a été fourni par   {''}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'blue', textDecoration: 'underline' }}
                >     
                  John doe Icons erstellt von Freepik-Flaticon.
                </a> 
              </p>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default MentionsLegales;


      









