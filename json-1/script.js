fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();

}).then((completedata)=>{
    //console.log(completedata[2].title);
   let data1="";
   completedata.map((values)=>{
    data1+=`
    <tr>
      <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price}</td>
      <td>${values.category}</td>
      <td><img src="${values.image}" /></td>
    </tr>
  `
   });
   document.getElementById("fake_data").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
});
            
