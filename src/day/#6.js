import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (e) => {
        setKeyword(e.target.value);
    };

    console.log("i run all the time");
    const iRunOnlyOnce = () => {
        console.log("call the API");
    };

    useEffect(iRunOnlyOnce, []);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("SEARCH FOR", keyword);
        }
    }, [keyword]); /* []에 넣는 것은 저것이 변화할 때만 실행되어라 라는 뜻 */
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here......" />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
