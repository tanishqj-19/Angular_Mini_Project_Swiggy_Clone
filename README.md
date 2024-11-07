# Swiggy Delivery

This project is an Angular-based front-end clone inspired by Swiggy. The app allows users to browse through various restaurants, search for dishes, sign in, add products to a shopping cart, and access detailed information about each restaurant. It's tech stack contains Angular, Tailwind CSS and Mock API for authentication.

## Check it Out Live :- https://angular-mini-project-swiggy-clone.vercel.app/

## Project Organization

The project’s directory under the `src/app` folder is structured into two main sections:

- **pages**: Contains the primary pages that users interact with, such as Home, Login, Search, Cart, and more.
- **components**: Holds reusable UI elements like the header, footer, categories, restaurant card components.

Additionally, the project includes services responsible for managing data and implementing business logic.


## Pages Overview

1. **Home Page**
   - **Purpose**: Serves as the main entry point to the application, similar to Swiggy's homepage.
   - **Sections**:
     - **Header**: Provides the primary navigation options.
     - **Popular Categories**: Highlights popular food categories for users to explore.
     - **Featured Restaurants**: Showcases a curated list of restaurants based on factors like popularity.
     - **Footer**: Contains useful links and footer information.
   - **Components Used**: Header, Footer, Popular Categories, Restaurant Card (for Featured Restaurants).
     ![image](https://github.com/user-attachments/assets/cff5c623-ccfb-42e1-af5e-c391b004a7c5)


2. **Explore Page**
   - **Purpose**: Offers additional browsing options, showing more restaurants based on user interests.
   - **Functionality**: May include filters or sorting options to help users find specific restaurants.
   - **Components Used**: Restaurant cards collection for browsing.
     ![image](https://github.com/user-attachments/assets/38be6c02-b869-48c3-a44a-54e382a4f123)


3. **Search Page**
   - **Purpose**: Enables users to search for food items or restaurants.
   - **Functionality**: Displays relevant search results as users input a search term.
   - **Components Used**: Search input field and results display section.
     ![image](https://github.com/user-attachments/assets/cff909e6-2b8d-410e-9311-616f8e631ffa)


4. **Cart Page**
   - **Purpose**: Displays all the items added to the user's shopping cart.
   - **Functionality**:
     - Users can modify the quantity of items or remove them.
     - If the cart is empty, a message prompts users to browse restaurants and add items.
   - **Components Used**: Cart item cards, total amount display, empty cart message.
     ![image](https://github.com/user-attachments/assets/ad79e8e0-c20b-4a98-8b6f-ff109936b376)


5. **Sign-In Page**
   - **Purpose**: Allows users to log in by entering their email, name, and phone number.
   - **Functionality**:
     - Form validation ensures correct data entry.
     - Once the sign-in button is clicked, validated data is sent to a MockAPI.
     - After successful login, the user is redirected to the Home Page, where their name appears in place of "Sign In" in the header.
   - **Components Used**: Input fields and validation messages.
     ![image](https://github.com/user-attachments/assets/373e9e8e-a758-4f3a-ae5b-8c6bceceae91)




### Services

The **services** folder holds Angular services responsible for managing data, handling business logic, and interacting with APIs throughout the application.

1. **Restaurant Service**
   - **Purpose**: Handles all restaurant-related data operations.
   - **Features**:
     - Fetches a list of restaurants.
     - Retrieves details for individual restaurants based on their unique identifier.
   - **Usage**: This service is used across various components like the Home Page, Restaurant Card, and Restaurant Detail Page to display restaurant information.

2. **Cart Service**
   - **Purpose**: Manages operations related to the shopping cart.
   - **Features**:
     - Adds items to the cart.
     - Updates the quantity of items in the cart.
     - Removes items or clears the entire cart.
   - **Usage**: Employed by the Cart Page and components such as Menu Item to update and manage the cart.

3. **Menu Item Service**
   - **Purpose**: Manages the data and business logic for menu items.
   - **Usage**: Primarily used by the Restaurant Detail Page and the Menu Item components to retrieve and display menu data.

4. **Popular Categories Service (Menu Service)**
   - **Purpose**: Retrieves and provides data for popular food categories.
   - **Usage**: This service is primarily used by the Popular Categories component on the Home Page to show trending food categories to users.

---

### Components

The **components** folder includes reusable building blocks that promote modularity and simplify code maintenance across the application.

1. **Header**
   - **Purpose**: Acts as the primary navigation bar across the application.
   - **Features**:
     - Provides navigation links to key pages such as Home, Cart, Explore, and Account.
     - Displays the user’s name when signed in.
   - **Usage**: Consistently rendered at the top of every page to facilitate smooth navigation.

2. **Footer**
   - **Purpose**: Displays footer information and important links at the bottom of each page.
   - **Usage**: Used across various pages, with frequent inclusion on the Home Page and main views.
     ![image](https://github.com/user-attachments/assets/c484a5dc-d5ee-4a0b-b1e9-be6bf7ea5939)


3. **Restaurant Card**
   - **Purpose**: Showcases individual restaurant details in a clean, card-based layout.
   - **Features**:
     - Displays the restaurant's image, name, rating, category, and a snippet of its location.
   - **Usage**: Utilized on the Home Page, Search Page, and Explore Page for listing restaurants.

4. **Menu Item**
   - **Purpose**: Represents individual food items within a restaurant’s menu.
   - **Features**: Displays the item’s name, price, description, and a button to add it to the cart.
   - **Usage**: Commonly used in the Restaurant Detail Page to present each item on the restaurant's menu.

5. **Popular Categories**
   - **Purpose**: Presents a curated list of popular food categories.
   - **Usage**: Featured on the Home Page to encourage users to explore various food types.

6. **Restaurant Detail Page**
   - **Purpose**: Displays detailed information about a specific restaurant.
   - **Features**:
     - Includes the restaurant’s address, rating, and description.
     - Shows a list of menu items available at the restaurant.
   - **Usage**: Accessed when a user clicks on a restaurant card to view more details.
     ![image](https://github.com/user-attachments/assets/496b6f64-c0b5-488d-b7a0-59eb3a219d45)


---


## Authentication & Routing

- **Mock API**: This project uses MockAPI for handling user sign-in.
- **Angular Modules**: The project is modularized to ensure separation of concerns, and services are injected where needed for optimal data flow and management.
- **Routing**: Angular Router is used for navigating between pages (like Home, Cart, Sign-In, etc.).
  


