import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import CanvasContainer from "./components/Workspace";

function App() {
  useEffect(() => {
    document.title = "Shots";
  }, []);

  return (
    <Provider store={store}>
      <div>
        <CanvasContainer></CanvasContainer>
      </div>
    </Provider>
  );
}

export default App;
