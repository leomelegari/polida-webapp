import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyle from "./styles/global"

function App() {

  return (
    <>
      <Routes />
      <ToastContainer position="top-center" />
      <GlobalStyle />
    </>
  );
}

export default App;
