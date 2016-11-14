"use strict";

// whole application namespace
var app = {};

// navigation module
app.nav = (function() {
  var navigationShown = false;

  var $navigationElements = {
    nav: document.getElementsByTagName('nav')[0],
    menu: document.getElementsByClassName('nav-list')[0],
    buttonLines: { 
      first: document.getElementById('nav-button').children[0], 
      middle: document.getElementById('nav-button').children[1], 
      last: document.getElementById('nav-button').children[2]
    }
  };

  function toggleNav() {
    navigationShown = !navigationShown;

    transformButtonLookToHamburgerOrClose();
    transformNavigationMenuLooks();
  };

  function closeNav() {
    navigationShown = false;
    toggleNav();
  }

  function isNavigationShown() {
    return navigationShown;
  }

  function transformButtonLookToHamburgerOrClose() {
    if (isNavigationShown()) {
      transformToCloseButton();
    } else {
      transformToHamburgerButton();
    }
  };

  function transformToCloseButton() {
    $navigationElements.buttonLines.first.className = "menu-to-close-first";
    $navigationElements.buttonLines.middle.style.background = "none";
    $navigationElements.buttonLines.last.className = "menu-to-close-last";
  }

  function transformToHamburgerButton() {
    $navigationElements.buttonLines.first.className = "";
    $navigationElements.buttonLines.middle.style.background = "#fff";
    $navigationElements.buttonLines.last.className = "";
  }

  function transformNavigationMenuLooks() {
    if (isNavigationShown()){
      transformNavStyleForOpenedNav();
    } else {
      transformNavStyleForClosedNav();
    }
  };

  function transformNavStyleForOpenedNav() {
    $navigationElements.nav.className = "nav-bg-color";
    $navigationElements.menu.className = $navigationElements.menu.className + " nav-list-show";
  };

  function transformNavStyleForClosedNav() {
    $navigationElements.nav.className = "";
    $navigationElements.menu.className = "nav-list";
  };

  return {
    toggleNav: toggleNav,
    isNavigationShown: isNavigationShown
  };
}());

document.onkeydown = function (e) {
    e = e || window.event;
    
    if (e.key === "Escape" && app.nav.isNavigationShown()) {
      app.nav.toggleNav();
    }
};