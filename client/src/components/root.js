import { Component } from "../core/component/Component";
import { navComponent } from './nav'
import { wrapper } from "./wrapper";

class RootComponent extends Component {
  constructor(config) {
    super(config)
  }
}

export const root = new RootComponent({
  selector: '#app',
  template:  `
    <nav class="teal accent-4"></nav>
    <div id="wrapper" class="container"></div>  
  `,
  children: [
    navComponent,
    wrapper
  ]
})

