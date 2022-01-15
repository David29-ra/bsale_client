export const DomHandler = ((root) => ({
  render: (element) => {
    const container = document.querySelector(root);
    container.innerHTML= element.render();
    element.toListeners();
  }
}))();