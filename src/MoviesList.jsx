import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MoviesList extends Component {
	render() {
		return (
			<div>
				{this.props.movies.map(m => (
					<MovieCard film={m} key={m.id} id={m.id} />
				))}
			</div>
		);
	}
}

export default MoviesList;
