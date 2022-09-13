import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../component/MovieDetail";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setMovieInfo(json.data.movie);
        setLoading(false);
    }; /* awite는 async 함수 '함수'안에 있어야함 그래서 getMovie라는 함수를 만들어 줌 */

    let nowUrl = window.location.pathname;

    useEffect(() => {
        setLoading(true);
        getMovie();
    }, [nowUrl]);

    return loading ? (
        <div>
            <h2>Loading...</h2>
        </div>
    ) : (
        <MovieDetail
            url={movieInfo.url}
            year={movieInfo.year}
            rating={movieInfo.rating}
            coverImg={movieInfo.medium_cover_image}
            title={movieInfo.title_long}
            summary={movieInfo.description_full}
            genres={movieInfo.genres}
        />
    );
}
export default Detail;
