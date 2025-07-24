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
    <div className="relative flex flex-col items-center w-full max-w-lg mx-auto my-3">
      {/* Left Button */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prevCard}
          className="text-gray-700 p-2 rounded-full hover:bg-gray-900 hover:scale-110 hover:opacity-80 transition-transform duration-200"
        >
          <span className="material-symbols-outlined text-3xl">
            chevron_left
          </span>
        </button>
      </div>

      {/* Animated Card Display */}
      <TransitionGroup className="w-full flex justify-center">
        <CSSTransition
          key={current}
          timeout={400}
          classNames="card-transition"
          nodeRef={nodeRef}
        >
          <div ref={nodeRef} className="flex flex-col items-center justify-center">
            <img
              src={cards[current].src}
              alt={`Card ${current + 1}`}
              className="w-80 md:w-[400px] object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm text-gray-500 text-center max-w-xs">
              {cards[current].caption}
            </p>
          </div>
        </CSSTransition>
      </TransitionGroup>

      {/* Right Button */}
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={nextCard}
          className="text-gray-700 p-2 rounded-full hover:bg-gray-900 hover:scale-110 hover:opacity-80 transition-transform duration-200"
        >
          <span className="material-symbols-outlined text-3xl">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
