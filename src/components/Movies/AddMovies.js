import React, { useContext ,useState} from "react";
import { ModalContext } from "./ModalContext";
import "./MoviesList.css";

const AddMovies = () => {
  const { showModal, toggleModal,addMovieHandler } = useContext(ModalContext);

  const [formData, setFormData] = useState({
    title: "",
    episode: "",
    releaseDate: "",
    director: "",
    producer: "",
    openingCrawl: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    toggleModal();
    addMovieHandler(movie);
    setFormData({
    title: "",
    episode: "",
    releaseDate: "",
    director: "",
    producer: "",
    openingCrawl: "",
    })
  };
  const movie = {
    title: formData.title,
    episode_id: formData.episode,
    release_date: formData.releaseDate,
    director: formData.director,
    producer: formData.producer,
    opening_crawl: formData.openingCrawl,
  };
  if (!showModal) return null;

  return (
    <div className="app">
      <div className="backdrop" onClick={toggleModal}></div>
      <div className="modal">
        <form className="movie-form" onSubmit={handleSubmit}>
          <h2>Add Movie Details</h2>

          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Episode</label>
            <input
              type="text"
              name="episode"
              value={formData.episode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Release Date</label>
            <input
              type="date"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Director</label>
            <input
              type="text"
              name="director"
              value={formData.director}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Producer</label>
            <input
              type="text"
              name="producer"
              value={formData.producer}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Opening Crawl</label>
            <textarea
              type="text"
              name="openingCrawl"
              value={formData.openingCrawl}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button
            type="button"
            className="close-btn"
            onClick={toggleModal}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovies;
