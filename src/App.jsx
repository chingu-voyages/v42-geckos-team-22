import React from "react";
import Header from "./components/headerComponents/Header";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Game from "./pages/Game";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/404";
import { Route, Routes, useLocation } from "react-router-dom";
import { Animal } from "./features/flashcard/Animal";
import { Letter } from "./features/flashcard/Letter";
import { Number } from "./features/flashcard/Number";
import { Shape } from "./features/flashcard/Shape";
import NameModal from "./components/modalComponents/NameModal";
import PasswordModal from "./components/modalComponents/PasswordModal";
import SuccessModal from "./components/modalComponents/SuccessModal";
import EmailModal from "./components/modalComponents/EmailModal";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import auth from "./utils/firebase";

function App() {
  const location = useLocation();

  // Modals
  const [showModal, setShowModal] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const toggleModal = () => {
    setShowModal((prevModalState) => !prevModalState);
  };
  const handleBackClick = () => {
    setPage((prevPage) => prevPage - 1);
  };
  const handleForwardClick = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Registration
  const [registerName, setRegisterName] = React.useState("");
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");

  const saveName = (e) => {
    setRegisterName(e.target.value);
  };

  const saveEmail = (e) => {
    setRegisterEmail(e.target.value);
  };

  const savePassword = (e) => {
    setRegisterPassword(e.target.value);
  };

  const registerNewUser = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    // Update display name
    await updateProfile(auth.currentUser, {
      displayName: registerName,
      email: user.email,
      uid: user.uid,
      accessToken: user.accessToken,
    });
    await handleForwardClick();
    console.log(user);
  };

  // //Sign in existing users
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //   } else {
  //   }
  // });

  return (
    <>
      <Header toggleModal={toggleModal} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<Game />}>
          <Route path="animal" element={<Game />} />
          <Route path="letter" element={<Game />} />
          <Route path="number" element={<Game />} />
          <Route path="shape" element={<Game />} />
        </Route>
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/game" element={<Game />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

      {page === 0 && (
        <NameModal
          showModal={showModal}
          toggleModal={toggleModal}
          handleForwardClick={handleForwardClick}
          saveName={saveName}
          handleKeyDown={handleKeyDown}
        />
      )}
      {page === 1 && (
        <EmailModal
          showModal={showModal}
          toggleModal={toggleModal}
          handleBackClick={handleBackClick}
          handleForwardClick={handleForwardClick}
          saveEmail={saveEmail}
          handleKeyDown={handleKeyDown}
        />
      )}
      {page === 2 && (
        <PasswordModal
          showModal={showModal}
          toggleModal={toggleModal}
          handleBackClick={handleBackClick}
          handleForwardClick={handleForwardClick}
          registerNewUser={registerNewUser}
          savePassword={savePassword}
          handleKeyDown={handleKeyDown}
        />
      )}
      {page === 3 && (
        <SuccessModal showModal={showModal} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default App;
