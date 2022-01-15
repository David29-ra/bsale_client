export const DomHandler = (() => ({
  render: (element) => {
    const container = document.querySelector(".root");
    container.innerHTML= element.render();
    element.toListeners();
  }
}))();