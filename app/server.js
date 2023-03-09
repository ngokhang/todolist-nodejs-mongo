require('dotenv').config();

const PORT = process.env.PORT_HOST;
const morgan = require('morgan');
const express = require('express');
const expressFileUpload = require('express-fileupload');
const configViewEngine = require('./config/configViewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/mongoose_config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(expressFileUpload());
app.use(morgan('tiny'));
configViewEngine(app);
app.use('/', webRouter);

(async () => {
  try {
    await connection();
    console.log("Connected DB");
    app.listen(PORT, () => {
      console.log(`App running on ${PORT}`);
    })
    
  } catch (error) {
    console.log("Error", error);
  }
})();