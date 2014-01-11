var UI = (function(document) {
  var siteMenu;
  return {
    Init : function() {
      siteMenu = document.querySelector('#site-menu');

      var toggleElement = document.querySelector('#menu-toggle');
      toggleElement.addEventListener('click',function() {
        var state = siteMenu.getAttribute("data-popup");

        if ( state == "false" ) {
          state = "true";
        } else {
          state = "false";
        }

        siteMenu.setAttribute("data-popup", state);
      });
    }
  };

})(document);

document.addEventListener( "DOMContentLoaded", UI.Init, false );