

var products = [
  
  {
    id: 1,
    name: "itelS23",
    price: 12200,
    color: "black",
    sell: 100,
    
  },
  {
    id: 2,
    name: "mouse",
    price: 400,
    color: "black",
    sell: 60,
    
  },
  {
    id: 3,
    name: "keyboard",
    price: 500,
    color: "black",
    sell: 10,
    
  },
  {
    id: 4,
    name: "pendrive",
    price: 800,
    color: "blue",
    sell: 50,
    
  },
  {
    id: 5,
    name: "ssd",
    price: 2000,
    color: "black",
    sell: 108,
    
  },
  {
    id: 6,
    name: "hdd",
    price: 1000,
    color: "black",
    sell: 18,
    
  },
  {
    id: 7,
    name: "pc",
    price: 30000,
    color: "black",
    sell: 30,
    
  },
  {
    id: 8,
    name: "samsungS23",
    price: 60000,
    color: "gold",
    sell: 100,
    
  },
  {
    id: 9,
    name: "techno",
    price: 15000,
    color: "gray",
    sell: 40,
    
  },
  {
    id: 10,
    name: "symphonyZ70",
    price: 11000,
    color: "black",
    sell: 80,
    
  },
  ]
  
  // console.log(products[6].price)
  
  var search=   "pendrive"  ;
  
  for (var i = 0; i < products.length; i++) {
    
    var product=products[i].name;
    
    if (product==search) {
      console.log(products[i])
    }
    
  }