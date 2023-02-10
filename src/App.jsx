import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/headerComponents/Header";
import EmailModal from "./components/modalComponents/EmailModal";
import NameModal from "./components/modalComponents/NameModal";
import PasswordModal from "./components/modalComponents/PasswordModal";
import SignInModal from "./components/modalComponents/SignInModal";
import SuccessModal from "./components/modalComponents/SuccessModal";
import { Color } from "./features/flashcard/Color";
import { Letter } from "./features/flashcard/Letter";
import { Number } from "./features/flashcard/Number";
import { Shape } from "./features/flashcard/Shape";
import NotFound from "./pages/404";
import FAQ from "./pages/FAQ";
import Game from "./pages/Game";
import HomePage from "./pages/HomePage";
import auth from "./utils/firebase";

function App() {
  const location = useLocation();
  const [registerName, setRegisterName] = React.useState("");
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});
  const [showRegisterModal, setShowRegisterModal] = React.useState(false);
  const [showSignInModal, setShowSignInModal] = React.useState(false);
  const [page, setPage] = React.useState(0);

  // Firebase: subscribe to the users current authentication state
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [currentUser]);

  const saveName = (e) => setRegisterName(e.target.value);
  const saveEmail = (e) => setRegisterEmail(e.target.value);
  const savePassword = (e) => setRegisterPassword(e.target.value);

  const toggleSignInModal = () => setShowSignInModal(!showSignInModal);
  const toggleModal = () => setShowRegisterModal(!showRegisterModal);

  const handleBackClick = () => setPage((prevPage) => prevPage - 1);
  const handleForwardClick = () => setPage((prevPage) => prevPage + 1);

  const handleKeyDown = (e) =>
    e.key === "Enter" && setPage((prevPage) => prevPage + 1);

  // Function: Registration
  const registerNewUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      await updateProfile(auth.currentUser, {
        displayName: registerName,
        email: user.email,
        uid: user.uid,
        accessToken: user.accessToken,
      });
      handleForwardClick();
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function: Sign in
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, registerEmail, registerPassword);
    } catch (error) {
      console.log(error.message);
    }
    toggleSignInModal();
  };

  // Function: Sign out
  const logOut = async () => {
    await signOut(auth);
  };

  const registerModalUi = [
    <NameModal
      showRegisterModal={showRegisterModal}
      toggleModal={toggleModal}
      handleForwardClick={handleForwardClick}
      saveName={saveName}
      handleKeyDown={handleKeyDown}
    />,
    <EmailModal
      showRegisterModal={showRegisterModal}
      toggleModal={toggleModal}
      handleBackClick={handleBackClick}
      handleForwardClick={handleForwardClick}
      saveEmail={saveEmail}
      handleKeyDown={handleKeyDown}
    />,
    <PasswordModal
      showRegisterModal={showRegisterModal}
      toggleModal={toggleModal}
      handleBackClick={handleBackClick}
      handleForwardClick={handleForwardClick}
      registerNewUser={registerNewUser}
      savePassword={savePassword}
      handleKeyDown={handleKeyDown}
    />,
    <SuccessModal
      showRegisterModal={showRegisterModal}
      toggleModal={toggleModal}
      currentUser={currentUser}
    />,
  ];

  return (
    <>
      <Header
        toggleModal={toggleModal}
        toggleSignInModal={toggleSignInModal}
        logOut={logOut}
        signIn={signIn}
        currentUser={currentUser}
      />
      {registerModalUi[page]}
      <SignInModal
        showSignInModal={showSignInModal}
        toggleSignInModal={toggleSignInModal}
        signIn={signIn}
        saveEmail={saveEmail}
        savePassword={savePassword}
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
    </>
  );
}

export default App;
