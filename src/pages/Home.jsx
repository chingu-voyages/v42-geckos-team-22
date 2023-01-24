import React from "react";
import SuccessModal from "../components/SuccessModal";
import NameModal from "../components/NameModal";
import EmailModal from "../components/EmailModal";
import PasswordModal from "../components/PasswordModal";

function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const [page, setPage] = React.useState(0);

  function toggleModal() {
    setShowModal((prevModalState) => !prevModalState);
  }

  function handleBackClick() {
    setPage((prevPage) => prevPage - 1);
  }

  function handleForwardClick() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <>
      {page === 0 && (
        <NameModal
          showModal={showModal}
          toggleModal={toggleModal}
          handleForwardClick={handleForwardClick}
        />
      )}
      {page === 1 && (
        <EmailModal
          showModal={showModal}
          toggleModal={toggleModal}
          handleBackClick={handleBackClick}
          handleForwardClick={handleForwardClick}
        />
      )}
      {page === 2 && (
        <PasswordModal
          showModal={showModal}
          toggleModal={toggleModal}
          handleBackClick={handleBackClick}
          handleForwardClick={handleForwardClick}
        />
      )}
      {page === 3 && (
        <SuccessModal showModal={showModal} toggleModal={toggleModal} />
      )}
      <button onClick={toggleModal}>Open modal</button>
    </>
  );
}

export default Home;
