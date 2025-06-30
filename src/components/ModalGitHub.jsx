
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalGitHub({ show, handleClose }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erreur API GitHub :", err));
  }, []);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        {data ? (
          <>
            <img
              src={data.avatar_url}
              alt="avatar"
              className="img-fluid rounded-circle mb-3"
              style={{ width: '100px' }}
            />
            <h5>{data.name}</h5>
            <p>{data.bio}</p>
            <p><strong>Public repos :</strong> {data.public_repos}</p>
            <p>
              <a
                href={data.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                Voir le profil GitHub
              </a>
            </p>
          </>
        ) : (
          <p>Chargement en cours...</p>
        )}
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalGitHub;

