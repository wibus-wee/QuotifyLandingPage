import { createHashRouter } from "react-router-dom"
import App from "./App"
import PrivacyPolicy from "./pages/privacy-policy"
import TermsOfService from "./pages/terms-of-service"
import RefundPolicy from "./pages/refund-policy"

export const router = createHashRouter([
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
  {
    path: "/refund-policy",
    element: <RefundPolicy />,
  },
]) 