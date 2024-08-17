The beginning of the project that will represent the skills aquired across the courses and 2 years of explorations done in the programming world. 
NeonNet is the name given by the ChatGPT, and the project is set to implement various functions and techniques.

Small addition on the main colors:
rgb(97,229,240) - primary 
rgb(254,42,109) - attention seeker
rgb(2, 1, 43) - background

### Day 1, February 10th 2024 - the html and css basics 

### Day ---, July 20th 2024 - backend added, course finished, starting to shape out lost projects.

### Day 0, August 18th 2024 - decided finally give this project a go. Prepared a documentation and starting from monday will start from ground up the complete full stack project. 
### 3-Week Project Schedule for Building NeonNet E-Commerce Website

This schedule is designed to guide you through the process of building NeonNet, your e-commerce website, from the ground up. Each week focuses on key milestones, with specific tasks to be completed.

---

### **Week 1: Project Setup, Basic Features, and Backend Development**

#### **Day 1-2: Project Initialization**
- **Task 1: Set Up Development Environment**
  - Install Node.js, MongoDB, and Git.
  - Set up your project folder structure.
  - Initialize a Git repository and connect to GitHub.
  - Initialize `package.json` using `npm init`.
  - Install necessary npm packages: `Express.js`, `Mongoose`, `dotenv`, `nodemon`, `cors`.

- **Task 2: Set Up Basic Server**
  - Create an Express server with a basic `/api` route to verify that the server is running.
  - Set up `dotenv` for environment variables.
  - Test the server with Postman or by sending a request from the browser.

#### **Day 3-4: Database Setup**
- **Task 3: Set Up MongoDB**
  - Install and configure MongoDB locally or use MongoDB Atlas for a cloud-based database.
  - Create a connection file to connect your Express app to MongoDB using Mongoose.

- **Task 4: Define Initial Data Models**
  - Create Mongoose models for `User`, `Product`, `Order`, `Cart`.
  - Seed the database with sample data for products.

#### **Day 5-6: Authentication System**
- **Task 5: User Registration & Login**
  - Implement user registration and login using JWT for authentication.
  - Set up password hashing with `bcrypt`.
  - Create routes for user registration (`/api/auth/register`) and login (`/api/auth/login`).
  - Implement middleware to protect routes that require authentication.

- **Task 6: Role-Based Access Control (RBAC)**
  - Extend user model to include roles (e.g., `buyer`, `seller`, `admin`).
  - Implement middleware to restrict access to certain routes based on user roles.

#### **Day 7: Frontend Setup**
- **Task 7: Set Up React**
  - Initialize a React project using `create-react-app`.
  - Organize folder structure for components, pages, and services.
  - Install necessary libraries: `react-router-dom`, `axios`, `react-bootstrap` or `Material-UI`.

- **Task 8: Create Basic Layout Components**
  - Develop the basic layout (e.g., `Navbar`, `Footer`, `Sidebar`).
  - Set up routing for the basic pages (`Home`, `Login`, `Register`).

---

### **Week 2: Core Functionalities and Frontend Development**

#### **Day 8-9: Product Management**
- **Task 9: Product API Development**
  - Create routes for CRUD operations on products (`/api/products`).
  - Implement search and filtering capabilities for products on the backend.
  - Set up image upload functionality using `Multer`, and configure Cloudinary for storing images.

- **Task 10: Product Listing and Details Pages**
  - Fetch and display product data on the frontend.
  - Create `ProductListing` and `ProductDetail` pages.
  - Implement filtering and sorting functionality on the `ProductListing` page.

#### **Day 10-11: Cart and Checkout**
- **Task 11: Cart Functionality**
  - Develop the `Cart` component and page to display selected items.
  - Implement add-to-cart functionality, updating quantities, and removing items from the cart.
  - Use LocalStorage/SessionStorage to maintain the cart state.

- **Task 12: Checkout Process**
  - Create the `Checkout` page with a form to collect billing and shipping details.
  - Integrate Stripe for payment processing.
  - On successful payment, create an order and store it in MongoDB.

#### **Day 12-13: User Management**
- **Task 13: User Profile and Orders**
  - Develop `UserProfile` page to manage user information.
  - Implement `OrderHistory` page to display past orders.
  - Ensure users can update their profile information and view their order history.

- **Task 14: Seller Dashboard**
  - Create `SellerDashboard` page where sellers can manage their products.
  - Implement functionality to add new products, edit existing ones, and view orders.
  - Ensure the dashboard is accessible only to users with the `seller` role.

#### **Day 14: Admin Panel**
- **Task 15: Admin Features**
  - Create `AdminDashboard` with sections for managing users, products, and orders.
  - Implement approval workflows for new sellers or products.
  - Add functionality to view and resolve disputes between buyers and sellers.

- **Task 16: Security & Testing**
  - Implement rate limiting and input validation to protect the backend.
  - Begin writing unit tests for your API using Mocha/Chai and Jest for React components.

---

### **Week 3: Final Touches, Testing, and Deployment**

#### **Day 15-16: UI/UX Enhancements**
- **Task 17: UI Refinement**
  - Refactor and polish UI components to improve user experience.
  - Ensure mobile responsiveness using CSS Flexbox/Grid and media queries.
  - Add animations and transitions where necessary to enhance the UI (consider using libraries like Framer Motion).

- **Task 18: SEO Optimization**
  - Implement SEO best practices with React Helmet for meta tags and structured data.
  - Ensure good performance scores using tools like Lighthouse for analyzing site speed and optimization.

#### **Day 17-18: Comprehensive Testing**
- **Task 19: End-to-End Testing**
  - Perform thorough testing of all functionalities, including edge cases.
  - Use Cypress or Selenium for end-to-end testing.

- **Task 20: Bug Fixing**
  - Identify and fix bugs found during testing.
  - Ensure that all critical paths (like checkout, login, and registration) are fully functional.

#### **Day 19-20: Deployment Preparation**
- **Task 21: Final Code Review and Documentation**
  - Conduct a final review of your code, refactor where necessary, and remove any unnecessary dependencies.
  - Write documentation for your API endpoints and user roles.
  - Document the steps required to set up and run the project.

- **Task 22: Deployment**
  - Deploy the backend on Heroku/AWS/DigitalOcean.
  - Deploy the frontend on Vercel/Netlify.
  - Set up environment variables securely for production.
  - Ensure the MongoDB database is hosted on MongoDB Atlas.

#### **Day 21: Project Wrap-Up**
- **Task 23: Final Testing on Production**
  - Test the deployed site to ensure everything is working correctly in production.
  - Monitor logs and fix any issues that arise post-deployment.

- **Task 24: Project Presentation**
  - Prepare a presentation or a report summarizing the project, including key features, technologies used, challenges faced, and how they were resolved.
  - Create a README for the GitHub repository that clearly explains how to set up and use the project.
  - Record a short demo video or take screenshots of key functionalities for your portfolio.

---

### Final Deliverables:

- **Deployed Website Link:** A live version of NeonNet.
- **GitHub Repository:** With clean, documented code and a clear README.
- **Project Documentation:** Including API documentation, user roles, and setup instructions.
- **Portfolio Material:** Screenshots, video demos, and a project summary.

This schedule is ambitious but manageable if you stay focused and prioritize key features. Adjust the timelines as necessary based on your progress.
