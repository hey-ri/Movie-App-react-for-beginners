import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
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
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img src={movie.medium_cover_image} />
                            <h2>{movie.title}</h2>
                            <p>{movie.summary}</p>
                            <ul>
                                {movie.genres.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
