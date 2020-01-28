const Express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const cors = require('cors');
const app = Express();
const userRoute = require('./app/users/user.route')

  app.use(bodyParse.json());
  const corsOptionsDelegate = (req, callback) => {
    let corsOptions = {};
    corsOptions = {
      ...corsOptions,
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Authorization',
        'Accept'
      ]
    };
    callback(null, corsOptions);
  };
  app.use(cors(corsOptionsDelegate));

  app.use("/api",userRoute);

const PORT = process.env.PORT || 8080;

mongoose.connect("mongodb://localhost:27017/newtest", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
    console.log(`Connect to MongooDb`);
  })
  .catch(err => console.log(err));