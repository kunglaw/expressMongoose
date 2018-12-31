
let db = {
    primaryMongo:{
        dialect:"mongodb",
        hostname:"localhost",
        port:27017,
        database:"ecommerce_db",
        username:"",
        password:"",
        //url:`mongodb://:${db.primaryMongo.port}/${db.primaryMongo.database}`,
       
    },
}

let url = {
    primaryMongo:`mongodb://${db.primaryMongo.hostname}:${db.primaryMongo.port}/${db.primaryMongo.database}`
}

//console.log( `${db.primaryMongo.port}  `,"<=== mofos" )

module.exports = { db, url }

