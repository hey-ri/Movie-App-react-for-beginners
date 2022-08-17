import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [select, setSelect] = useState(0);
    const [unit, setUnit] = useState(1);
    const [inverted, setInverted] = useState(false);
    const onChange = (event) => {
        setSelect(event.target.value);
    };
    const onChangePrice = (event) => {
        setUnit(event.target.value);
    };
    const onClickBtn = () => {
        setInverted((prev) => !prev);
        setUnit(1);
    };
    // 처음 새로고침했을 때 한번만 실행되야 하니까,
    // useEffect((익명) 함수 (리턴값은 destroy 될때 실행될 함수), dependencies)
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h1>Cryptocurrency Calculator</h1>
            {loading ? (
                <h3> Loading... </h3>
            ) : (
                <>
                    <select value={select} onChange={onChange}>
                        {coins.map(({ id, name }, index) => (
                            <option value={index} key={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                    <hr />
                    <input
                        onChange={onChangePrice}
                        label="USD"
                        value={inverted ? (unit * coins[select].quotes.USD.price).toFixed(6) : unit}
                        disabled={inverted}
                    />
                    <input
                        onChange={onChangePrice}
                        label={coins[select].symbol}
                        value={inverted ? unit : (unit / coins[select].quotes.USD.price).toFixed(6)}
                        disabled={!inverted}
                    />
                    <button onClick={onClickBtn}>Convert</button>
                </>
            )}
        </div>
    );
}

export default App;
