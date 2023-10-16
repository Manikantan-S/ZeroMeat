React + Vite
This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules. You can choose between two official plugins for Fast Refresh: @vitejs/plugin-react, which uses Babel, or @vitejs/plugin-react-swc, which uses SWC.

Getting Started
Follow these steps to set up and run the project:

Clone the Repository:

bash
Copy code
git clone https://github.com/Manikantan-S/ZeroMeat.git
Navigate to the Project Directory:

bash
Copy code
cd ZeroMeat
Install Dependencies:

Use npm to install the project's dependencies. This step is crucial to ensure all the required packages are available.

bash
Copy code
npm install
Start the Development Server:

Once the dependencies are installed, you can start the development server.

bash
Copy code
npm run dev
This command will launch the development server, and your React application will be available at http://localhost:3000. Any changes you make to your code will automatically trigger HMR, making development smooth and efficient.

Available Plugins
You can choose between two Fast Refresh plugins for your React application:

@vitejs/plugin-react uses Babel for Fast Refresh.

@vitejs/plugin-react-swc uses SWC for Fast Refresh.

You can switch between these plugins in your Vite configuration to determine which one best suits your needs.

Feel free to customize this template according to your project requirements and enjoy efficient React development with Vite!
