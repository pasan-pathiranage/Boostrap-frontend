document.addEventListener("DOMContentLoaded", function(){
    getCategoriies();
});

const getCategoriies = () =>{
    fetch("http://localhost:8080/categories")
    .then((responce) =>{ 
        return responce.json();
    }).then((data) => {
        
        let categorySelect = document.getElementById('categoryId');
       

        data.map((category)=> {
            const option = document.createElement('option');
            option.value = category.id;
            option.text = category.name;
            categorySelect.appendChild(option);
        });
        
    }).catch((error) => {
        console.log(error);
    });
}

const createProduct = (event) =>{
    event.preventDefault();

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let qty = document.getElementById("qty").value;
    let categoryId = document.getElementById("categoryId").value;

    //validation code
    let data = {
        "name":name,
        "price" : price,
        "qty" : qty,
        "categoryId" : categoryId
    }

    fetch("http://localhost:8080/products", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json"
        }
    }).then((responce) =>{
        return responce.json();
    }).then((data) =>{
       window.location.href = "file:///C:/Users/User/Frontend/ProductApp/index.html"
    }).catch((error) => {
        console.log(error);
    })

}