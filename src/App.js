import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./component/Nav";
import "./style.css";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/* react-router-dom 버전 6 부터는 Switch=> Routes로 바뀜 */}
                <Route path="/movie/:id" component={Detail} />
                <Route path="/" component={Home} />
            </Switch>
            <Navigation />
        </BrowserRouter>
    );
}

export default App;
