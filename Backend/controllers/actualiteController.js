
const {connection} = require("../database/config");
const moment = require('moment');
const fs = require('fs');
const bodyParser =require("body-parser")
module.exports = {
createNews: (req,res)=>{
    console.log("data coming from front",req.body)
    //Converting data from base64 to binary
    /* const binaryData = Buffer.from(req.body.image, 'base64'); */
    //taking the current date
    const currentDate = moment().format('YYYY-MM-DD');
    //post query to create the actuality
    const sqlpost=`insert into actualite(title,brief,description,image,creationDate)  values(?,?,?,?,NOW());`
    //invoking the query with the body object
    connection.query(sqlpost,[req.body.title,req.body.brief,req.body.description,req.body.image],function(error,results,fields){
      if(error){
        res.status(500).send(error);
      }
      else{
        res.send("News was added to database successfully")
      }
    })
},
fetchNews:(req,res)=>{
    const sqlget='select * from actualite ORDER BY  creationDate DESC LIMIT 4;'
    connection.query(sqlget,[],function(error,results,fields){
        if(error){
          res.status(500).send(error);
        }
        else{
        
          res.send(results)
        }
      })
},
fetchAllNews:(req,res)=>{
  
  const sqlget='select * from actualite ;'
  connection.query(sqlget,[],function(error,results,fields){
      if(error){
        res.status(500).send(error);
      }
      else{
        //decoding
      /*   results.forEach(oneResult => {
          console.log("one blob is ",oneResult.image)
          const binaryData = Buffer.from(oneResult.image,"base64"); // Replace with your actual buffer

          const base64String = binaryData.toString('utf8');
          oneResult.image=base64String;
        }); */


    
        console.log("data sending to frontend as response",results);
        res.send(results)
      }
    })
},

deleteOne:function(req,res){
    console.log("the id to delete is ",req.params.id);
    const params = [req.params.id];
    const sqldelete =`DELETE FROM actualite WHERE idactualite = ?;`

    connection.query(sqldelete,params,function(err,result){
      if(err){res.status(500).send(err);}
      else{
        res.send(' actuality Is deleted');
      }
    })
  },

updateOne:(req,res)=>{
  console.log(req.body);
  console.log(req.params);
  const currentDate = moment().format('YYYY-MM-DD');
  // current date is replaced by NOW() "predefined func in sql"
  const sqlupdate =`UPDATE actualite SET title = '${req.body.title}', description = '${req.body.description}', brief = '${req.body.brief}', image = '${req.body.image}', creationDate = NOW() WHERE idactualite = ${req.params.id};`;
  connection.query(sqlupdate,function(error,results){
    if(error){res.status(500).send(error);}
    else{
      res.send("Todo was updated successfully")
    }
  })
},

}

