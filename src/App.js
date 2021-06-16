import './App.css';

import Feed from "./Feed/feed";
import Post from "./Post/post";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Feed />
      <Post />
    </Provider>
  );
}
export default App;