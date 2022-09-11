// Restaurant Manager

class restaurantManager {
    constructor(restaurantList) {
      this.restaurantList = restaurantList;
    }
  
    printAllRestaurantNames() {
      let restaurantListonconsole = [];
      for (let i = 0; i < this.restaurantList.length; i++) {
        restaurantListonconsole.push(this.restaurantList[i].name);
      }
      return `Printing all Restaurants Name:- ${restaurantListonconsole}`;
    }
  
    filterRestaurantByCity(cityName) {
      return this.restaurantList.filter((obj) => obj.city == cityName);
    }
  }
  
  var restaurantList = [
    { name: "saravanabavan", address: "raja street", city: "cbe" },
    { name: "annpoorna", address: "n02-ramnagar", city: "trichy" },
    { name: "A2B", address: "mainbazzar", city: "karur" },
    { name: "thalapakatti", address: "charringcross", city: "ooty" },
  ];

//   Resturant city
  const Restaurant = new restaurantManager(restaurantList);
  console.log(Restaurant.printAllRestaurantNames());
  console.log(Restaurant.filterRestaurantByCity("trichy"));
  console.log(Restaurant.filterRestaurantByCity("karur"));
  console.log(Restaurant.filterRestaurantByCity("ooty"));
  
  
  
  //2. 
  console.log("\n\n\n");
  const orderData = {
    "Below 500": 20,
    "500-1000": 29,
    "1000-1500": 30,
    "1500-2000": 44,
    "Above 2000": 76,
  };
  
  //a. 
  var totalOrderPlaced = 0;
  const totalOrderArray = Object.values(orderData);
  for (let i = 0; i < totalOrderArray.length; i++) {
    totalOrderPlaced += totalOrderArray[i];
  }
  console.log(`Total number of orders placed = ${totalOrderPlaced}`);
  
  //b. 
  const proportion = Object.keys(orderData).length;
  console.log(`Total number of order proportions = ${proportion}`);
  
  //c. 
  
  var outputArray = [];
  var idd = 1;
  for (let i in orderData) {
    let o = new Object();
  
    //id
    o.id = idd;
    idd += 1;
  
    //order
    o.order = i;
  
    //order-percentages
    let ans = (orderData[i] * 100) / totalOrderPlaced;
    o["order percentage"] = ans.toFixed(2);
  
    //restaurant
    o.restaurant = "Punjabi Tadka";
    outputArray.push(o);
  }
  console.log("Array of Objects :-");
  for (let i = 0; i < outputArray.length; i++) {
    console.log(outputArray[i]);
  }