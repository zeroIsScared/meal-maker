const menu = {
  _courses: {
      _appetizers:[],
      _mains:[],
      _desserts:[],

      get appetizers() {
        return this._appetizers;
      },
      get mains() {
        return this._mains;
      },
      get desserts() {
        return this._desserts;
      },
      set appetizers(appetizerIn) {
        this._appetizers = appetizerIn;
      },
      set mains(mainIn) {
        this._mains = mainIn;
      },
      set desserts(dessertIn) {
        this._desserts = dessertIn;
      },
   },
  

  get courses () {
      return {
        appetizers: this._courses.appetizersIn,
        mains: this._courses.mainsIn,
        desserts: this._courses.dessertsIn,
      };
  },

  addDishToCourse  (courseName, dishName, dishPrice) 
  {
    const  dish = {
        name: dishName,
        price: dishPrice,
     };

     this._courses[courseName].push(dish);
 },

  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    i = Math.floor(Math.random() * dishes.length);
    return dishes[i];
  },

  generateRandomMeal () {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let total = appetizer.price + main.price + dessert.price;

    return `Today's meal contains the following dishes:
    ${appetizer.name} -which cost is ${appetizer.price} MDL;
    ${main.name} - which cost is ${main.price} MDL;
    ${dessert.name} -which cost is ${dessert.price} MDL;
    Total price of the meal is: ${total} MDL.`
  },
};

menu.addDishToCourse ('appetizers', 'Cesar', 60);
menu.addDishToCourse ('appetizers', 'Bruschete', 30);
menu.addDishToCourse ('appetizers', 'Shopskii', 75);
menu.addDishToCourse ('mains', 'Pork Steak', 175);
menu.addDishToCourse ('mains', 'Salmon Steak', 200);
menu.addDishToCourse ('mains', 'Pork Ribs', 150);
menu.addDishToCourse ('desserts', 'Brownie', 50);
menu.addDishToCourse ('desserts', 'Ice Cream', 45);
menu.addDishToCourse ('desserts', 'Cheesecake', 65);


console.log(menu.generateRandomMeal());