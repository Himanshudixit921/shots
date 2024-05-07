import "./App.css";
import store from "./app/store";
import { Provider } from "react-redux";
import CanvasContainer from "./components/Workspace";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CanvasContainer></CanvasContainer>
      </div>
    </Provider>
  );
}

export default App;
