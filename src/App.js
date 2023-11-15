import logo from './vecteezy_valentine-day-love-letter-envelope_22034135_962.png';
import front from './card-front.png'
import glassball from './glass-ball.png'
import './App.css';
import './styles.css'
import './second_page.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [imageVisible, setImageVisible] = useState(true);
  const [animationPaused, setAnimationPaused] = useState(false);
  const [openCard, setOpenCard] = useState(true);
  const [isFaded, setIsFaded] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(true);

  const handleFade = () => {
    setIsFaded(!isFaded); // Toggle the fade state
  };

  const handleClick = () => {
    if (imageVisible && !animationPaused) {
      setAnimationPaused(true);
      requestAnimationFrame(() => {
        setImageVisible(false);
      });
    }
  };

  useEffect(() => {
    if (isFaded) {
      const timer = setTimeout(() => {
        setIsDisplayed(false);
      }, 500); // assuming the transition duration is 500ms
      return () => clearTimeout(timer);
    } else {
      setIsDisplayed(true);
    }
  }, [isFaded]);

  const handleCard = () => {
    setOpenCard(!openCard);
  }

  return (
    <header className={`App-header ${isFaded ? 'faded' : ''}`}>
      <div className="App" onClick={handleClick} style={{display: isDisplayed ? "block" : "none", opacity: isFaded ? 0 : 1, transition: "opacity .5s ease-out"}}>
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
                <div class = "greeting"> Dear , </div>
                <div class = "body of letter">
                 </div>
              </div>
          </div>
          <div class="right-card">
            <div class="body of letter">
            </div>
            <div class="closing" onClick={handleFade}>Jason</div>
          </div>
          <script src="./open-card.js"></script>
        </div>
          
        </div>
      </div>
      
      <div class="second page" style={{display: !isDisplayed ? "block" : "none", opacity: isFaded ? 1 : 0, transition: "opacity .5s ease-out"}}>
        <div class = "stars">
          <div class = "glass-ball">
              <img src={glassball} alt="a glass ball"/>
            <div class = "note">
            </div>
          </div>
        </div>
      </div>
      {/* include logic for the second part of the webpage */}

    </header>
    

  );
}

export default App;

