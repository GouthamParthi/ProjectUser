import "./styles.css";
import Home from "./components/Home/home";
import UserPageProfile from "./components/userPage/userPageProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPagePosts from "./components/userPage/userPagePosts";
import UserPageGallery from "./components/userPage/userPageGallery";
import UserPageToDo from "./components/userPage/userPageToDo";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/userpage/profile/:userId"
            element={<UserPageProfile />}
          />
          <Route path="/userpage/posts/:userId" element={<UserPagePosts />} />
          <Route
            path="/userpage/gallery/:userId"
            element={<UserPageGallery />}
          />
          <Route path="/userpage/todo/:userId" element={<UserPageToDo />} />
        </Routes>
      </Router>
    </div>
  );
}
