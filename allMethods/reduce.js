const message = ["javaScript ","is ","fun"];
//function to join string elemets

let operation = message.reduce((h1,h2)=>{
    return h1+h2
})

console.log(operation)