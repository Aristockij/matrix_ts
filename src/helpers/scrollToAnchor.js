// import header from '@components/header/header';

function scrollTo(targetElement) {
  const element = document.querySelector(targetElement);
  const headerOffset = 110;

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    // const offsetPosition = elementPosition + window.pageYOffset;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    // console.log(elementPosition);
    history.pushState({}, "", targetElement);
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export const init = (closeMenuCallback) => {
  document.querySelectorAll(".js-to-anchor").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      console.log(e);

      const id = e.currentTarget.getAttribute("href");

      // console.log(id);
      // header.close()

      setTimeout(() => {
        scrollTo(id);
        closeMenuCallback();
      }, 500);
    });
  });
};
