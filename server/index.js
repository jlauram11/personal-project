const express = require('express');
const expressSession = require('express-session');
const massive = require('massive');
const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcrypt');

const controllers = require('./controllers');

const cors = require('cors')
const bodyParser = require('body-parser');

require('dotenv').config({path: __dirname + `/.env`}); // Adds to `process.env`

const app = express();

massive(process.env.DB_CONNECTION_STRING, {scripts: __dirname + '/db'})
    .then(dbInstance => app.set('db', dbInstance))
    .catch(err => console.log(err))

passport.use("login", new passportLocal.Strategy(( username, password, done ) => {
    app.get('db').users.find({username})
        .then(users => {
            if (!users.length) {
                return done("Username or password is incorrect");
            }
            const user = users[0];
            bcrypt.compare(password, user.password, (err, isSame) => {
                if (err) {
                    return done("Internal server error")
                }
                if (!isSame) {
                    return done("Username or password is incorrect")
                }
                delete user.password;
                done(null, user);
            })
        })
        .catch(err => {
            console.log(err);
            done("Internal server error");
        })
}))

//register user, (compare) hash, save password to database, users.insert, delete user.password, done(null, user)
passport.use('register', new passportLocal.Strategy(( username, password, done ) => {
    app.get('db').users.find({username})
        .then(users => {
            if (users.length) {
                return done('Username already exists');
            }
            const user = users[0];
            bcrypt.hash(password, 15, (err, hashedPassword) => {
                if (err) {
                    return done(err);
                }
                db.users.insert({
                    ...req.body,
                    password: hashedPassword,
                    role_id: 3                    
                })
                .then(user => {
                    delete user.password;

                    done (null, user)
                })
                .catch(err => {
                    console.warn(err);
                    done('System Failure')
                })
            })
        })
}))

//serialize user (meme machine)
passport.serializeUser((user, done) => {
    done(null, user.id);
})

//deserialize user
passport.deserializeUser((user, done) => {
    users.find(id)
        .then( user => {
            if (!user) {
                return done(null, undefined)
            }
            
            delete user.password;

            return done(null, user);
        })
        .catch (err => {
            done('System Failure')
        })
})

app.use(cors());
app.use(bodyParser.json());

app.post(`/auth/login`, passport.authenticate("login"), (req, res) => {
    //send successful response including the user
})
app.post(`/auth/register`, (req, res) => {
    //send successful response including the user
})
app.get(`/api/characters`, controllers.getQuestions);

app.listen(8012, () => console.log('Server is listening on port 8012'))