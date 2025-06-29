import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* Colonne 1 */}

          <div className="col-md-4">
            <h5 className="text-uppercase mb-4 font-weight-bold">John Doe</h5>
              <p>40 rue Laure Diebold <br />69009 Lyon, France <br />
              10 20 30 40 50 <br />
              john.doe@gmail.com</p>

            <div className="d-flex gap-3 mt-3">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noreferrer noopener"
                className="text-white social-icon"
              >
              <i className="bi bi-github fs-4"></i>
            </a>

            <a
              href="https://twitter.com/github-john-doe"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white social-icon"
            >
              <i className="bi bi-twitter fs-4"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/github-john-doe"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white social-icon"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </div>
        </div>

          {/* Colonne 2 */}

          <div className="col-md-4">
            <h5 className="text-uppercase mb-4 font-weight-bold">Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/Home" className="text-white text-decoration-none">Accueil</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/portofolio" className="text-white text-decoration-none">Portofolio</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Me contacter</a></li>
              <li><a href="/mentions-legales" className="text-white text-decoration-none">Mentions Légales</a></li>
            </ul>
          </div>

          {/* Colonne 3 */}

          <div className="col-md-4">
            <h5 className="text-uppercase mb-4 font-weight-bold">Derniers projets</h5>
            <ul className="list-unstyled">
              <li><a href="/portofolio" className="text-white text-decoration-none">Fresh Food</a></li>
              <li><a href="/portofolio" className="text-white text-decoration-none">Restaurant Akira </a></li>
              <li><a href="/portofolio" className="text-white text-decoration-none">Espace bien-être</a></li>
              <li><a href="/portofolio" className="text-white text-decoration-none">SEO</a></li>
              <li><a href="/portofolio" className="text-white text-decoration-none">Création d'une API</a></li>
              <li><a href="/portofolio" className="text-white text-decoration-none">Maquette d'un site</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

