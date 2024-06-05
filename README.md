
Amazon CloneThis is a full-stack Amazon clone developed using React.js, Express.js, Firebase, and Stripe API. The project includes features such as checkout, payment integration, user authentication, and real-time database functionality. The clone has been deployed on Firebase hosting.
Getting StartedTo run this project locally, follow these steps:
- Clone the repository:

git clone <repository-url>

- Install the dependencies:

cd <repository-folder>
npm install

- Configure Firebase:
    - Create a new Firebase project on the Firebase console.
    - Enable Firebase Authentication, Firebase Storage, and Firestore database.
    - Obtain the Firebase configuration object and replace it in the project's .env file.
- Configure Stripe API:
    - Create a Stripe account and obtain the API keys.
    - Replace the Stripe API keys in the project's .env file.
- Run the development server:

npm start

- Open your browser and navigate to http://localhost:3000.
Features- Login and Logout functionality using Firebase Authentication.
- Add products to the cart and remove them.
- Secure payment processing with Stripe API integration.
- Neat and clean user interface inspired by Amazon.
AcknowledgementsThis project was built as a learning exercise and was inspired by Amazon. Special thanks to the developers at CleverProgrammers.
Feel free to customize this template with additional details specific to your project. Happy coding! 😊🚀
References:
- GitHub Repository
- Live Demo
Note: Remember to replace <repository-url> and <repository-folder> with the actual repository URL and folder name.
