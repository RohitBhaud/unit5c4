import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleisAuth } from "../Redux/actions";

export const Login = () => {
  const nav = useNavigate()
  var dispatch = useDispatch();
  const user = useSelector((store) => store.usersM);
  console.log("user:", user);
  const [data, setData] = useState({});
  function handleInput(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  console.log(data);
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        onChange={handleInput}
        placeholder="Enter Username"
      />
      <input
        className="password"
        type="password"
        name="password"
        onChange={handleInput}
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button
        className="submit"
        onClick={() => {
          for (let i = 0; i < user.length; i++) {
            if (data.username == user[i].username) {
              if (data.password == user[i].pass) {
                dispatch(toggleisAuth(true))
                if (user[i].role == 'admin') {
                   nav("/orders")
                } else {
                   nav("/neworder")
                 }
              }
            }
          }
        }}
      >
        Login
      </button>
    </div>
  );
};
