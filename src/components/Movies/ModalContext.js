import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([]);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const addMovieHandler = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };
  

  return (
    <ModalContext.Provider value={{ showModal, toggleModal,movies,addMovieHandler, setMovies}}>
      {children}
    </ModalContext.Provider>
  );
};
