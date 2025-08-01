// function resetHtmlFontsize(){
//     document.documentElement.style.fontSize =screen.width / 100 + 'px';
// }
function hoverappear(id){
    document.getElementById(id).classList.add("active")
}
function outdisappear(id){
    document.getElementById(id).classList.remove('active')
}
function resetHtmlFontsize() {
  const baseSize = 16;
  const designWidth = 1920;
  const scale = document.documentElement.clientWidth / designWidth;
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}