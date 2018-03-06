let promesa1 = new Promise( function( resolve, reject ){
    setTimeout(()=>{
        console.log("promesa terminada");
        resolve();
        // promesa con error ->
        // console.error("promesa terminada con error");
        // reject();
    },1500);
});
console.log("paso1");
// la promesa es una funcion asincrona
promesa1.then(()=>{
    console.log("funcion ejecutada porq todo salio bien");
},()=>{
    console.log("funcion ejecutada porq todo salio mal");
})
console.log("paso2");