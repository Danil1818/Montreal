window.onload = () => {

  window.onscroll = () => {
    let btnUp = document.querySelector('.up__btn');
    let Y = window.scrollY;
    btnUp.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }

};
