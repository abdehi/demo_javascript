const listMenu = [
  "Nasi ayam",
  "Nasi ikan",
  "Bubur ayam",
  "Bakso",
  "Mie ayam",
  "Rendang",
  "Gado-gado",
];

if (confirm("are you sure to see list menu from us?")) {
  alert("OK, please look");
  function show() {
    document.write(`<h1>Daftar Menu: </h1>`);

    for (let index = 0; index < listMenu.length; index++) {
      document.write(`<li>${listMenu[index]}</li>`);
    }

    document.write("</ol>");
  }
} else {
  alert("ok, no problem, maybe next time you could see our menu");
  output.remove();
  toggle.remove();
}
