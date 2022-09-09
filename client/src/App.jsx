
import axios from "axios";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route,   Switch,  useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import { AuthContext } from "./context/AuthContext";
import PopupMessenger from "./features/popupMessenger/PopupMessenger";


// PAGES
import Bookmarks from "./pages/Bookmarks";
import Friends from "./pages/Friends";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import Messenger from "./pages/Messenger";
import Profile from "./pages/Profile";
import Register from "./pages/register";
import Watch from "./pages/Watch";
// stores
import { MESSENGER_REDUCERS } from "./store/messenger-slice";
// socket
const socket = io(process.env.REACT_APP_SOCKET_URL);

function App() {
  const dispatch = useDispatch()
  dispatch(MESSENGER_REDUCERS.setSocket({socket}))
  const path = useLocation();
  const { user } = useContext(AuthContext);
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
  return (
    <div className="">

      {user&& path !== "/messenger" && path !== "/login" && path !== "/register" && (
        <PopupMessenger />
      )}
      <Switch>
        <Route path={"/messenger"}>{user ? <Messenger /> : <Login />}</Route>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path={"/bookmarks"}>
          {!user ? <Redirect to="/" /> : <Bookmarks />}
        </Route>
        <Route path={"/friends"}>
          {!user ? <Redirect to="/" /> : <Friends />}
        </Route>
        <Route path={"/groups"}>
          {!user ? <Redirect to="/" /> : <Groups />}
        </Route>
        <Route path={"/marketplace"}>
          {!user ? <Redirect to="/" /> : <Marketplace />}
        </Route>
        <Route path={"/watch"}>{!user ? <Redirect to="/" /> : <Watch />}</Route>
      </Switch>
    </div>
  );
}

export default App;
