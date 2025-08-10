const express = require('express')
require('dotenv').config()
const jwt = require("jsonwebtoken")
const userdb = require('../modules/userdb')

const userroutes = express.Router()

userroutes.post( "/signin" , async function ( req , res ) {
    try {
        const { token } = req.body
        let { name , email } = jwt.decode(token)

        const userdata = await userdb.findOne({email: email})

        if ( userdata ) {
            
            return res.json({
                res: "user already exists"
            })

        } else {
            
            const user = await userdb.create({
                name: name,
                email: email
            })

            return res.json({
                res: "user got created"
            })
        }
        
    } catch (error) {
        console.log(error);
    }
})

userroutes.post( '/login' , async function ( req , res ) {
    try {
        const { token } = req.body
        let { name , email } = jwt.decode(token)

        const userdata = await userdb.findOne({email: email})

        if ( userdata ) {
            const jwttoken = jwt.sign( process.env.jwtscrate , userdata._id.toString() )
            return res.json({
                token: jwttoken
            })
        } else {
            console.log("login not");
            return res.json({
                res: "404"
            })
        }
    } catch (error) {
        console.log(error);
    }
})



module.exports = userroutes