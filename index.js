const express = require('express')
const fs = require('fs');

let app = express();
app.use(express.json());


app.get('/', async (req,res) => {
    let html = await fs.promises.readFile('./src/html/calc.html', 'utf-8');
    res.send(html);

});

app.post('/calc', (req, res) => {

   let data = req.body;
   let r = 0;

   if(data.op == 'add'){ 
    r = data.num1 + data.num2;
} else if (data.op == 'sub') {
    r = data.num1 - data.num2;
} else if (data.op == 'mul') {
    r = data.num1 * data.num2;
}else if (data.op == 'div') {
    r = data.num1 / data.num2;
}
   
   
   let result = { result: r };
    res.send(JSON.stringify(result));
});

app.listen(3000, () => {

console.log('Servidor rodando na porta 3000');

});