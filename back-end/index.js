import express from 'express'
import mysql from 'mysql'
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app = express();

app.use(cors())

app.use(express.json())

console.log("test", process.env.DB_PORT);

const db = mysql.createConnection({
    connectTimeout: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME 
});

db.connect()

app.get('/',(req,res)=>{
    res.json("back end")
})

// news
app.get('/news',(req,res)=>{
    const q = "SELECT * FROM news"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post('/news',(req,res)=>{
    const q = 'INSERT INTO news (`userPic`,`title`,`desc`,`body`,`userName`,`mainPic`) VALUES (?)';
    const values =[
       req.body.userPic,
       req.body.title,
       req.body.desc,
       req.body.body,
       req.body.userName,
       req.body.mainPic
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json('blog has been created successfull')
    })
})

app.delete('/news/:id',(req,res)=>{
    const bookId = req.params.id;
    console.log(bookId)
    const q =`DELETE FROM news WHERE id = ${bookId}`
    // console.log("test",q)
    
    db.query(q,(err,data)=>{
        
        if(err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } 
        console.log('successfull')
        return res.json(data);
    })

})


// sports

app.get('/sports',(req,res)=>{
    const q = "SELECT * FROM sports"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post('/sports',(req,res)=>{
    const q = 'INSERT INTO sports (`userPic`,`title`,`desc`,`body`,`userName`,`mainPic`) VALUES (?)';
    const values =[
       req.body.userPic,
       req.body.title,
       req.body.desc,
       req.body.body,
       req.body.userName,
       req.body.mainPic
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json('blog has been created successfull')
    })
})

app.delete('/sports/:id',(req,res)=>{
    const bookId = req.params.id;
    console.log(bookId)
    const q =`DELETE FROM sports WHERE id = ${bookId}`
    // console.log("test",q)
    
    db.query(q,(err,data)=>{
        
        if(err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } 
        console.log('successfull')
        // console.log('json', json)
        return res.json(data);
    })

})



// entertainment

app.get('/entertainment',(req,res)=>{
    const q = "SELECT * FROM entertainment"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post('/entertainment',(req,res)=>{
    const q = 'INSERT INTO entertainment (`userPic`,`title`,`desc`,`body`,`userName`,`mainPic`) VALUES (?)';
    const values =[
       req.body.userPic,
       req.body.title,
       req.body.desc,
       req.body.body,
       req.body.userName,
       req.body.mainPic
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json('blog has been created successfull')
    })
})


app.delete('/entertainment/:id',(req,res)=>{
    const bookId = req.params.id;
    console.log(bookId)
    const q =`DELETE FROM entertainment WHERE id = ${bookId}`
    // console.log("test",q)
    
    db.query(q,(err,data)=>{
        
        if(err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } 
        console.log('successfull')
        // console.log('json', json)
        return res.json(data);
    })

})


// blog

app.get('/blog',(req,res)=>{
    const q = "SELECT * FROM blog"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post('/blog',(req,res)=>{
    const q = 'INSERT INTO blog (`userPic`,`title`,`desc`,`body`,`userName`,`mainPic`) VALUES (?)';
    const values =[
       req.body.userPic,
       req.body.title,
       req.body.desc,
       req.body.body,
       req.body.userName,
       req.body.mainPic
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json('blog has been created successfull')
    })
})

app.delete('/blog/:id',(req,res)=>{
    const bookId = req.params.id;
    const q =`DELETE FROM blog WHERE id = ${bookId}`
    // console.log("test",q)
    
    db.query(q,bookId,(err,data)=>{

        // console.log('bookId',bookId)
        
        if(err) return res.json(err)
        // console.log('json', json)
        return res.json('blog has been delete successfull')
    })

})


// message

app.get('/message', (req, res) => {
    const q = "SELECT * FROM message";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        // console.log(res.json(data))
        return res.json(data);
    });
});

app.post('/message',(req,res)=>{
    const q = 'INSERT INTO message (`name`,`phone`,`mail`,`message`) VALUES (?)';
    const values =[
       req.body.name,
       req.body.phone,
       req.body.mail,
       req.body.message
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json('message has been created successfull')
    })
})


app.delete('/message/:id',(req,res)=>{
    const bookId = req.params.id;
    const q =`DELETE FROM message WHERE id = ${bookId}`
    // console.log("test",q)
    
    db.query(q,bookId,(err,data)=>{

        // console.log('bookId',bookId)
        
        if(err) return res.json(err)
        // console.log('json', json)
        return res.json('message has been delete successfull')
    })

})





app.listen(8001,()=>{
    console.log("connected to back end")
})
