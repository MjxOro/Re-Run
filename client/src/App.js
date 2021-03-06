import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/SignUp/SignUp";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import PostPage from "./pages/PostPage/PostPage";
import AddPost from "./pages/AddPost/AddPost";
import MyAdPosts from "./pages/MyAdPosts/MyAdPosts";
import EditPost from "./pages/EditPost/EditPost";
import ChatPage from "./pages/ChatPage/ChatPage";
import Tech from "./pages/Tech/Tech";
import Clothing from "./pages/Clothing/Clothing";
import General from "./pages/General/General";
import Gardening from "./pages/Gardening/Gardening";

const App = () => {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <ProtectedRoute path="/category/electronics" component={Tech} />
              <ProtectedRoute path="/category/clothing" component={Clothing} />
              <ProtectedRoute path="/category/general" component={General} />
              <ProtectedRoute
                path="/category/gardening"
                component={Gardening}
              />
              <ProtectedRoute path="/chat/" component={ChatPage} />
              <ProtectedRoute path="/edit/post/:id" component={EditPost} />
              <ProtectedRoute path="/mypostings" component={MyAdPosts} />
              <ProtectedRoute path="/add/posts" component={AddPost} />
              <ProtectedRoute path="/post/:id" component={PostPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={SignUp} />
              <Route path="/welcome" component={LandingPage} />
              <ProtectedRoute path="/" component={MainPage} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </BrowserRouter>
  );
};
export default App;
