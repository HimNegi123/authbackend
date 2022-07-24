const mongoose =require('mongoose');
mongoose.connect(process.env.CONNECT_BASE).then(
    console.log('its connected')
);
