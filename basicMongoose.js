const mongoose =require('mongoose');
mongoose.connect(process.env.CONNECT_BASE,{useNewUrlParser: true}).then(
    console.log('its connected')
);
