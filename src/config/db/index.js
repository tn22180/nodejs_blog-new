const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/tuan_nv_dev', {
            serverSelectionTimeoutMS: 5000,
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4, // Use IPv4, skip trying IPv6
        });
        console.log('connect successfully');
    } catch (error) {
        console.log(error);
        console.log('connect Failure');
    }
}

module.exports = { connect };
