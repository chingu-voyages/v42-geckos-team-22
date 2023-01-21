import React from "react";
import Modal from "../components/Modal";

function Home() {
  const [showModal, setShowModal] = React.useState(false);

  function toggleModal() {
    setShowModal((prevModalState) => !prevModalState);
  }

  return (
    <>
      <Modal showModal={showModal} toggleModal={toggleModal} />
      <button onClick={toggleModal}>Open modal</button>
    </>
  );
}

export default Home;
