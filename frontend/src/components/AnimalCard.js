import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function AnimalCard({ animal }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="animal-card" onClick={() => setModalIsOpen(true)}>
      <img src={animal.imageUrl} alt={animal.name} onClick={() => setModalIsOpen(true)} />
      <h3>{animal.name}</h3>
      <p>{animal.origin}</p>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>{animal.name}</h2>
        <p>Origin: {animal.origin}</p>
        <img src={animal.imageUrl} alt={animal.name} />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default AnimalCard;
