import Homepage from "@pages/Homepage";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => (
  <Provider store={store}>
    <Homepage />
  </Provider>
);

export default App;
