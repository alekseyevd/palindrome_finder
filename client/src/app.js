import App from './core/App'
import { root } from "./components/root"

const app = new App({
  rootComponent: root,
  state: "initial"
})

export default app