import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./component/Nav";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/" component={Home} exact={true} />
            {/* exact옵션을 주면 이 URL외에서는 동작을 하지 않도록 설정해
            주는 역할을 한다. (겹쳐보이지 않게 해줌)*/}
        </BrowserRouter>
    );
}

export default App;
