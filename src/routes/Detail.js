import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        //console.log(json);
    }; /* awite는 async 함수 '함수'안에 있어야함 그래서 getMovie라는 함수를 만들어 줌 */
    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail</h1>;
}
export default Detail;
