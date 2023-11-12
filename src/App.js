import logo from './vecteezy_valentine-day-love-letter-envelope_22034135_962.png';
import front from './card-front.png'
import './App.css';
import './styles.css'
import React, { useState } from 'react';

function App() {
  const [imageVisible, setImageVisible] = useState(true);
  const [animationPaused, setAnimationPaused] = useState(false);
  const [openCard, setOpenCard] = useState(true);

  const handleClick = () => {
    if (imageVisible && !animationPaused) {
      setAnimationPaused(true);
      requestAnimationFrame(() => {
        setImageVisible(false);
      });
    }
  };

  const handleCard = () => {
    setOpenCard(!openCard);
  }

  return (
    <header className="App-header">
      For you!
      <div className="App" onClick={handleClick}>
        <img 
          src={logo} 
          className={`${imageVisible ? "App-logo-fade-in" : "App-logo-fade-out"} ${animationPaused ? "App-logo-paused" : ""}`} 
          alt="logo" 
        />
        <div className={imageVisible ? "Letter-Out" : "Letter-In"}>
           <div class={openCard ? "card open text" : "card closed text"}>
              Open it up!
            </div>
          <div class={openCard ? "card" : "card open"} onClick={handleCard}>
          <div class="left-card">
              <div class="card-front">
                  <img src={front} alt="two worms looking at the sunset"/>
              </div>
              <div class="card-back">
                <div class = "greeting"> Dear Cindy, </div>
                <div class = "body of letter"><br></br>Happy SIX MONTHS worm! Time has really passed quickly. It's been 178 days since we rode that Amtrak together. </div>
              </div>
          </div>
          <div class="right-card">
          </div>
          <script src="./open-card.js"></script>
        </div>
          
        </div>
      </div>
    </header>
  );
}

export default App;
