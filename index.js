const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const flash = require('connect-flash');
const flashMiddleware= require('./middleware/middleware');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport');
const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');

    // using saas midleware
app.use(sassMiddleware({
    src : './assets/scss',
    dest : './assets/css',
    debug: true,
    outputStyle : 'extended',
    prefix: '/css'
}))

app.use(express.urlencoded());
app.use(cookieParser());

// for using assets files such as css and js and images
app.use(express.static('./assets'));
app.use(expressLayouts);
app.use('/uploads', express.static(__dirname + '/uploads'))

//extract style and script tags in head

app.set('layout extractStyles', true);     
app.set('layout extractScripts', true);  

// use express router



app.set('view engine', 'ejs');
app.set('views', './views');

   //expressSession || mongostore used
   app.use(session({
    name: 'easysafar',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/easysafar',
        autoRemove : 'disabled'
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(flashMiddleware.setFlash);

app.use('/', require('./routes'));

app.listen(port, (err) => {
    if(err){
        console.log(`Error: $(err)`);
    }
    console.log(`Server is running on port : ${port}`);
})