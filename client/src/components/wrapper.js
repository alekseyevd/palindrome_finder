import { Component } from "../core/component/Component"
import M from 'materialize-css'
import { response } from "./response"
import { http } from "../core/helpers/http"

class Wrapper extends Component {
  constructor(config) {
    super(config)

    this.data = { 
      form: {
        text: '',
        radio: [
          { 
            name: 'algo',
            checked: "checked",
            value: "pmfinder",
            label: 'О(n²)'
          },
          { 
            name: 'algo',
            checked: "",
            value: "manacher",
            label: 'manacher'
          },
        ]
      }
    }
  }

  events() {
    return {
      'input #textarea1' : 'onInput',
      'submit form' : 'onFormSubmit',
      'click #generate' : 'generate'
    }
  }

  onInput(e) {
    
    this.data.form.text = e.target.value
  }

  async generate() {
    try {
      let response = await http.get('/api/generate')
      if (!response.result) throw new Error()

      this.data.form.text = response.text
      this.data.response = null
    } catch (error) {
      this.data.response = response
    }
    
    this.render(this.data)
    M.textareaAutoResize(document.querySelector('#textarea1'));
  }

  async onFormSubmit(e) {
    e.preventDefault()
    let form = new FormData(this.el.querySelector('form'))
    let data = {};
    form.forEach((value, key) => {data[key] = value});

    let res = await http.post(`/api/palindrome`, data)
    this.data.response = res

    //nsole.log(this.data);
    //this.children.forEach(child => child.render(this.data))
    this.render(this.data)
    M.textareaAutoResize(document.querySelector('#textarea1'));
  }
}

export const wrapper = new Wrapper({
  selector: '#wrapper',
  template: `  
      <div class="row">
        <form class="col s12" id="test">
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea" name="text">{{form.text}}</textarea>
              <label for="textarea1" class="active">Type to find palindrome</label>
            </div>
            <p>
              Choose Algorithm
              {{#each form.radio}}
                <label>
                  <input class="with-gap" name="algo" value="{{value}}" type="radio" {{checked}} />
                  <span>{{ label }}</span>
                </label>                
              {{/each}}
            </p>
            <a class="waves-effect waves-light btn" id="generate">Generate text</a> and 
            <button type="submit" class="waves-effect waves-light btn" id="search">try it</button>
          </div>
        </form>
      </div>
      <div><a href="/" >View source on Github</a></div>
      {{#if response}}
        <div id="response">
        </div>
      {{/if}}
     `,
    children: [response]

})