//there is a bug in NAV help. When users uses the search feature the result window is not resized and content gets cut off.
//This code resizes the iframe when search is loaded into it, needs to be included in search.aspx with this line
//<script type="text/javascript" src="/js/customLsRetail.js"></script>
document.addEventListener("DOMContentLoaded", function(event) {
  parent.resizeHelpContentIFrame();
});