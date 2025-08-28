import cards from "../../../public/cards/cards.json";
import s from "./index.module.scss";
import { useState, useRef, useEffect, useMemo } from "react";

const Index = ({ limitCard, getCardArray, disabled }) => {
  const [initialCards, setInitialCards] = useState(cards);
  const [newCardsArr, setNewCardsArr] = useState([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  // const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const [cardHieghtBalance, setCardHieghtBalance] = useState(2);
  const containerRef = useRef(null);

  let heightHoverCard = 200;

  const balancerHeight = heightHoverCard / cardHieghtBalance;

  useEffect(() => {
    console.log(window.innerWidth);
    if (typeof window !== "undefined") {
      setIsTouchDevice("ontouchstart" in window);
    }
    if (window.innerWidth < 500) {
      setCardHieghtBalance(4);
    }
  }, []);

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "";
  };

  const calculateAngles = useMemo(() => {
    const totalCards = initialCards.length;
    const spreadAngle = 160;
    const startAngle = -spreadAngle / 2;
    const angleStep = totalCards > 1 ? spreadAngle / (totalCards - 1) : 0;

    return initialCards.map((_, index) => startAngle + index * angleStep);
  }, [initialCards]);

  const updateDeck = (index) => {
    if (newCardsArr.length < limitCard) {
      const selectedCard = initialCards.find((el) => el.index === index);
      if (selectedCard) {
        setNewCardsArr((prev) => [...prev, selectedCard]);
        setInitialCards((prev) => prev.filter((el) => el.index !== index));
      }
    }
  };

  const handlePointerMove = (e) => {
    if (!containerRef.current || initialCards.length === 0) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height - balancerHeight;

    let clientX, clientY;
    if (e.touches) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const dx = clientX - centerX;
    const dy = clientY - centerY;

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    const normalizedAngle = (angle + 360) % 360;

    const spread = 160;
    const step = spread / initialCards.length;
    const startAngle = 270 - spread / 2;

    let relativeAngle = normalizedAngle - startAngle;

    if (relativeAngle < 0 || relativeAngle > spread) {
      setHoveredCardIndex(null);
      return;
    }

    const index = Math.floor(relativeAngle / step);
    setHoveredCardIndex(initialCards[index]?.index ?? null);
  };

  // const handleCardClick = (itemIndex) => {
  //   if (isTouchDevice) {
  //     setSelectedCardIndex(itemIndex);
  //   } else {
  //     updateDeck(itemIndex);
  //     setHoveredCardIndex(null);
  //   }
  // };

  const handleContainerClick = () => {
    if (!isTouchDevice) {
      updateDeck(hoveredCardIndex);
      setHoveredCardIndex(null);
    }
  };

  useEffect(() => {
    getCardArray(newCardsArr);
  }, [newCardsArr, getCardArray]);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = () => {
      disableBodyScroll();
    };

    const handleTouchEnd = () => {
      enableBodyScroll();
    };

    const preventScroll = (e) => {
      e.preventDefault();
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          disabled
            ? `${s.cards__wrapper} ${s.cards__wrapper__disable}`
            : s.cards__wrapper
        }
        ref={containerRef}
      >
        <div
          className={s.cards__wrap}
          onMouseMove={handlePointerMove}
          onTouchMove={handlePointerMove}
          onClick={handleContainerClick}
        >
          {initialCards.map((item, index) => {
            let rotation = calculateAngles[index];
            let translateY = -balancerHeight / 2;

            if (hoveredCardIndex !== null) {
              const hoveredIndex = initialCards.findIndex(
                (card) => card.index === hoveredCardIndex
              );

              if (index === hoveredIndex) {
                translateY -= 40;
              } else if (index < hoveredIndex) {
                rotation -= 10;
              } else if (index > hoveredIndex) {
                rotation += 10;
              }
            }

            return (
              <div
                id={`card-${item.index}`}
                data-card='card-item'
                key={`card-${item.index}`}
                style={{
                  rotate: `${rotation}deg`,
                  transform: `translateY(${translateY}px)`,
                  zIndex: index * 2,
                  transition: "transform 0.3s ease, rotate 0.3s ease",
                }}
                className={`${s.card} ${
                  hoveredCardIndex === item.index ? s.card__hovered : ""
                }`}
              />
            );
          })}
        </div>

        {isTouchDevice && hoveredCardIndex !== null && (
          <button
            className={s.selectButton}
            onClick={() => {
              updateDeck(hoveredCardIndex);
              setHoveredCardIndex(null);
            }}
          >
            выбрать
          </button>
        )}
      </div>

      <div className={s.select__wrap}>
        {newCardsArr.length > 0 &&
          newCardsArr.filter(Boolean).map((item) => (
            <div className={s.select__card} key={`card-selected-${item.index}`}>
              <div className={s.select__img}>
                <img
                  src={`/cards/deck/${item?.index}.jpg`}
                  alt={`card_${item?.index}`}
                />
              </div>
              <span>{item?.name}</span>
            </div>
          ))}
      </div>
    </>
  );
};
export default Index;
