import { useState } from "react";

const RatingStars = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [clicked, setClicked] = useState(-1);

  const handleOnHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(-1);
  };

  const handleOnClick = (index) => {
    setClicked(index);
  };

  // decide what to show
  const activeIndex = hoveredIndex !== -1 ? hoveredIndex : clicked;

  const getStarClass = (index) => {
    return index <= activeIndex
      ? "bi bi-star-fill"
      : "bi bi-star";
  };

  return (
    <div
      className="d-flex"
      style={{ gap: "5px", fontSize: "2rem", cursor: "pointer" }}
      onMouseLeave={handleLeave}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <i
          key={i}
          className={getStarClass(i)}
          onMouseEnter={() => handleOnHover(i)}
          onClick={() => handleOnClick(i)}
        ></i>
      ))}
    </div>
  );
};

export default RatingStars;

