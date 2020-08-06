import { Component } from "../core/component/Component";

export const navComponent = new Component({
  selector: 'nav',
  template: `
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo">Palindrome finder</a>
    </div>
  `
})
