export const loadingPage = (() => {
  return {
    render: () => {
      return `
        <div class="loading">
          <img src="./assets/gifts/Hourglass.gif" alt="gift_loading"/>
        </div>
      `;
    },
    toListeners: () => {}
  }
})();
