import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Slider extends Component {
  render() {
    const defaultProps = {
      slide: true,
      interval: 5000,
      pauseOnHover: true,
      wrap: true,
      indicators: false,
      controls: true,
    };

    return (
      <Carousel {...defaultProps}>
        <Carousel.Item className="custom-tag">
          <img
            width={900}
            height={500}
            alt="900x500"
            src="/images/sliders/slide-01.jpg"
          />
          <Carousel.Caption>
            <p className="category">Travel</p>
            <Link to="/posts/1">
              <h3>Top 5 Places To Start Your Vacation This Summer</h3>
            </Link>
            <ul className="post-meta">
              <li>
                <Link to="/author/1">John Doe</Link>
              </li>
              <li>20 April 2018</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="custom-tag">
          <img
            width={900}
            height={500}
            alt="900x500"
            src="/images/sliders/slide-02.jpg"
          />
          <Carousel.Caption>
            <p className="category">Health</p>
            <Link to="/posts/1">
              <h3>6 Facts - The Health Benefits of Swimming & Surfing</h3>
            </Link>
            <ul className="post-meta">
              <li>
                <Link to="/author/1">John Doe</Link>
              </li>
              <li>20 April 2018</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="custom-tag">
          <img
            width={900}
            height={500}
            alt="900x500"
            src="/images/sliders/slide-03.jpg"
          />
          <Carousel.Caption>
            <p className="category">Lifestyle</p>
            <Link to="/posts/1">
              <h3>Popular Lifestyle Tips</h3>
            </Link>
            <ul className="post-meta">
              <li>
                <Link to="/author/1">John Doe</Link>
              </li>
              <li>20 April 2018</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
