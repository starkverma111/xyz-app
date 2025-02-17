require('dotenv').config();
const { Sequelize } = require('sequelize');
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT = 5432, DB_DIALECT = 'postgres' } = process.env;

// Ensure database exists
const ensureDatabaseExists = async () => {
    const client = new Client({ user: DB_USER, password: DB_PASS, host: DB_HOST, port: DB_PORT, database: 'postgres' });

    try {
        await client.connect();
        const { rowCount } = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${DB_NAME}'`);
        if (!rowCount) {
            console.log(`Creating database "${DB_NAME}"...`);
            await client.query(`CREATE DATABASE ${DB_NAME}`);
        } else {
            console.log(`Database "${DB_NAME}" already exists.`);
        }
    } catch (error) {
        console.error('Database error:', error);
    } finally {
        await client.end();
    }
};

// Sequelize instance
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, { host: DB_HOST, dialect: DB_DIALECT, port: DB_PORT, logging:false });

// Test connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

// Load models dynamically
const loadModels = () => {
    const modelsDir = path.join(__dirname, '../models');
    fs.readdirSync(modelsDir)
        .filter(file => file.endsWith('.js') && file !== 'index.js')
        .forEach(file => require(path.join(modelsDir, file)));
};

// Initialize database
const initDatabase = async () => {
    await ensureDatabaseExists();
    await testConnection();
    loadModels();

    try {
        await sequelize.sync({ force: false });
        console.log('Database synced & Tables synced.');
    } catch (error) {
        console.error('Sync error:', error);
    }
};

initDatabase();

module.exports = sequelize;
