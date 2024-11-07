import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() {}

  getPopularCategories() {
    return [
      { name: 'Poha', imageUrl: 'Poha.png', quote: 'Light and lovely, a breakfast delight.' },
      { name: 'Pasta', imageUrl: 'pasta.png', quote: 'Good food, good pasta, great times.' },
      { name: 'Burger', imageUrl: 'burger.png', quote: 'Burgers are the best friends of hunger.' },
      { name: 'Ice Cream', imageUrl: 'icecream.png', quote: 'You can’t buy happiness, but you can buy ice cream.' },
      { name: 'Pizza', imageUrl: 'Pizzas.png', quote: 'Life is better with pizza.' },
      { name: 'Momos', imageUrl: 'Momos.png', quote: 'Dumplings with a dash of flavor.' },
      { name: 'Rolls', imageUrl: 'Rolls.png', quote: 'Wrapped with love, filled with flavor.' },
      { name: 'Noodles', imageUrl: 'Noodles.png', quote: 'Twist it, twirl it, love it.' },
      { name: 'Gulab Jamun', imageUrl: 'Gulab jamun.png', quote: 'A sweet treat for every occasion.' },
      { name: 'Paratha', imageUrl: 'Paratha.png', quote: 'Taste the tradition, feel the warmth.' },
      { name: 'Pastry', imageUrl: 'pastry.png', quote: 'Perfect pastry, perfect pleasure.' },
      { name: 'North Indian', imageUrl: 'North Indian.png', quote: 'Flavors from the heart of India.' },
      { name: 'Poori', imageUrl: 'Poori.png', quote: 'Crispy and warm, just like home.' },
      { name: 'Kebabs', imageUrl: 'Kebabs.png', quote: 'Sizzling, succulent, and savory.' },
      { name: 'Cake', imageUrl: 'cake.png', quote: 'Life’s too short to say no to cake.' },
      { name: 'Chinese', imageUrl: 'Chinese.png', quote: 'A taste of the East, close to home.' },
    ];
  }

  getCategoryQuote(categoryName: string): string | null {
    const category = this.getPopularCategories().find(cat => cat.name === categoryName);
    return category ? category.quote : null;
  }
}
