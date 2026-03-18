// components/Carousel.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = ({
    slides,
    autoPlayInterval = 5000,
    showArrows = true,
    showDots = true,
    effect = 'fade',
    height = '500px',
    className = ''
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (autoPlayInterval) {
            const timer = setInterval(() => {
                goToNext();
            }, autoPlayInterval);
            return () => clearInterval(timer);
        }
    }, [currentIndex, autoPlayInterval]);

    const goToPrevious = () => {
        setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    if (!slides || slides.length === 0) return null;

    return (
        <div className={`carousel-container ${className}`} style={{ height }}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${effect === 'fade' ? 'fade-effect' : 'slide-effect'} 
            ${index === currentIndex ? 'active' : ''}`}
                    style={{
                        backgroundImage: slide.image ? `url(${slide.image}?v=${Date.now()})` : 'none',
                        backgroundColor: slide.backgroundColor || 'transparent',
                    }}
                >
                    {slide.type === 'hero' && (
                        <div className="carousel-content" style={slide.contentStyle}>
                            {slide.title && <h1 className="carousel-title">{slide.title}</h1>}
                            {slide.subtitle && <p className="carousel-subtitle">{slide.subtitle}</p>}
                            {slide.buttons && (
                                <div className="carousel-buttons">
                                    {slide.buttons.map((btn, idx) => (
                                        btn.link ? (
                                            <a key={idx} href={btn.link} className={btn.className}>
                                                {btn.icon && <span className="btn-icon">{btn.icon}</span>}
                                                {btn.text}
                                            </a>
                                        ) : (
                                            <button key={idx} className={btn.className}>
                                                {btn.icon && <span className="btn-icon">{btn.icon}</span>}
                                                {btn.text}
                                            </button>
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {slide.type === 'actu' && (
                        <>
                            <div className="carousel-overlay" />
                            <div className="carousel-caption">
                                <h3>{slide.title}</h3>
                                <p>{slide.message}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}

            {showArrows && (
                <>
                    <button className="carousel-arrow left" onClick={goToPrevious}>
                        ‹
                    </button>
                    <button className="carousel-arrow right" onClick={goToNext}>
                        ›
                    </button>
                </>
            )}

            {showDots && (
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;