// como levantar un servidor en el puerto 3030 con Node y Express

const express = require('express');
const app = express();  //siempre se va a utilizar la funcion de express

const port = 3030  

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`)) 

// siempre que quieras realizar un cambio en el servidor hay q reiniciarlo
//corroborar tener el servidor levantado solamente en una sola terminal de bash


