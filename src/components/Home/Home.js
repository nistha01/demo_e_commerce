import React, { useState, useRef } from 'react';
import './Home.css';
import Images from '../../../src/assets/Image.jpg';
import audio from '../../../src/assets/Audio.mp3';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track whether audio is playing
  const audioRef = useRef(null); // Create a ref to access the audio element

  // Function to play audio
  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio
      setIsPlaying(true); // Set playing state to true
    }
  };

  // Function to stop audio
  const handleStopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause the audio
      audioRef.current.currentTime = 0; // Reset the audio to start
      setIsPlaying(false); // Set playing state to false
    }
  };

  // Event when the audio ends
  const handleAudioEnd = () => {
    setIsPlaying(false); // Set playing state to false when audio finishes
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title animated-title">Welcome to the Future of Apps</h1>
        <p className="subtitle animated-text">
        "When your heart feels heavy and your mind needs peace, let this melody be your comfort and your strength."
        </p>
        <button className="cta-button animated-button" onClick={handlePlayAudio} disabled={isPlaying}>
          Listen Me
        </button>
        {isPlaying && (
          <button className="cta-button animated-button" onClick={handleStopAudio}>
            Stop
          </button>
        )}
      </div>
      <div className="image-container">
        <img
          src="http://localhost/img/tree.jpg"
          alt="App Showcase"
          className="showcase-image animated-image"
        />
      </div>

  
      <audio
        ref={audioRef}
        type="mp3"
        src="http://localhost/audio/audio.mp3"
        onEnded={handleAudioEnd} 
      />
    </div>
  );
};

export default Home;
