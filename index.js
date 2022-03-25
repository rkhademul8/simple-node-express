
const express=require('express')
const cors = require('cors')
const app=express()
const port=process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hi I am from  ')
})


const users=[
    {id:0,name:'Shabana',email:'shaba@gmail.com'},
    {id:1,name:'Shapala',email:'Shapala@gmail.com'},
    {id:2,name:'Soniya',email:'Soniya@gmail.com'},
    {id:3,name:'Borna',email:'Borna@gmail.com'},

]
app.get('/users',(req,res)=>{
    const search= req.query.search
    if(search){
        const searchResult=users.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()))
        res.send(searchResult)
    }
   else{
    res.send(users)
   }
})



app.get('/users/:id',(req,res)=>{

    // console.log(req.params.id);
    const id=req.params.id
    const user=users[id]
    res.send(user)
})

app.listen(port,()=>{
    console.log('Listening to port',port);
})



app.get('/fruits/mango/fazli',(req,res)=>{
    res.send('mango mango')
})


//  post method

app.post('/users',(req,res)=>{
    const newUser=req.body
    newUser.id=users.length
    users.push(newUser)
    console.log("hitting the post", req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})