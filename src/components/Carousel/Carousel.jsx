import { useState } from "react";

const ImagesCarousel = (props) => {
  const { images = [], width = '100%', totalImages, startIndex = 0 } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(8px)",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
  }

  return (
    <div style={{ width, position: "relative" }} className="carousel-wrapper">

      {/* INDEX INDICATOR */}
      <p style={{
        position: "absolute",
        top: "12px",
        right: "12px",
        zIndex: 10,
        color: "white",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(8px)",
        padding: "4px 10px",
        borderRadius: "8px",
        margin: 0,
        fontSize: "14px"
      }}>
        {startIndex + currentIndex + 1}/{totalImages ?? images.length}
      </p>

      {/* LEFT ARROW — pinned to far left */}
      <button
        style={{ ...arrowStyle, left: "0px" }}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={() => setCurrentIndex(prev => (prev - 1 + images.length) % images.length)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* RIGHT ARROW — pinned to far right */}
      <button
        style={{ ...arrowStyle, right: "0px" }}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <div id="carouselExampleIndicators" className="carousel slide h-100">
        <div className="carousel-inner h-100">
          {images.map((img, i) => (
            <div
              key={i}
              className={`carousel-item h-100 ${i === 0 ? "active" : ""}`}
              style={{ borderRadius: "8px" }}
            >
              <img
                src={img?.image_url}
                className="d-block w-100 h-100 rounded"
                alt={`slide ${i + 1}`}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .carousel-wrapper { height: 65vh; }
        @media (max-width: 992px) { .carousel-wrapper { height: 45vh; } }
        @media (max-width: 576px) {
          .carousel-wrapper { height: 30vh; }
        }
      `}</style>
    </div>
  );
};

export default ImagesCarousel;