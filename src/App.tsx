import { BrowserRouter } from "react-router-dom";
import ReactQueryProvider from "./reactQuery/ReactQueryProvider";
import MainRouter from "./router";
import "./App.css";

function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ReactQueryProvider>
  );
}

export default App;
