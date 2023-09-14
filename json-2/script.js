

fetch('https://fakestoreapi.com/products').then((data)=>{
 return data.json();
}).then((alldata)=>{
    let showAlldata ="";
    alldata.map((values)=>{
        showAlldata+=`
        
        <img src="${values.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${values.title}</h5>
          <p class="card-text">${values.description}</p>
          <p class="card-text">${values.category}</p>
          <p class="card-text">${values.price}</p>
          
        </div>
        
        `
    });
    document.getElementById("api_data").innerHTML=showAlldata;
}).catch((err)=>{
    console.log(err);
});