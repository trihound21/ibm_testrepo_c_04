const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

// Practice task
// You can include prices for all the items in
// breakfastMenu, mainCourseMenu, and dessertMenu.

// For this you can take include the prices as follows:

// const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99',
// 			   'Oatmeal -$21.99', 'Frittata -$15'];

// Then, access it in the similar manner
// and you will see the output for the menu items along with prices as well.

// Restaurant Menu Iteration
// Breakfast Menu
// Item 1: Pancakes - $12
// Item 2: Eggs Benedict - $22.99
// Item 3: Oatmeal - $21.99
// Item 4: Frittata - $15

