import React from "react";
import SuccessModal from "../components/SuccessModal";
import NameModal from "../components/NameModal";

function Home() {
  const [showModal, setShowModal] = React.useState(false);

  function toggleModal() {
    setShowModal((prevModalState) => !prevModalState);
  }

  return (
    <>
      {/* <SuccessModal showModal={showModal} toggleModal={toggleModal} /> */}
      <NameModal showModal={showModal} toggleModal={toggleModal} />
      <button onClick={toggleModal}>Open modal</button>
    </>
  );
}

export default Home;
