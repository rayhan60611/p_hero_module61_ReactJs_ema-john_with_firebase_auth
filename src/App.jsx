import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
// import Login from "./components/login/Login";

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Login></Login> */}
      <Outlet />
    </div>
  );
}

export default App;
