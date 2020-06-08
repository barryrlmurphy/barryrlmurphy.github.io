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

var navItems = document.getElementsByClassName('nav-item');
console.log(navItems);
navItems.addEventListener('click', selectNavItem);

function selectNavItem() {
  console.log('selectNavItem()');
  console.log(selectedItem);
}
