document.addEventListener("DOMContentLoaded", function(){
    getProducts();

});

const getProducts = () => {
    fetch("http://localhost:8080/products").then ((response) =>{
        console.log(response);

    }).catch((error) => {
        console.log(error);
    }); 
}
