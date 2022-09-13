import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./MovieDetail.css";

function MovieDetail({ coverImg, url, title, genres, year, rating, summary }) {
    return (
        <div className="movie_detail_box">
            <div className="img_box">
                <img src={coverImg} alt={title} />
                <a href={url} target="_blank" className="go">
                    Go To site
                </a>
            </div>

            <div className="info">
                <h2 className="detail_title">{title}</h2>
                <ul className="detail_genres">
                    {genres
                        ? genres.map((g) => (
                              <li className="detail_genres_genre" key={g}>
                                  {g}
                              </li>
                          ))
                        : null}
                </ul>
                <div className="star_year">
                    <p className="detail_rating">
                        <FontAwesomeIcon icon={faStar} className="ratingStar" />
                        {rating}
                    </p>
                    <p className="detail_year">/ {year}</p>
                </div>
                <p className="detail_summary">{summary}</p>
            </div>
        </div>
    );
}

MovieDetail.propTypes = {
    url: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

export default MovieDetail;
