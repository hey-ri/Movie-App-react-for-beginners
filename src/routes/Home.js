import { useEffect, useState } from "react";
import Movie from "../component/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year")
        ).json();
        /*  const json = await response.json(); 을 지우고 위에 처럼 ()로 묶고 .json() 해줘도 됨 */ /* response쓴 이유는 respons에서 받아온 것이기 때문에 */
        setMovies(json.data.movies);
        setLoading(false); /* 다 받아오고 로딩 끝났기 때문에 false 해 줘야함 */
        /* .then 을 쓰지 않고 async await를 씀 작성은 위와 같이 */
    };

    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;
