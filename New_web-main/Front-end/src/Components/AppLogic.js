export const handleLeftButtonClick = (cardsRef) => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft -= 140;
    }
  };
  
export const handleRightButtonClick = (cardsRef) => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += 140;
    }
  };
