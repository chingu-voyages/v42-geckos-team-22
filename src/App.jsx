import React from "react";
import Header from "./components/headerComponents/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Game from "./pages/Game";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/404";
import { Route, Routes, useLocation } from "react-router-dom";
import { Color } from "./features/flashcard/Color";
import { Letter } from "./features/flashcard/Letter";
import { Number } from "./features/flashcard/Number";
import { Shape } from "./features/flashcard/Shape";
import NameModal from "./components/modalComponents/NameModal";
import PasswordModal from "./components/modalComponents/PasswordModal";
import SuccessModal from "./components/modalComponents/SuccessModal";
import EmailModal from "./components/modalComponents/EmailModal";
import SignInModal from "./components/modalComponents/SignInModal";
import auth from "./utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

function App() {
  const location = useLocation();

  // Modals
  const [showModal, setShowModal] = React.useState(false);
  const [showSignInModal, setShowSignInModal] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const toggleSignInModal = () => {
    setShowSignInModal((prevModalState) => !prevModalState);
  };
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
  const [currentUser, setCurrentUser] = React.useState({});

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
    try {
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
    } catch (error) {
      console.log(error.message);
    }
  };

  // Firebase: subscribe to the users current authentication state
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [currentUser]);

  // Sign in
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, registerEmail, registerPassword);
    } catch (error) {
      console.log(error.message);
    }
    toggleSignInModal();
  };

  // Sign out
  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <Header
        toggleModal={toggleModal}
        toggleSignInModal={toggleSignInModal}
        logOut={logOut}
        signIn={signIn}
        currentUser={currentUser}
      />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="game" element={<Game />}>
          <Route path="color" element={<Color />} />
          <Route path="letter" element={<Letter />} />
          <Route path="number" element={<Number />} />
          <Route path="shape" element={<Shape />} />
        </Route>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

      <SignInModal
        showSignInModal={showSignInModal}
        toggleSignInModal={toggleSignInModal}
        signIn={signIn}
        saveEmail={saveEmail}
        savePassword={savePassword}
      />

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
        <SuccessModal
          showModal={showModal}
          toggleModal={toggleModal}
          currentUser={currentUser}
        />
      )}
    </>
  );
}

export default App;
