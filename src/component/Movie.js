import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
    return (
        <Link to={`/movie/${id}`}>
            <div className={styles.movie}>
                <img src={coverImg} alt={title} className={styles.movie__img} />
                <div>
                    <h2 className={styles.movie__title}>{title.length > 18 ? `${title.slice(0, 18)}...` : title}</h2>
                    <ul className={styles.movie__genres}>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                    <span className={styles.movie__year}>{year}</span>
                    <p>{summary.length > 165 ? `${summary.slice(0, 165)}...` : summary}</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
