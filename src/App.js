import './App.css';

import Header from './Header/header';
import Footer from './Footer/footer';
import Feed from "./Feed/feed";
import Post from "./Post/post";
import { Provider } from "./context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Provider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
    </>
  );
}
export default App;