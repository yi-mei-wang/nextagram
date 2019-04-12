import React, { Component } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
// import Image from "react-graceful-image";
import NoImages from "../images/nopostsyet.png";

// import LikeableImage from "./LikeableImage";

class UserCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.images.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { images } = this.props;
    let slides;
    if (images.length === 0) {
      slides = [
        <img
          height="80%"
          width="80%"
          src={NoImages}
          alt="User's posts"
          className="carousel-img "
        />
      ];
    } else {
      slides = images.map(image => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={image}
          >
            <img
              height="100%"
              width="100%"
              src={image}
              alt="User's posts"
              className="carousel-img"
            />
          </CarouselItem>
        );
      });
    }

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
        className="carousel-container text-center"
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default UserCarousel;
