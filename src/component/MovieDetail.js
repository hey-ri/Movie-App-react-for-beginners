import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieDetail({ coverImg, url, title, genres, year, rating, summary }) {
    return (
        <div>
            <div className="imgBox">
                <img src={coverImg} alt={title} />
                <a href={url}>Go To site</a>
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
                <p className="detail_year">{year}</p>
                <p className="detail_rating">
                    <FontAwesomeIcon icon={faStar} className="ratingStar" />
                    {rating}
                </p>
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
