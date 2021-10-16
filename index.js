async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (response.ok) {
    return await response.json();
  } else {
    return [];
  }
}

function cloneTemplate(id) {
  return document.getElementById(id).content.cloneNode(true);
}

function getObserver(
  root,
  cb = () => {
    console.log("default");
  }
) {
  const options = {
      root: root,
      rootMargin: "0px",
      threshold: 1.0,
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

export { getData, cloneTemplate, getObserver };
