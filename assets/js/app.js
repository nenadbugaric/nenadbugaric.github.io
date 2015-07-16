var app = {}; // whole application namespace

app.nav = {}; // navigation object

app.nav.state = false; // true if menu is visible

// show/hidde navigation
app.nav.toggleNav = function(){
  
  // set new state (show if hidden and vise versa)
  if(app.nav.state){
    app.nav.state = false;
  } 
  else {
    app.nav.state = true;
  }

  // change button using animation
  app.nav.transformButton(app.nav.state);
  // show/hide menu and change background
  app.nav.transformMenuList(app.nav.state);
};

// animate button from one state to other
app.nav.transformButton = function(newState){
  var btn = document.getElementById('nav-button');
  var first = btn.children[0];
  var middle = btn.children[1];
  var last = btn.children[2];

  // menu to close
  if (newState) {
    first.className = "menu-to-close-first";
    middle.style.background = "none";
    last.className = "menu-to-close-last";
  }
  // close to menu
  else {
    first.className = "";
    middle.style.background = "#fff";
    last.className = "";
  }
};

// show/hide menu list and bg depending of state
app.nav.transformMenuList = function(newState){
  var nav = document.getElementsByTagName('nav')[0];
  var menu = document.getElementsByClassName('nav-list')[0];

  // change bg and show menu
  if ( newState ){
    nav.className = "nav-bg-color";
    menu.className = menu.className + " nav-list-show";
  }
  // set transparent bg and hide menu
  else {
    nav.className = "";
    menu.className = "nav-list";
  }
};

// detect if "esc" is pressed and close nav
document.onkeydown = function (e) {
    e = e || window.event;

    if (app.nav.state) {
      app.nav.toggleNav();
    }
};