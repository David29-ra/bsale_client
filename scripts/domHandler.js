export const DomHandler = (() => ({
  render: (root, element) => {
    const container = document.querySelector(root);
    container.innerHTML= element.render();
    element.toListeners();
  }
}))();