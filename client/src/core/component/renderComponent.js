export function renderComponent(c) {
  if (c.onInit !== undefined) c.onInit()
  c.render()
  if (c.afterRender !== undefined) c.afterRender()
}