import { useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Carousel.css";

interface CardItem {
  src: string;
  caption: string;
}

interface CardCarouselProps {
  cards: CardItem[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [current, setCurrent] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  const prevCard = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-lg mx-auto my-3 h-72"> 
      {/* Left Button */}
      <div className="absolute inset-y-0 left-0 flex items-center z-10">
        <button
          onClick={prevCard}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-900 hover:text-white hover:scale-110 hover:opacity-90 transition-transform duration-200"
        >
          <span className="material-symbols-outlined text-3xl">chevron_left</span>
        </button>
      </div>

      {/* Animated Card Display */}
      <TransitionGroup className="flex items-center justify-center rounded-lg shadow-md">
        <CSSTransition
          key={current}
          timeout={400}
          classNames="card-transition"
          nodeRef={nodeRef}
        >
          <div ref={nodeRef} className="flex flex-col justify-center text-center items-center">
            <img
              src={cards[current].src}
              alt={`Card ${current + 1}`}
              className="max-w-16 max-h-16 object-cover rounded-lg" 
            />
            <p className="mt-4 text-m text-gray-500 text-center max-w-xs">
              {cards[current].caption}
            </p>
          </div>
        </CSSTransition>
      </TransitionGroup>

      {/* Right Button */}
      <div className="absolute inset-y-0 right-0 flex items-center z-10">
        <button
          onClick={nextCard}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-900 hover:text-white hover:scale-110 hover:opacity-90 transition-transform duration-200"
        >
          <span className="material-symbols-outlined text-3xl">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
