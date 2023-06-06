interface Dessert {
  id: number;
  name: string;
  calories: number;
  price: number;
  description: string;
  imageURL: string;
}

const desserts: Dessert[] = [
  {
    id: 1,
    name: "Chocolate Cake",
    calories: 350,
    price: 9.99,
    description: "Moist chocolate cake",
    imageURL: "/images/Chocolate_Cake.jpg",
  },
  {
    id: 2,
    name: "Apple Pie",
    calories: 250,
    price: 7.99,
    description: "Classic apple pie",
    imageURL: "/images/Apple_Pie.jpg",
  },
  {
    id: 3,
    name: "Cheesecake",
    calories: 400,
    price: 8.99,
    description: "Creamy and rich cheesecake",
    imageURL: "/images/Cheesecake.jpg",
  },
  {
    id: 4,
    name: "Tiramisu",
    calories: 320,
    price: 10.99,
    description: "Layered coffee-flavored",
    imageURL: "/images/Tiramisu.jpg",
  },
  {
    id: 5,
    name: "Lemon Tart",
    calories: 280,
    price: 6.99,
    description: "Tangy and refreshing",
    imageURL: "/images/Lemon_Tart.jpg",
  },
  {
    id: 6,
    name: "Red Velvet Cupcakes",
    calories: 200,
    price: 5.99,
    description: "Decadent red velvet cupcakes",
    imageURL: "/images/Red_Velvet_Cupcakes.jpg",
  },
  {
    id: 7,
    name: "Ice Cream Sundae",
    calories: 320,
    price: 7.99,
    description: "Classic ice cream treat",
    imageURL: "/images/Ice_Cream_Sundae.jpg",
  },
  {
    id: 8,
    name: "Panna Cotta",
    calories: 180,
    price: 9.99,
    description: "Smooth Italian dessert",
    imageURL: "/images/Panna_Cotta.jpg",
  },
  {
    id: 9,
    name: "Creme Brulee",
    calories: 350,
    price: 8.99,
    description: "Creamy custard with caramelized sugar topping",
    imageURL: "/images/Creme_Brulee.jpg",
  },
  {
    id: 10,
    name: "Key Lime Pie",
    calories: 280,
    price: 7.99,
    description: "Tart and creamy lime filling",
    imageURL: "/images/Key_Lime_Pie.jpg",
  },
  {
    id: 11,
    name: "Chocolate Mousse",
    calories: 220,
    price: 6.99,
    description: "Light and fluffy chocolate mousse",
    imageURL: "/images/Chocolate_Mousse.jpg",
  },
  {
    id: 12,
    name: "Baklava",
    calories: 320,
    price: 9.99,
    description: "Sweet pastry filled with nuts",
    imageURL: "/images/Baklava.jpg",
  },
  {
    id: 13,
    name: "Strawberry Shortcake",
    calories: 240,
    price: 6.99,
    description: "Layers of cake, strawberries, and cream",
    imageURL: "/images/Strawberry_Shortcake.jpg",
  },
  {
    id: 14,
    name: "Mango Sorbet",
    calories: 150,
    price: 5.99,
    description: "Refreshing tropical sorbet",
    imageURL: "/images/Mango_Sorbet.jpg",
  },
];

export default desserts;
