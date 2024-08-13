/* import { Provider } from "react-redux";
import { store } from "./store"; */

import AppLayout from "../common/layouts/AppLayout";
import Footer from "../common/components/Footer";
import Homepage from "../common/pages/Homepage";

const App = () => (
  /*   <Provider store={store}> */
  <AppLayout>
    <Homepage />
    <Footer />
  </AppLayout>

  /*   </Provider> */
);

export default App;
