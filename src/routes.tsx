import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import PrivacyPolicy from "./pages/privacy-policy"
import TermsOfService from "./pages/terms-of-service"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-service",
    element: <TermsOfService />,
  },
]) 