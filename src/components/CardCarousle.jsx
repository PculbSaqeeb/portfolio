
import React, { useState, useEffect, useCallback } from 'react';
import '../App.css'
const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalCards = 5;

  const cardData = [
    {
      type: 'card1',
      content: (
        <>
          <div className="chip"></div>
          <div className="card-info">
            <div className="card-holder">John Doe</div>
            <div className="card-expiry">12/28</div>
          </div>
        </>
      )
    },
    {
      type: 'card2',
      content: (
        <>
          <div className="ui-badge">UI INITIATIVE</div>
          <div className="gaming-text">DIGITAL<br />GAMING</div>
          <div className="visa-logo">VISA</div>
        </>
      )
    },
    {
      type: 'card3',
      content: (
        <>
          <div className="card-number">123</div>
          <div className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </div>
          <div className="card-info">
            <div className="card-holder">Member Card</div>
            <div className="card-expiry">Valid: 2028</div>
          </div>
        </>
      )
    },
    {
      type: 'card4',
      content: (
        <>
          <div style={{ marginBottom: '40px' }}>
            <p>Premium</p>
            <p style={{ marginTop: '10px', opacity: 0.9 }}>Exclusive Benefits</p>
          </div>
          <div className="card-info">
            <div className="card-holder">Elite Member</div>
            <div className="card-expiry">Lifetime</div>
          </div>
        </>
      )
    },
    {
      type: 'card5',
      content: (
        <>
          <div style={{ marginBottom: '40px' }}>
            <p>Rewards</p>
            <p style={{ marginTop: '10px', opacity: 0.9 }}>Cashback & Points</p>
          </div>
          <div className="card-info">
            <div className="card-holder">Gold Member</div>
            <div className="card-expiry">12/27</div>
          </div>
        </>
      )
    }
  ];

  const getCardPosition = useCallback((index) => {
    const position = (index - currentIndex + totalCards) % totalCards;
    
    if (position === 0) return 'active';
    if (position === 1) return 'next';
    if (position === totalCards - 1) return 'prev';
    if (position === 2) return 'far-next';
    if (position === totalCards - 2) return 'far-prev';
    return 'hidden';
  }, [currentIndex, totalCards]);

  const nextCard = useCallback(() => {
    if (isAnimating) return;
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [isAnimating, totalCards]);

  const prevCard = useCallback(() => {
    if (isAnimating) return;
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [isAnimating, totalCards]);

  const goToCard = useCallback((index) => {
    if (isAnimating || index === currentIndex) return;
    setCurrentIndex(index);
  }, [isAnimating, currentIndex]);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(nextCard, 3000);
    return () => clearInterval(interval);
  }, [nextCard]);

  // Animation state management
  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevCard();
      } else if (e.key === 'ArrowRight') {
        nextCard();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextCard, prevCard]);

  // Touch/swipe support
  useEffect(() => {
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextCard();
        } else {
          prevCard();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextCard, prevCard]);

  return (
    <div className="carousel-container">
      <div className="auto-rotate-indicator">Auto-rotating</div>
      
      <button aria-label='Previous Card' className="nav-button nav-left" onClick={prevCard}>
        ←
      </button>
      
      <div className="carousel-track">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card ${card.type} ${getCardPosition(index)}`}
            data-index={index}
          >
            {card.content}
          </div>
        ))}
      </div>

      <button aria-label='Next Card' className="nav-button nav-right" onClick={nextCard}>
        →
      </button>

      <div className="indicators">
        {Array.from({ length: totalCards }, (_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;