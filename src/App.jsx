import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {addUser} from "./Redux/actions"
import {addOrder} from "./Redux/actions"
function App() {
  const log = useSelector((store) => store.isLoggedIn);
  var dispatch = useDispatch();
  useEffect(() => {
    getDataM(dispatch);
  }, []);

  async function getDataM(dispatch) {
    let data = await fetch("http://localhost:8080/users");
    let res = await data.json();
    // console.log("res:", res);
    dispatch(addUser(res));
    let data1 = await fetch("http://localhost:8080/orders");
    let res1 = await data1.json();
    // console.log("res:", res);
    dispatch(addOrder(res1));
  }
  console.log("log:", log);
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}

        {log ? (
          <Link className="nav-logout" to="/" onClick={() => {
           
          }}>
            Logout
          </Link>
        ) : (
          <Link className="nav-login" to="/login">
            Login
          </Link>
        )}
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Logout />}></Route>
        <Route path="/neworder" element={<NewOrder />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </div>
  );
}

export default App;
