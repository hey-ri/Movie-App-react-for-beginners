import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    /* todo
    1. 내 돈을 입력하면 얼마나 해당코인으로 바꿔줄 수 있는 지 구하기
    */
    const [myMoney, setMyMoney] = useState();
    const [changeCoin, setChangeCoin] = useState([]);

    const onMoney = (e) => {
        setMyMoney(e.target.value);
    };

    const onSelect = (e) => {
        const price = coins[e.target.selectedIndex - 1].quotes.USD.price;
        setMyMoney((currentArray) => [price]);
    };

    const changeGetCoin = (e) => {
        setChangeCoin((current) => coins[e.target.selectedIndex - 1].quotes.USD.price / setMyMoney);
    };

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
            <h1>The conins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading....</strong>
            ) : (
                <>
                    <select onInput={onSelect}>
                        {coins.map((coin) => (
                            <option key={coin.id}>
                                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                            </option>
                        ))}
                    </select>
                    <div>
                        <input placeholder="My Money" onChange={onMoney} value={myMoney} type="number" />
                    </div>
                    <div>
                        <input
                            placeholder="Get Coin"
                            onChange={changeGetCoin}
                            value={changeCoin / myMoney}
                            type="number"
                            disabled
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
