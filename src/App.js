import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./component/Nav";
import styles from "./style.css";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                {/* react-router-dom 버전 6 부터는 Switch=> Routes로 바뀜 */}
                <Route path="/movie/:id" component={Detail} />
                <Route path="/" component={Home} exact={true} />
                {/* exact옵션을 주면 이 URL외에서는 동작을 하지 않도록 설정해
            주는 역할을 한다. (겹쳐보이지 않게 해줌)*/}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
