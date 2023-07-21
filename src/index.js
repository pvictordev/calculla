import { createRoot } from "react-dom/client"
import CalculatorApp from "./CalculatorApp"
import './style.css'

const root = createRoot(document.getElementById("root"))
root.render(
  <CalculatorApp />
)