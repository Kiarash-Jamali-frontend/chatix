import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { registerSW } from 'virtual:pwa-register'
import "./index.css";

registerSW({
    immediate: false
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/notification-sw.js', {
    scope: '/'
  }).then(registration => {
    console.log('Notification SW registered:', registration.scope);
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
