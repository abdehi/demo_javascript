// const listMenuItems = [
//   "Nasi ayam",
//   "Nasi ikan",
//   "Bubur ayam",
//   "Bakso",
//   "Mie ayam",
//   "Rendang",
//   "Gado-gado",
// ];

// const isWantToSee = confirm("are you sure to see list menu from us?");

// if (isWantToSee) {
//   alert("OK, please look");
// } else {
//   alert("ok, no problem, maybe next time you could see our menu");
//   showList.remove();
//   appName.remove();
// }

// function show() {
//   document.write(`<h1>List Menu: </h1>`);

//   for (let index = 0; index < listMenuItems.length; index++) {
//     const menuItem = listMenuItems[index];

//     document.write(`<li>${menuItem}</li>`);
//   }

//   document.write("</ol>");
// }

const calcAverage = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins menang (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas menang (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("Tidak ada pemenang.");
  }
};

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
checkWinner(avgDolphins1, avgKoalas1);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);
