async function getData() {
  const response = await fetch("http://localhost:3000/albums");
  if (response.ok) {
    return await response.json();
  } else {
    return [];
  }
}

function cloneTemplate(id) {
  return document.getElementById(id).content.cloneNode(true);
}

function getObserver(root, cb = () => {}) {
  const options = {
      root: root,
      rootMargin: "0px",
      threshold: 0,
    },
    callBack = (entries, observer) => {
      const [row] = entries,
        { isIntersecting } = row;

      if (!isIntersecting) return;

      cb();

      observer.disconnect();
    };

  return new IntersectionObserver(callBack, options);
}
/**
 * Sets the value of a CSS property
 * @param {string} prop What CSS property do we want to set
 * @param {string} value The new value of the CSS property
 */
function setCssProperty(prop, value) {
  document.documentElement.style.setProperty(prop, value);
}

function addRowsToGrid(grid, data) {}

export { getData, cloneTemplate, getObserver, setCssProperty, addRowsToGrid };
