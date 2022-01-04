import logo from "./logo.svg";
import "./App.css";
import Mobiles from "./Components/Mobiles";
import Eshop from "./Components/E-shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Movies from "./Components/Movies";
// import { Provider } from "react-redux";
// import { ConfigStore } from "./State/ConfigStore";

function App() {
  // const LocalStore = ConfigStore;

  return (
    <div className="App">
      {/* <Provider store={LocalStore}> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Mobiles />} />
          <Route path="/Eshop" element={<Eshop />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}

      {/* <Mobiles /> */}
      {/* <Eshop /> */}
    </div>
  );
}

export default App;
