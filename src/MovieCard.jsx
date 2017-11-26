import React, { Component } from "react";
import {
	Box,
	Card,
	CardHeader,
	CardHeaderTitle,
	CardImage,
	CardContent,
	Content
} from "bloomer";
import "./MovieCard.css";
import MovieImage from "./MovieImage";

class MovieCard extends Component {
	render() {
		let movie_id = this.props.id;
		return (
			<Box className="MovieCard-Box" id={"movie_" + movie_id}>
				<Card className="Card-Movie">
					<CardHeader>
						<CardHeaderTitle>{this.props.film.title}</CardHeaderTitle>
					</CardHeader>
					<CardImage>
						<MovieImage movie_id={movie_id} />
					</CardImage>
					<Content>
						{this.props.film.overview}
						<br />
						<small>Release Date: {this.props.film.release_date}</small>
						<br />
						<small>Average Rating: {this.props.film.vote_average}</small>
						<br />
						<small>Popularity: {this.props.film.popularity}</small>
					</Content>
				</Card>
			</Box>
		);
	}
}

export default MovieCard;
