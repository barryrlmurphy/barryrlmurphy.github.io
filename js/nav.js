var sideMenuOpen = false;
function toggleSideMenu() {
  sideMenuOpen ? closeNav() : openNav();
}

function openNav() {
  sideMenuOpen = true;
  document.getElementById('mySidenav').style.width = '200px';
}

function closeNav() {
  sideMenuOpen = false;
  document.getElementById('mySidenav').style.width = '0';
}

function updateNav(navItem) {
  removeSelectedNav();
  removeSelectedNav();
  document.getElementById(navItem + '-v').className += ' nav-item-selected';
  document.getElementById(navItem + '-h').className += ' nav-item-selected';
}

function removeSelectedNav() {
  var current = document.getElementsByClassName('nav-item-selected');
  current[0].className = current[0].className.replace('nav-item-selected', '');
}
