const express = require('express');
const app = express();
const port = 3000;

const userRouter = require("./routes/User.js"); 

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(userRouter); 

app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
});
