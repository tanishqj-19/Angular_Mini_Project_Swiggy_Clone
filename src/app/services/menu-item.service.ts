import { Injectable } from '@angular/core';
import { MenuItem } from '../menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor() { }

  private menuItems: MenuItem[] = [
    

    { 
      id: 1, 
      restaurantId: 1, 
      name: 'Veg Supreme Pizza', 
      description: 'Serves 1 | An ultimate combination of your favourite veggies - onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo.', 
      price: 159, 
      icon: 'nonveg.png', 
      rating: 3.9, 
      numberOfRatings: 10, 
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fc115b57-9536-4c2d-8876-bcedf630ea7b_b7818aa0-4ccb-4cfa-acb5-df7a9cace4e5.png_compressed' // Path to the item image
  },
  { 
      id: 2, 
      restaurantId: 1, 
      name: 'Pepperoni Pizza', 
      description: 'Serves 1 | Topped with pepperoni and cheese, perfect for meat lovers.', 
      price: 310, 
      icon: 'veg.png', 
      rating: 4.6, 
      numberOfRatings: 25, 
      imageUrl: 'pizza1.jpg' 
  },
  { 
      id: 3, 
      restaurantId: 1, 
      name: 'Margherita Pizza', 
      description: 'Serves 1 | Classic Margherita topped with fresh basil, mozzarella, and a hint of olive oil.', 
      price: 260, 
      icon: 'veg.png', 
      rating: 4.1, 
      numberOfRatings: 40, 
      imageUrl: 'pizza2.jpg' 
  },
  { 
      id: 4, 
      restaurantId: 1, 
      name: 'BBQ Chicken Pizza', 
      description: 'Serves 1 | Juicy chicken pieces smothered in BBQ sauce, red onions, and cheese.', 
      price: 419, 
      icon: 'nonveg.png',
      rating: 4.0, 
      numberOfRatings: 5, 
      imageUrl: 'pizza3.jpg' 
  },
  { 
      id: 5, 
      restaurantId: 1, 
      name: 'Veggie Lovers Pizza', 
      description: 'Serves 1 | Loaded with a variety of fresh vegetables and cheese.', 
      price: 259, 
      icon: 'veg.png', 
      rating: 4.4, 
      numberOfRatings: 35, 
      imageUrl: 'pizza4.jpg'
  },
  { 
      id: 6, 
      restaurantId: 1, 
      name: 'Four Cheese Pizza', 
      description: 'Serves 1 | A decadent mix of mozzarella, cheddar, gorgonzola, and parmesan.', 
      price: 419, 
      icon: 'nonveg.png', 
      rating: 4.6, 
      numberOfRatings: 25, 
      imageUrl: 'pizza5.jpg' 
  },
 
  { 
      id: 7, 
      restaurantId: 1, 
      name: 'Hawaiian Pizza', 
      description: 'Serves 1 | A delicious blend of ham, pineapple, and cheese.', 
      price: 500, 
      icon: 'nonveg.png', 
      rating: 4.1, 
      numberOfRatings: 15, 
      imageUrl: 'pizza6.jpg'
  },
  { 
      id: 8, 
      restaurantId: 1, 
      name: 'Baccon Pizza', 
      description: 'Serves 1 | Spicy buffalo chicken with blue cheese and celery.', 
      price: 569, 
      icon: 'nonveg.png', 
      rating: 1.0, 
      numberOfRatings: 2, 
      imageUrl: 'pizza7.jpg'
  },
  { 
      id: 9, 
      restaurantId: 1, 
      name: 'Spinach and Feta Pizza', 
      description: 'Serves 1 | Fresh spinach, feta cheese, and a hint of garlic.', 
      price: 367, 
      icon: 'veg.png', 
      rating: 4.2, 
      numberOfRatings: 15, 
      imageUrl: 'pizza8.jpg'
  },
  { 
      id: 10, 
      restaurantId: 1, 
      name: 'Pesto Veggie Pizza', 
      description: 'Serves 1 | Topped with pesto, artichokes, and fresh veggies.', 
      price: 299, 
      icon: 'veg.png', 
      rating: 4.5, 
      numberOfRatings: 12, 
      imageUrl: 'pizza1.jpg'
  },
  { 
      id: 11, 
      restaurantId: 1, 
      name: 'Meat Lovers Pizza', 
      description: 'Serves 1 | A carnivore’s dream with multiple meat toppings.', 
      price: 199, 
      icon: 'nonveg.png', 
      rating: 4.2, 
      numberOfRatings: 3, 
      imageUrl: 'pizza10.jpg'
  }
  ,
  { 
    id: 1, 
    restaurantId: 2, 
    name: 'Fettuccine Alfredo', 
    description: 'Serves 1 | Creamy pasta with parmesan and spices.', 
    price: 359, 
    icon: 'nonveg.png', 
    rating: 4.2, 
    numberOfRatings: 10, 
    imageUrl: 'bg1.jpg' 
},
{ 
    id: 2, 
    restaurantId: 2, 
    name: 'Garden Salad', 
    description: 'Serves 1 | A fresh mix of seasonal veggies with a light dressing.', 
    price: 69, 
    icon: 'veg.png', 
    rating: 4.0, 
    numberOfRatings: 10, 
    imageUrl: 'bg2.jpg' 
},
{ 
    id: 3, 
    restaurantId: 2, 
    name: 'Lasagna', 
    description: 'Serves 1 | Layered pasta with meat and cheese.', 
    price: 149, 
    icon: 'nonveg.png', 
    rating: 4.5, 
    numberOfRatings: 13, 
    imageUrl: 'bg3.jpg' 
},
{ 
    id: 4, 
    restaurantId: 2, 
    name: 'Caesar Salad', 
    description: 'Serves 1 | Romaine lettuce with Caesar dressing and croutons.', 
    price: 79, 
    icon: 'veg.png', 
    rating: 4.4, 
    numberOfRatings: 12, 
    imageUrl: 'bg4.jpg' 
},
{ 
    id: 5, 
    restaurantId: 2, 
    name: 'Spaghetti Bolognese', 
    description: 'Serves 1 | Classic spaghetti with a rich meat sauce.', 
    price: 199, 
    icon: 'nonveg.png', 
    rating: 4.6, 
    numberOfRatings: 18, 
    imageUrl: 'bg5.jpg' 
},
{ 
    id: 6, 
    restaurantId: 2, 
    name: 'Bruschetta', 
    description: 'Serves 1 | Toasted bread topped with fresh tomatoes and basil.', 
    price: 599, 
    icon: 'veg.png', 
    rating: 4.4, 
    numberOfRatings: 10, 
    imageUrl: 'bg6.jpg' 
},
{ 
    id: 7, 
    restaurantId: 2, 
    name: 'Pesto Pasta', 
    description: 'Serves 1 | Pasta tossed in homemade pesto sauce.', 
    price: 239, 
    icon: 'nonveg.png', 
    rating: 4.7, 
    numberOfRatings: 20, 
    imageUrl: 'bg7.jpg' 
},
{ 
    id: 8, 
    restaurantId: 2, 
    name: 'Minestrone Soup', 
    description: 'Serves 1 | Hearty vegetable soup with pasta.', 
    price: 209, 
    icon: 'veg.png', 
    rating: 4.1, 
    numberOfRatings: 15, 
    imageUrl: 'bg8.jpg' 
},
{ 
    id: 9, 
    restaurantId: 2, 
    name: 'Fettuccine Alfredo', 
    description: 'Serves 1 | Creamy pasta with parmesan and spices.', 
    price: 219, 
    icon: 'nonveg.png', 
    rating: 4.2, 
    numberOfRatings: 20, 
    imageUrl: 'bg1.jpg' 
},
{ 
    id: 10, 
    restaurantId: 2, 
    name: 'Garden Salad', 
    description: 'Serves 1 | A fresh mix of seasonal veggies with a light dressing.', 
    price: 109, 
    icon: 'veg.png', 
    rating: 4.0, 
    numberOfRatings: 10, 
    imageUrl: 'bg2.jpg' 
},
{ 
    id: 11, 
    restaurantId: 2, 
    name: 'Lasagna', 
    description: 'Serves 1 | Layered pasta with meat and cheese.', 
    price: 299, 
    icon: 'nonveg.png', 
    rating: 4.5, 
    numberOfRatings: 15, 
    imageUrl: 'bg3.jpg' 
},
{ 
    id: 12, 
    restaurantId: 2, 
    name: 'Caesar Salad', 
    description: 'Serves 1 | Romaine lettuce with Caesar dressing and croutons.', 
    price: 99, 
    icon: 'veg.png', 
    rating: 4.3, 
    numberOfRatings: 12, 
    imageUrl: 'bg4.jpg' 
},

//3
{ 
      id: 1, 
      restaurantId: 1, 
      name: 'Veg Supreme Pizza', 
      description: 'Serves 1 | An ultimate combination of your favourite veggies - onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo.', 
      price: 499, 
      icon: 'nonveg.png', 
      rating: 3.8, 
      numberOfRatings: 14, 
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fc115b57-9536-4c2d-8876-bcedf630ea7b_b7818aa0-4ccb-4cfa-acb5-df7a9cace4e5.png_compressed' // Path to the item image
  },
  { 
      id: 2, 
      restaurantId: 1, 
      name: 'Pepperoni Pizza', 
      description: 'Serves 1 | Topped with pepperoni and cheese, perfect for meat lovers.', 
      price: 299, 
      icon: 'veg.png', 
      rating: 4.5, 
      numberOfRatings: 20, 
      imageUrl: 'pizza1.jpg' 
  },
  { 
      id: 3, 
      restaurantId: 1, 
      name: 'Margherita Pizza', 
      description: 'Serves 1 | Classic Margherita topped with fresh basil, mozzarella, and a hint of olive oil.', 
      price: 289, 
      icon: 'veg.png', 
      rating: 4.2, 
      numberOfRatings: 18, 
      imageUrl: 'pizza2.jpg' 
  },
  { 
      id: 4, 
      restaurantId: 1, 
      name: 'BBQ Chicken Pizza', 
      description: 'Serves 1 | Juicy chicken pieces smothered in BBQ sauce, red onions, and cheese.', 
      price: 379, 
      icon: 'nonveg.png',
      rating: 4.7, 
      numberOfRatings: 25, 
      imageUrl: 'pizza3.jpg' 
  },
  { 
      id: 5, 
      restaurantId: 1, 
      name: 'Veggie Lovers Pizza', 
      description: 'Serves 1 | Loaded with a variety of fresh vegetables and cheese.', 
      price: 249, 
      icon: 'veg.png', 
      rating: 4.3, 
      numberOfRatings: 22, 
      imageUrl: 'pizza4.jpg'
  },
  { 
      id: 6, 
      restaurantId: 1, 
      name: 'Four Cheese Pizza', 
      description: 'Serves 1 | A decadent mix of mozzarella, cheddar, gorgonzola, and parmesan.', 
      price: 249, 
      icon: 'nonveg.png', 
      rating: 4.6, 
      numberOfRatings: 17, 
      imageUrl: 'pizza5.jpg' 
  },
 
  { 
      id: 7, 
      restaurantId: 1, 
      name: 'Hawaiian Pizza', 
      description: 'Serves 1 | A delicious blend of ham, pineapple, and cheese.', 
      price: 299, 
      icon: 'nonveg.png', 
      rating: 4.1, 
      numberOfRatings: 15, 
      imageUrl: 'pizza6.jpg'
  },
  { 
      id: 8, 
      restaurantId: 1, 
      name: 'Buffalo Chicken Pizza', 
      description: 'Serves 1 | Spicy buffalo chicken with blue cheese and celery.', 
      price: 299, 
      icon: 'nonveg.png', 
      rating: 4.4, 
      numberOfRatings: 19, 
      imageUrl: 'pizza7.jpg'
  },
  { 
      id: 9, 
      restaurantId: 1, 
      name: 'Spinach and Feta Pizza', 
      description: 'Serves 1 | Fresh spinach, feta cheese, and a hint of garlic.', 
      price: 259, 
      icon: 'veg.png', 
      rating: 4.0, 
      numberOfRatings: 10, 
      imageUrl: 'pizza8.jpg'
  },
  { 
      id: 10, 
      restaurantId: 1, 
      name: 'Pesto Veggie Pizza', 
      description: 'Serves 1 | Topped with pesto, artichokes, and fresh veggies.', 
      price: 399, 
      icon: 'veg.png', 
      rating: 4.5, 
      numberOfRatings: 12, 
      imageUrl: 'pizza1.jpg'
  },
  { 
      id: 11, 
      restaurantId: 1, 
      name: 'Meat Lovers Pizza', 
      description: 'Serves 1 | A carnivore’s dream with multiple meat toppings.', 
      price: 489, 
      icon: 'nonveg.png', 
      rating: 4.8, 
      numberOfRatings: 30, 
      imageUrl: 'pizza10.jpg'
  }
  ,
  
    { 
      id: 1, 
      restaurantId: 3, 
      name: 'Veg Supreme Pizza', 
      description: 'Serves 1 | An ultimate combination of your favourite veggies - onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo.', 
      price: 259, 
      icon: 'nonveg.png', 
      rating: 3.7, 
      numberOfRatings: 14, 
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fc115b57-9536-4c2d-8876-bcedf630ea7b_b7818aa0-4ccb-4cfa-acb5-df7a9cace4e5.png_compressed'
    },
    { 
      id: 2, 
      restaurantId: 3, 
      name: 'Pepperoni Pizza', 
      description: 'Serves 1 | Topped with pepperoni and cheese, perfect for meat lovers.', 
      price: 299, 
      icon: 'veg.png', 
      rating: 4.5, 
      numberOfRatings: 20, 
      imageUrl: 'pizza1.jpg' 
    },
    { 
      id: 3, 
      restaurantId: 3, 
      name: 'Margherita Pizza', 
      description: 'Serves 1 | Classic Margherita topped with fresh basil, mozzarella, and a hint of olive oil.', 
      price: 299, 
      icon: 'veg.png', 
      rating: 4.2, 
      numberOfRatings: 18, 
      imageUrl: 'pizza2.jpg' 
    },
    { 
      id: 4, 
      restaurantId: 3, 
      name: 'BBQ Chicken Pizza', 
      description: 'Serves 1 | Juicy chicken pieces smothered in BBQ sauce, red onions, and cheese.', 
      price: 599, 
      icon: 'nonveg.png',
      rating: 4.7, 
      numberOfRatings: 25, 
      imageUrl: 'pizza3.jpg' 
    },
    { 
      id: 5, 
      restaurantId: 3, 
      name: 'Veggie Lovers Pizza', 
      description: 'Serves 1 | Loaded with a variety of fresh vegetables and cheese.', 
      price: 359, 
      icon: 'veg.png', 
      rating: 4.3, 
      numberOfRatings: 22, 
      imageUrl: 'pizza4.jpg'
    },
    { 
      id: 6, 
      restaurantId: 3, 
      name: 'Four Cheese Pizza', 
      description: 'Serves 1 | A decadent mix of mozzarella, cheddar, gorgonzola, and parmesan.', 
      price: 349, 
      icon: 'nonveg.png', 
      rating: 4.6, 
      numberOfRatings: 17, 
      imageUrl: 'pizza5.jpg' 
    },
    { 
      id: 7, 
      restaurantId: 3, 
      name: 'Hawaiian Pizza', 
      description: 'Serves 1 | A delicious blend of ham, pineapple, and cheese.', 
      price: 459, 
      icon: 'nonveg.png', 
      rating: 4.1, 
      numberOfRatings: 15, 
      imageUrl: 'pizza6.jpg'
    },
    { 
      id: 8, 
      restaurantId: 3, 
      name: 'Buffalo Chicken Pizza', 
      description: 'Serves 1 | Spicy buffalo chicken with blue cheese and celery.', 
      price: 299, 
      icon: 'nonveg.png', 
      rating: 4.4, 
      numberOfRatings: 19, 
      imageUrl: 'pizza7.jpg'
    },
    { 
      id: 9, 
      restaurantId: 3, 
      name: 'Spinach and Feta Pizza', 
      description: 'Serves 1 | Fresh spinach, feta cheese, and a hint of garlic.', 
      price: 479, 
      icon: 'veg.png', 
      rating: 4.0, 
      numberOfRatings: 10, 
      imageUrl: 'pizza8.jpg'
    },
    { 
      id: 10, 
      restaurantId: 3, 
      name: 'Pesto Veggie Pizza', 
      description: 'Serves 1 | Topped with pesto, artichokes, and fresh veggies.', 
      price: 299, 
      icon: 'veg.png', 
      rating: 4.5, 
      numberOfRatings: 12, 
      imageUrl: 'pizza1.jpg'
    },
    { 
      id: 11, 
      restaurantId: 3, 
      name: 'Meat Lovers Pizza', 
      description: 'Serves 1 | A carnivore’s dream with multiple meat toppings.', 
      price: 399, 
      icon: 'nonveg.png', 
      rating: 4.8, 
      numberOfRatings: 30, 
      imageUrl: 'pizza10.jpg'
    },
    
    // Duplicated for Restaurant ID 5
    { 
      id: 1, 
      restaurantId: 5, 
      name: 'Veg Supreme Pizza', 
      description: 'Serves 1 | An ultimate combination of your favourite veggies - onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo.', 
      price: 299, 
      icon: 'nonveg.png', 
      rating: 3.7, 
      numberOfRatings: 14, 
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fc115b57-9536-4c2d-8876-bcedf630ea7b_b7818aa0-4ccb-4cfa-acb5-df7a9cace4e5.png_compressed'
    },
    { 
      id: 2, 
      restaurantId: 5, 
      name: 'Pepperoni Pizza', 
      description: 'Serves 1 | Topped with pepperoni and cheese, perfect for meat lovers.', 
      price: 399, 
      icon: 'veg.png', 
      rating: 4.5, 
      numberOfRatings: 20, 
      imageUrl: 'pizza1.jpg' 
    },
    { 
      id: 3, 
      restaurantId: 5, 
      name: 'Margherita Pizza', 
      description: 'Serves 1 | Classic Margherita topped with fresh basil, mozzarella, and a hint of olive oil.', 
      price: 299, 
      icon: 'veg.png', 
      rating: 4.2, 
      numberOfRatings: 18, 
      imageUrl: 'pizza2.jpg' 
    },
    { 
      id: 4, 
      restaurantId: 5, 
      name: 'BBQ Chicken Pizza', 
      description: 'Serves 1 | Juicy chicken pieces smothered in BBQ sauce, red onions, and cheese.', 
      price: 499, 
      icon: 'nonveg.png',
      rating: 4.7, 
      numberOfRatings: 25, 
      imageUrl: 'pizza3.jpg' 
    },
    { 
      id: 5, 
      restaurantId: 5, 
      name: 'Veggie Lovers Pizza', 
      description: 'Serves 1 | Loaded with a variety of fresh vegetables and cheese.', 
      price: 299, 
      icon: 'veg.png', 
      rating: 4.3, 
      numberOfRatings: 22, 
      imageUrl: 'pizza4.jpg'
    },
    { 
      id: 6, 
      restaurantId: 5, 
      name: 'Four Cheese Pizza', 
      description: 'Serves 1 | A decadent mix of mozzarella, cheddar, gorgonzola, and parmesan.', 
      price: 399, 
      icon: 'nonveg.png', 
      rating: 4.6, 
      numberOfRatings: 17, 
      imageUrl: 'pizza5.jpg' 
    },
    { 
      id: 7, 
      restaurantId: 5, 
      name: 'Hawaiian Pizza', 
      description: 'Serves 1 | A delicious blend of ham, pineapple, and cheese.', 
      price: 499, 
      icon: 'nonveg.png', 
      rating: 4.1, 
      numberOfRatings: 15, 
      imageUrl: 'pizza6.jpg'
    },
    { 
      id: 8, 
      restaurantId: 5, 
      name: 'Buffalo Chicken Pizza', 
      description: 'Serves 1 | Spicy buffalo chicken with blue cheese and celery.', 
      price: 599, 
      icon: 'nonveg.png', 
      rating: 4.4, 
      numberOfRatings: 19, 
      imageUrl: 'pizza7.jpg'
    },
    { 
      id: 9, 
      restaurantId: 5, 
      name: 'Spinach and Feta Pizza', 
      description: 'Serves 1 | Fresh spinach, feta cheese, and a hint of garlic.', 
      price: 249, 
      icon: 'veg.png', 
      rating: 4.0, 
      numberOfRatings: 10, 
      imageUrl: 'pizza8.jpg'
    },
    { 
      id: 10, 
      restaurantId: 5, 
      name: 'Pesto Veggie Pizza', 
      description: 'Serves 1 | Topped with pesto, artichokes, and fresh veggies.', 
      price: 349, 
      icon: 'veg.png', 
      rating: 4.5, 
      numberOfRatings: 12, 
      imageUrl: 'pizza1.jpg'
    },
    { 
      id: 11, 
      restaurantId: 5, 
      name: 'Meat Lovers Pizza', 
      description: 'Serves 1 | A carnivore’s dream with multiple meat toppings.', 
      price: 399, 
      icon: 'nonveg.png', 
      rating: 4.8, 
      numberOfRatings: 30, 
      imageUrl: 'pizza10.jpg'
    },
    
    // Duplicated for Restaurant ID 7
    { 
      id: 1, 
      restaurantId: 7, 
      name: 'Veg Supreme Pizza', 
      description: 'Serves 1 | An ultimate combination of your favourite veggies - onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo.', 
      price: 299, 
      icon: 'nonveg.png', 
      rating: 3.7, 
      numberOfRatings: 14, 
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fc115b57-9536-4c2d-8876-bcedf630ea7b_b7818aa0-4ccb-4cfa-acb5-df7a9cace4e5.png_compressed'
    },
    { 
      id: 2, 
      restaurantId: 7, 
      name: 'Pepperoni Pizza', 
      description: 'Serves 1 | Topped with pepperoni and cheese, perfect for meat lovers.', 
      price: 399, 
      icon: 'veg.png', 
      rating: 4.5, 
      numberOfRatings: 20, 
      imageUrl: 'pizza1.jpg' 
    },
    { 
      id: 3, 
      restaurantId: 7, 
      name: 'Margherita Pizza', 
      description: 'Serves 1 | Classic Margherita topped with fresh basil, mozzarella, and a hint of olive oil.', 
      price: 299, 
      icon: 'veg.png', 
      rating: 4.2, 
      numberOfRatings: 18, 
      imageUrl: 'pizza2.jpg' 
    },
    { 
      id: 4, 
      restaurantId: 7, 
      name: 'BBQ Chicken Pizza', 
      description: 'Serves 1 | Juicy chicken pieces smothered in BBQ sauce, red onions, and cheese.', 
      price: 449, 
      icon: 'nonveg.png',
      rating: 4.7, 
      numberOfRatings: 25, 
      imageUrl: 'pizza3.jpg' 
    },
    { 
      id: 5, 
      restaurantId: 7, 
      name: 'Veggie Lovers Pizza', 
      description: 'Serves 1 | Loaded with a variety of fresh vegetables and cheese.', 
      price: 399, 
      icon: 'veg.png', 
      rating: 4.3, 
      numberOfRatings: 22, 
      imageUrl: 'pizza4.jpg'
    },
    { 
      id: 6, 
      restaurantId: 7, 
      name: 'Four Cheese Pizza', 
      description: 'Serves 1 | A decadent mix of mozzarella, cheddar, gorgonzola, and parmesan.', 
      price: 399, 
      icon: 'nonveg.png', 
      rating: 4.6, 
      numberOfRatings: 17, 
      imageUrl: 'pizza5.jpg' 
    },
    { 
      id: 7, 
      restaurantId: 7, 
      name: 'Hawaiian Pizza', 
      description: 'Serves 1 | A delicious blend of ham, pineapple, and cheese.', 
      price: 449, 
      icon: 'nonveg.png', 
      rating: 4.1, 
      numberOfRatings: 15, 
      imageUrl: 'pizza6.jpg'
    },
    { 
      id: 8, 
      restaurantId: 7, 
      name: 'Buffalo Chicken Pizza', 
      description: 'Serves 1 | Spicy buffalo chicken with blue cheese and celery.', 
      price: 399, 
      icon: 'nonveg.png', 
      rating: 4.4, 
      numberOfRatings: 19, 
      imageUrl: 'pizza7.jpg'
    },
    { 
      id: 9, 
      restaurantId: 7, 
      name: 'Spinach and Feta Pizza', 
      description: 'Serves 1 | Fresh spinach, feta cheese, and a hint of garlic.', 
      price: 249, 
      icon: 'veg.png', 
      rating: 4.0, 
      numberOfRatings: 10, 
      imageUrl: 'pizza8.jpg'
    },
    { 
      id: 10, 
      restaurantId: 7, 
      name: 'Pesto Veggie Pizza', 
      description: 'Serves 1 | Topped with pesto, artichokes, and fresh veggies.', 
      price: 329, 
      icon: 'veg.png', 
      rating: 4.5, 
      numberOfRatings: 12, 
      imageUrl: 'pizza1.jpg'
    },
    { 
      id: 11, 
      restaurantId: 7, 
      name: 'Meat Lovers Pizza', 
      description: 'Serves 1 | A carnivore’s dream with multiple meat toppings.', 
      price: 399, 
      icon: 'nonveg.png', 
      rating: 4.8, 
      numberOfRatings: 30, 
      imageUrl: 'pizza10.jpg'
    },


    { 
      id: 1, 
      restaurantId: 4, 
      name: 'Fettuccine Alfredo', 
      description: 'Serves 1 | Creamy pasta with parmesan and spices.', 
      price: 299, 
      icon: 'nonveg.png', 
      rating: 4.4, 
      numberOfRatings: 8, 
      imageUrl: 'bg1.jpg' 
  },
  { 
      id: 2, 
      restaurantId: 4, 
      name: 'Garden Salad', 
      description: 'Serves 1 | A fresh mix of seasonal veggies with a light dressing.', 
      price: 69, 
      icon: 'veg.png', 
      rating: 4.0, 
      numberOfRatings: 10, 
      imageUrl: 'bg4.jpg' 
  },
  { 
      id: 3, 
      restaurantId: 4, 
      name: 'Lasagna', 
      description: 'Serves 1 | Layered pasta with meat and cheese.', 
      price: 329, 
      icon: 'nonveg.png', 
      rating: 4.5, 
      numberOfRatings: 15, 
      imageUrl: 'bg3.jpg' 
  },
  { 
      id: 4, 
      restaurantId: 4, 
      name: 'Caesar Salad', 
      description: 'Serves 1 | Romaine lettuce with Caesar dressing and croutons.', 
      price: 79, 
      icon: 'veg.png', 
      rating: 4.3, 
      numberOfRatings: 14, 
      imageUrl: 'bg4.jpg' 
  },
  { 
      id: 5, 
      restaurantId: 4, 
      name: 'Spaghetti Bolognese', 
      description: 'Serves 1 | Classic spaghetti with a rich meat sauce.', 
      price: 199, 
      icon: 'nonveg.png', 
      rating: 4.6, 
      numberOfRatings: 18, 
      imageUrl: 'bg5.jpg' 
  },
  { 
      id: 6, 
      restaurantId: 4, 
      name: 'Bruschetta', 
      description: 'Serves 1 | Toasted bread topped with fresh tomatoes and basil.', 
      price: 599, 
      icon: 'veg.png', 
      rating: 4.4, 
      numberOfRatings: 10, 
      imageUrl: 'bg6.jpg' 
  },
  { 
      id: 7, 
      restaurantId: 4, 
      name: 'Pesto Pasta', 
      description: 'Serves 1 | Pasta tossed in homemade pesto sauce.', 
      price: 149, 
      icon: 'nonveg.png', 
      rating: 4.7, 
      numberOfRatings: 40, 
      imageUrl: 'bg7.jpg' 
  },
  { 
      id: 8, 
      restaurantId: 4, 
      name: 'Minestrone Soup', 
      description: 'Serves 1 | Hearty vegetable soup with pasta.', 
      price: 199, 
      icon: 'veg.png', 
      rating: 4.1, 
      numberOfRatings: 9, 
      imageUrl: 'bg8.jpg' 
  },
  { 
      id: 9, 
      restaurantId: 4, 
      name: 'Fettuccine Alfredo', 
      description: 'Serves 1 | Creamy pasta with parmesan and spices.', 
      price: 299, 
      icon: 'nonveg.png', 
      rating: 4.4, 
      numberOfRatings: 8, 
      imageUrl: 'bg1.jpg' 
  },
  { 
      id: 10, 
      restaurantId: 4, 
      name: 'Garden Salad', 
      description: 'Serves 1 | A fresh mix of seasonal veggies with a light dressing.', 
      price: 79, 
      icon: 'veg.png', 
      rating: 4.0, 
      numberOfRatings: 10, 
      imageUrl: 'bg4.jpg' 
  },
  { 
      id: 11, 
      restaurantId: 4, 
      name: 'Lasagna', 
      description: 'Serves 1 | Layered pasta with meat and cheese.', 
      price: 199, 
      icon: 'nonveg.png', 
      rating: 4.5, 
      numberOfRatings: 15, 
      imageUrl: 'bg3.jpg' 
  },
  { 
      id: 12, 
      restaurantId: 4, 
      name: 'Caesar Salad', 
      description: 'Serves 1 | Romaine lettuce with Caesar dressing and croutons.', 
      price: 109, 
      icon: 'veg.png', 
      rating: 4.3, 
      numberOfRatings: 12, 
      imageUrl: 'bg4.jpg' 
  },
  { 
    id: 1, 
    restaurantId: 6, 
    name: 'Fettuccine Alfredo', 
    description: 'Serves 1 | Creamy pasta with parmesan and spices.', 
    price: 229, 
    icon: 'nonveg.png', 
    rating: 4.6, 
    numberOfRatings: 8, 
    imageUrl: 'bg1.jpg' 
},
{ 
    id: 2, 
    restaurantId: 6, 
    name: 'Garden Salad', 
    description: 'Serves 1 | A fresh mix of seasonal veggies with a light dressing.', 
    price: 69, 
    icon: 'veg.png', 
    rating: 4.0, 
    numberOfRatings: 10, 
    imageUrl: 'bg6.jpg' 
},
{ 
    id: 3, 
    restaurantId: 6, 
    name: 'Lasagna', 
    description: 'Serves 1 | Layered pasta with meat and cheese.', 
    price: 199, 
    icon: 'nonveg.png', 
    rating: 4.5, 
    numberOfRatings: 15, 
    imageUrl: 'bg3.jpg' 
},
{ 
    id: 4, 
    restaurantId: 6, 
    name: 'Caesar Salad', 
    description: 'Serves 1 | Romaine lettuce with Caesar dressing and croutons.', 
    price: 109, 
    icon: 'veg.png', 
    rating: 4.3, 
    numberOfRatings: 16, 
    imageUrl: 'bg4.jpg' 
},
{ 
    id: 5, 
    restaurantId: 6, 
    name: 'Spaghetti Bolognese', 
    description: 'Serves 1 | Classic spaghetti with a rich meat sauce.', 
    price: 249, 
    icon: 'nonveg.png', 
    rating: 4.6, 
    numberOfRatings: 18, 
    imageUrl: 'bg5.jpg' 
},
{ 
    id: 6, 
    restaurantId: 6, 
    name: 'Bruschetta', 
    description: 'Serves 1 | Toasted bread topped with fresh tomatoes and basil.', 
    price: 399, 
    icon: 'veg.png', 
    rating: 4.4, 
    numberOfRatings: 10, 
    imageUrl: 'bg6.jpg' 
},
{ 
    id: 7, 
    restaurantId: 6, 
    name: 'Pesto Pasta', 
    description: 'Serves 1 | Pasta tossed in homemade pesto sauce.', 
    price: 149, 
    icon: 'nonveg.png', 
    rating: 4.7, 
    numberOfRatings: 60, 
    imageUrl: 'bg7.jpg' 
},
{ 
    id: 8, 
    restaurantId: 6, 
    name: 'Minestrone Soup', 
    description: 'Serves 1 | Hearty vegetable soup with pasta.', 
    price: 109, 
    icon: 'veg.png', 
    rating: 4.1, 
    numberOfRatings: 9, 
    imageUrl: 'bg8.jpg' 
},
{ 
    id: 9, 
    restaurantId: 6, 
    name: 'Fettuccine Alfredo', 
    description: 'Serves 1 | Creamy pasta with parmesan and spices.', 
    price: 169, 
    icon: 'nonveg.png', 
    rating: 4.6, 
    numberOfRatings: 8, 
    imageUrl: 'bg1.jpg' 
},
{ 
    id: 10, 
    restaurantId: 6, 
    name: 'Garden Salad', 
    description: 'Serves 1 | A fresh mix of seasonal veggies with a light dressing.', 
    price: 200, 
    icon: 'veg.png', 
    rating: 4.0, 
    numberOfRatings: 10, 
    imageUrl: 'bg6.jpg' 
},
{ 
    id: 11, 
    restaurantId: 6, 
    name: 'Lasagna', 
    description: 'Serves 1 | Layered pasta with meat and cheese.', 
    price: 149, 
    icon: 'nonveg.png', 
    rating: 4.5, 
    numberOfRatings: 15, 
    imageUrl: 'bg3.jpg' 
},
{ 
    id: 12, 
    restaurantId: 6, 
    name: 'Caesar Salad', 
    description: 'Serves 1 | Romaine lettuce with Caesar dressing and croutons.', 
    price: 79, 
    icon: 'veg.png', 
    rating: 4.3, 
    numberOfRatings: 12, 
    imageUrl: 'bg4.jpg' 
},

  
  ];
  

  
  

  getMenuItemsByRestaurantId(restaurantId: number): MenuItem[] {
    return this.menuItems.filter(item => item.restaurantId === restaurantId);
  }
  
}
