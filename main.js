function scrollToElement(pointElement){
  let elementToScroll = document.getElementById(pointElement);
  elementToScroll.scrollIntoView({
    behavior: 'smooth',
    block:'start',
  });
}