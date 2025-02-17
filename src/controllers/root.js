module.exports = (req, res) => {
    res.send(`
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Documentation</title>
    
    <!-- External Libraries -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/google-sans" rel="stylesheet">
    
    <!-- Custom Styles -->
    <style>
        body {
            font-family: 'Product Sans', sans-serif !important;
        }
        
    </style>
</head>
<body>
    <section class="py-8 px-4 mx-auto max-w-screen-xl lg:py-14">
        <h1 class="mb-6 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Project Overview
        </h1>
        <p class="mb-6 text-md text-gray-500 lg:text-lg sm:px-16 lg:px-48 dark:text-gray-200">
            This project is built using <strong>Express.js</strong> for the server, <strong>PostgreSQL</strong> for the database, and <strong>Sequelize ORM</strong> for managing models.
        </p>
        
        <div class="max-w-6xl mx-auto">
            <h2 class="mb-4 text-2xl font-extrabold text-gray-900">Key Features</h2>
            <ul class="list-disc pl-8 text-gray-500 lg:text-lg dark:text-gray-200">
                <li>Automated setup for routing and database model synchronization.</li>
                <li>Configuration stored in an <code>.env</code> file, managed by the admin.</li>
            </ul>
            
            <h2 class="mb-4 mt-6 text-2xl font-extrabold text-gray-900">Database Functionality</h2>
            <ol class="list-decimal pl-8 text-gray-500 lg:text-lg dark:text-gray-200">
                <li>Checks if the database exists.</li>
                <li>Creates the database automatically if not found.</li>
                <li>Fetches model schemas from the <code>models</code> folder.</li>
                <li>Uses Sequelize to generate tables based on schemas.</li>
            </ol>
            
            <h2 class="mb-4 mt-6 text-2xl font-extrabold text-gray-900">Router Functionality</h2>
            <ul class="list-disc pl-8 text-gray-500 lg:text-lg dark:text-gray-200">
                <li>Partially automated for flexibility.</li>
                <li>Similar to Vue Router, allowing manual route definitions.</li>
            </ul>
            
            <h2 class="mb-4 mt-6 text-2xl font-extrabold text-gray-900">Environment Variables (ENV File)</h2>
            <p class="mb-6 text-gray-500 lg:text-lg dark:text-gray-200">
                The <code>.env</code> file stores important configuration details such as database credentials and API keys.
            </p>
            
            <h2 class="mb-4 mt-6 text-2xl font-extrabold text-gray-900">API Testing URLs</h2>
            <ul class="list-disc pl-8 text-gray-500 lg:text-lg dark:text-gray-200">
                <li>index page: http://localhost:3000/api/</li>
                 <li>home page: http://localhost:3000/api/home</li>
				  <li>cars page: http://localhost:3000/api/cars</li>
            </ul>
        </div>
        
        <hr class="h-1 my-8 bg-gray-100 border-0 rounded dark:bg-gray-700">
    </section>
</body>
</html>

    `);
};
