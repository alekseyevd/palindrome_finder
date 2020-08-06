import {renderComponent} from './renderComponent'

export function initComponents(root, state) {
  if (!root) throw new Error('Root component is undefined')

  renderComponent(root)

}