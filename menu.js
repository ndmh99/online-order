// Menu data for VAN 168 COFFEE
// You can add, remove, or edit menu items here
const MENU = [
    {
        id: 1,
        name: "1. Cappuccino",
        desc: "Espresso with steamed milk and foam.",
        img: "https://images.pexels.com/photos/533393/pexels-photo-533393.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 3.5 },
            { size: "Large", price: 4.5 }
        ]
    },
    {
        id: 2,
        name: "2. Iced Latte",
        desc: "Chilled espresso with milk and ice.",
        img: "https://images.pexels.com/photos/4921559/pexels-photo-4921559.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 4.0 },
            { size: "Large", price: 5.0 }
        ]
    },
    {
        id: 3,
        name: "3. Croissant",
        desc: "Buttery, flaky pastry.",
        img: "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 2.2 },
            { size: "Large", price: 3.2 }
        ]
    },
    {
        id: 4,
        name: "4. Egg Sandwich",
        desc: "Egg, cheese, and ham on a fresh bun.",
        img: "https://images.pexels.com/photos/5848091/pexels-photo-5848091.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 3.0 },
            { size: "Large", price: 4.0 }
        ]
    },
    {
        id: 5,
        name: "5. Vietnamese Iced Coffee",
        desc: "Strong coffee with sweetened condensed milk over ice.",
        img: "https://images.pexels.com/photos/30471542/pexels-photo-30471542/free-photo-of-delicious-iced-coffee-drinks-on-wooden-tray-in-dalat.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 4.0 },
            { size: "Large", price: 5.0 }
        ]
    },
    {
        id: 6,
        name: "6. Matcha Latte",
        desc: "Creamy latte with premium matcha green tea.",
        img: "https://images.pexels.com/photos/8004570/pexels-photo-8004570.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 4.5 },
            { size: "Large", price: 5.5 }
        ]
    },
    {
        id: 7,
        name: "7. Chai Tea",
        desc: "Spiced black tea with steamed milk.",
        img: "https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        sizes: [
            { size: "Small", price: 3.8 },
            { size: "Large", price: 4.8 }
        ]
    },
    {
        id: 8,
        name: "8. Blueberry Muffin",
        desc: "Moist muffin loaded with blueberries.",
        img: "https://images.pexels.com/photos/18955551/pexels-photo-18955551/free-photo-of-a-cupcake-with-blueberry-frosting.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 2.5 },
            { size: "Large", price: 3.5 }
        ]
    },
    {
        id: 9,
        name: "9. Chocolate Croissant",
        desc: "Flaky croissant filled with chocolate.",
        img: "https://images.pexels.com/photos/4828276/pexels-photo-4828276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        sizes: [
            { size: "Small", price: 2.8 },
            { size: "Large", price: 3.8 }
        ]
    },
    {
        id: 10,
        name: "10. Avocado Toast",
        desc: "Sourdough toast topped with smashed avocado and spices.",
        img: "https://images.pexels.com/photos/2067423/pexels-photo-2067423.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 4.2 },
            { size: "Large", price: 5.2 }
        ]
    },
    {
        id: 11,
        name: "11. Caramel Macchiato",
        desc: "Espresso with vanilla, milk, and caramel drizzle.",
        img: "https://images.pexels.com/photos/14119654/pexels-photo-14119654.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 4.3 },
            { size: "Large", price: 5.3 }
        ]
    },
    {
        id: 12,
        name: "12. Lemon Tart",
        desc: "Tangy lemon curd in a crisp pastry shell.",
        img: "https://images.pexels.com/photos/69898/pexels-photo-69898.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 3.0 },
            { size: "Large", price: 4.0 }
        ]
    },
    {
        id: 13,
        name: "13. Iced Americano",
        desc: "Espresso with cold water and ice.",
        img: "https://images.pexels.com/photos/12900860/pexels-photo-12900860.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 3.0 },
            { size: "Large", price: 4.0 }
        ]
    },
    {
        id: 14,
        name: "14. Turkey Club Sandwich",
        desc: "Turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
        img: "https://images.pexels.com/photos/16845663/pexels-photo-16845663/free-photo-of-toasted-sandwiches-and-dip.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Small", price: 5.5 },
            { size: "Large", price: 6.5 }
        ]
    },
    {
        id: 15,
        name: "15. Espresso Shot",
        desc: "Rich, concentrated coffee shot.",
        img: "https://images.pexels.com/photos/18715887/pexels-photo-18715887/free-photo-of-close-up-of-pouring-coffee-to-cup.jpeg?auto=compress&cs=tinysrgb&w=800",
        sizes: [
            { size: "Single", price: 2.0 },
            { size: "Double", price: 3.0 }
        ]
    },
];
