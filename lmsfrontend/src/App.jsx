import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import Approuter from "./router/Approuter";

function App() {
  return (
    <>
      <Provider store={store}>
        <Approuter />
      </Provider>
    </>
  );
}

export default App;
