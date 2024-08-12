import Homepage from "@pages/Homepage";
/* import { Provider } from "react-redux";
import { store } from "./store"; */
import Footer from "../common/components/Footer";
import AppLayout from "../common/layouts/AppLayout";

const App = () => (
  /*   <Provider store={store}> */
  <AppLayout>
    <Homepage />
    <Footer />
  </AppLayout>

  /*   </Provider> */
);

export default App;
