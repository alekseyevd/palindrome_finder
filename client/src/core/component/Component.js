import Handlebars from 'handlebars'

export class Component {
  constructor(config) {
    this.template = config.template
    this.selector = config.selector
    this.children = config.children || []
    this.data = config.data || {}
  }

  render(data = {}) {
    //if (this.el === undefined) 
    this.el = document.querySelector(this.selector)
    if (!this.el) return

    this.data = { ... this.data, ...data}    

    this.el.innerHTML = compileTemplate(this.template, this.data)
    initEvents.call(this)
    this.children.forEach(child => child.render(data))
  }
}

function compileTemplate(tempate, data) {
  if (!data) return tempate

  return Handlebars.compile(tempate)(data)
}

function initEvents() {
  if (this.events === undefined) return

  let events = this.events()

  Object.keys(events).forEach(key => {
    let listener = key.split(' ')

    this.el
      .querySelector(listener[1])
      .addEventListener(listener[0], this[events[key]].bind(this))
  })
}