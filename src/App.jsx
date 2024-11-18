import React, { useState } from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(true)

  const toggleShowModal = () => {
    if (showModal) {
      setShowModal(false)
      return
    }
    setShowModal(true)
  }

  const continued = () => {
    alert('continued')
  }

  const closed = () => {
    alert('closed')
  }

  const arrayBtn = [
    { type: 'primary', label: 'Continue', clicked: continued },
    { type: 'danger', label: 'Close', clicked: closed }
  ]

  return (
    <div className="App">
      <Modal
        show={showModal}
        title='Внимание'
        clicked={toggleShowModal}
        arrayBtn={arrayBtn}
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro amet laboriosam, sint labore vero cumque ipsa expedita molestiae quia saepe temporibus eveniet sed velit possimus optio neque dolor natus eos.</p>
      </Modal>
    </div>
  );
}

export default App;
