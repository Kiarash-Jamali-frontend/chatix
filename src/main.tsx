import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { registerSW } from 'virtual:pwa-register'
import "./index.css";

registerSW({
    immediate: false
})

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
