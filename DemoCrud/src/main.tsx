import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store/reduxStore";
import { Provider } from "react-redux";
 
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}> 
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
);
