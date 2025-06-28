import React from 'react';

function Services() {
  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Mes Services</h2>
      <div className='row'>
        <div className='col-md-4 mb-3'>
          <div className='card shadow-sm service-card'>
            <div className='card-body'>
              <h5 className='card-title'>Création de site web</h5>
              <p className='card-text'>Sites vitrines modernes avec HTML, CSS, React.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
