# NextJS Ecommerce Application

This is a full stack ecommerce application built with NextJS 13, the latest version of the React framework. It allows users to browse, add, and purchase products from a responsive landing page. It also has an admin side where admins can manage products and orders.



## User Demo

https://github.com/zarakk/ecommerce-application/assets/52151884/8930bcbe-b404-4350-a5af-f8304323fa80

## Admin Demo

https://github.com/zarakk/ecommerce-application/assets/52151884/de8e89d5-976c-43e9-a15d-bef347579831

## Features

- **Front end**: The front end is built with NextJS 13, which supports features such as image optimization, middleware, and server-side rendering. The styling is done with Tailwind CSS, a utility-first framework that enables fast and responsive design.
- **Back end**: The back end is also built with NextJS 13, using its API routes feature to create serverless functions that handle requests from the front end. The data is stored in MongoDB, a popular and scalable NoSQL database.
- **Ecommerce functionality**: The application supports the following ecommerce features:
  - **Product listing**: Users can view and search products on the landing page, which displays product images, titles, prices, and ratings.
  - **Product details**: Users can click on a product to see more details, such as descriptions, reviews, and related products.
  - **Shopping cart**: Users can add products to their shopping cart, which shows the total price and quantity of the items. Users can also update or remove items from their cart.
  - **Checkout**: Users can proceed to the checkout page, where they can enter their shipping and payment information. The application uses Stripe to process payments securely.
  - **Order confirmation**: Users can see their order details and status after completing the checkout process.
- **Admin functionality**: The application also has an admin side, where admins can perform the following tasks:
  - **Product management**: Admins can add, edit, update, or delete products from the database. They can also upload product images and set product categories and prices.
  - **Order management**: Admins can view all the orders placed by the users. They can also change the status of the orders, such as pending, shipped, or delivered. They can also fulfill the orders by sending email confirmations to the users.
