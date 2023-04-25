const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false
};


      //Modifiying properties
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = "coffee, strawberry, matcha";

    //Deleting  properties
delete customer.zipCode;
delete customer.favoriteStore;

    //Adding properties
customer["toppings"] = ["chocolate sprinkles", "wafer straws", "gummy bears"];


console.table(customer);