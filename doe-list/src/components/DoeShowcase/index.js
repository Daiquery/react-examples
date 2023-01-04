import Carousel from "react-bootstrap/Carousel";

function DoeShowcase() {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <h2 className="mt-4 text-start">Featured Does</h2>
      <Carousel className="mb-5">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/600x200"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>John Doe</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/600x200"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>John Doe</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/600x200"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>John Doe</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DoeShowcase;
