
import React from 'react';

function Contact() {
  return (
    <section className="py-5">
      <div className="container bg-white text-black rounded shadow p-5">
        <div className="row align-items-start">
          <div className="col-12 text-center mb-4">
            <h2 className="mb-2">Contact</h2>
            <p>
              Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
            </p>
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
            
          </div>

          {/* Colonne gauche : formulaire */}

          <div className="col-md-6 mb-4">
            <h3 className="mb-4 text-start"><strong>Formulaire de contact</strong></h3>
            <hr
              style={{
                height: '4px',
                width: '600px',
                backgroundColor: 'blue',
                border: 'none',
                margin: '1rem auto',
              }}
            />
            <br />

            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Votre nom" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Votre adresse email" />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Sujet" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Votre message..."></textarea>
              </div>

              
              <button type="submit" className="btn btn-primary d-block mx-auto">
                Envoyer
              </button>
            </form>
          </div>

          {/* Colonne droite : infos + carte */}

          <div className="col-md-6">
            <h3 className="mb-4 text-start"><strong>Mes coordonnées</strong></h3>
            <hr
              style={{
                height: '4px',
                width: '600px',
                backgroundColor: 'blue',
                border: 'none',
                margin: '1rem auto',
              }}
            />
            <br />

            <div className="contact-info text-start mb-4">

              <h4 className="mb-1">John Doe</h4>
              <p className="mb-1"><i className="bi bi-map fs-6"></i> 40 Rue Laure Diebold, </p>
                
              <p className="mb-1"> <i className="bi bi-geo-alt fs-6"></i>{' '}
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=69009+Lyon+France" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ color: 'black', textDecoration: 'none' }}>
                      69009 Lyon, France
                  </a>
              </p>

              <p className="mb-1">
                <i className="bi bi-envelope-at fs-6"></i> Email :{' '}
                <a href="mailto:john.doe@gmail.com"
                style={{ color: 'black', textDecoration: 'none' }}>
                  john.doe@gmail.com
                </a>
              </p>

              <p className="mb-1"><i className="bi bi-phone fs-6"></i> Tél : 10 20 30 40 50</p>
            </div>

            
            <div className="map-container" style={{ width: '100%', height: '300px' }}>
              <iframe
                title="map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.3498330381856!2d4.79956601558567!3d45.77521697910545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebaa3e09dc5f%3A0x3824505e4c8dd80f!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1719484380273!5m2!1sfr!2sfr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
