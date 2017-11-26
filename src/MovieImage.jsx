import React, { Component } from "react";
import { Image } from "bloomer";
import ImageLoading from "./ImageLoading";

class MovieImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_path: ""
    };
  }
  async componentDidMount() {
    const result = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.props.movie_id +
        "/images?api_key=b0e53c16a13148a3ffc087078f52673f"
    );
    const data = await result.json();
    this.image_path =
      data.posters[0] === undefined ? "No Poster" : data.posters[0].file_path;
    this.setState({
      image_path:
        this.image_path == "No Poster"
          ? "No Poster"
          : "https://image.tmdb.org/t/p/w500" + this.image_path
    });
  }

  render() {
    let image = this.state.image_path;
    return (
      <div>
        {image.length == 0 ? (
          <ImageLoading />
        ) : image == "No Poster" ? (
          <p>
            {" "}
            <strong> No Poster for This Movie!</strong>
          </p>
        ) : (
          <Image isRatio="3:" src={image} />
        )}
      </div>
    );
  }
}

export default MovieImage;
