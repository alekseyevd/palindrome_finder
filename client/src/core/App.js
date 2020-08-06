import {initComponents} from './component/initComponents'

export default class App {
  constructor(config) {
    this.rootComponent = config.rootComponent
  }

  start() {
    initComponents(this.rootComponent)
  }
}