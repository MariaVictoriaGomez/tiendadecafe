
const windowHandleScroll = () => {
    const { y } = document.body.getBoundingClientRect();
 
    const header = document.getElementById('header'); 
 
    const opacity = 100 + y;
    header.style.opacity = `${opacity}%`;
    header.style.visibility = opacity < 0 ? 'hidden' : 'visible';
 
    const arrowOpacity = 0 - y;
    arrow.style.opacity = `${arrowOpacity}%`; 
    arrow.style.visibility = arrowOpacity > 0 ? 'visible' : 'hidden';
 };