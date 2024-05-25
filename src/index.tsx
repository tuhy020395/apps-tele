import { createRoot } from "react-dom/client";
import createRouter from "router5";
import { RouterProvider } from "react-router5";
import browserPlugin from "router5-plugin-browser";
import App from "./App";

const routes = [
  { name: "home", path: "/" },
  { name: "settings", path: "/settings" },
  { name: "about", path: "/about" }
];

const router = createRouter(routes);

router.usePlugin(browserPlugin());

router.start();

const rootElement:any = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
