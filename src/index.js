import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./app";
import { StrictMode } from "react";

const element = document.getElementById("root");

let __JSS_STATE__ = null;
const ssrRawJson = document.getElementById("__JSS_STATE__");
if (ssrRawJson) {
  __JSS_STATE__ = JSON.parse(ssrRawJson.innerHTML);
}

if (__JSS_STATE__) {
  console.log("server side rendered already");
  // SSR hydrate
  hydrateRoot(
    element,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.log("freshly rendering on client side");
  // CSR
  const root = createRoot(element);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
