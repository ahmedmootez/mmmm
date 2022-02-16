
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/pp',(req,res)=>{
    console.log('ahmed')
})


app.listen(3000,()=>{console.log('server run in port 3000')})
