import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from './pages/home/Home.jsx';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
