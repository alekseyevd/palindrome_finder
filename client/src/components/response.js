import { Component } from "../core/component/Component"

class Response extends Component {
  constructor(config) {
    super(config)
  }

  onInit() {
    console.log(this.data);
  }
}

export const response = new Response({
  selector: '#response',
  template: `
    <div class="card lime lighten-5">
      <div class="card-content">
        {{#if response.result }}
          <p><b>Origin</b>: {{response.origin }}</p>
          <p><b>Max palindrome</b>: {{response.max }} </p>
          <p><b>All palindromes</b>:</p>
          <ul>
            {{#each response.all}}
              <li>{{this}}</li>
            {{/each}}
          </ul>
          <p><b>time</b>: {{response.time}}ms</p>
          
          
        {{else }}
          <div class=" darken-4">{{ response.message }}</div>
        {{/if}}
      </div>
    </div>
  `
})