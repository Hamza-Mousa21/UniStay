const ImagesCarousel = (props) => {
  const { image, width = '100%', height = '65vh' } = props;

  return (
    <div style={{ width, height }}>
      <div id="carouselExampleIndicators" className="carousel slide h-100">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <img
              src={image}
              className="d-block w-100 h-100"
              alt="slide 1"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src={image}
              className="d-block w-100 h-100"
              alt="slide 2"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src={image}
              className="d-block w-100 h-100"
              alt="slide 3"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImagesCarousel;