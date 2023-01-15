const listMenuItems = [
  "Nasi ayam",
  "Nasi ikan",
  "Bubur ayam",
  "Bakso",
  "Mie ayam",
  "Rendang",
  "Gado-gado",
];

const isWantToSee = confirm("are you sure to see list menu from us?");

if (isWantToSee) {
  alert("OK, please look");
} else {
  alert("ok, no problem, maybe next time you could see our menu");
  showList.remove();
  appName.remove();
}

function show() {
  document.write(`<h1>List Menu: </h1>`);

  for (let index = 0; index < listMenuItems.length; index++) {
    const menuItem = listMenuItems[index];

    document.write(`<li>${menuItem}</li>`);
  }

  document.write("</ol>");
}
