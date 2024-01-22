let card=""
let cardList=""
document.addEventListener("DOMContentLoaded", createItemCard=>{
  products.forEach((item, index)=>{
    let itemList=document.getElementById("itemList")
    
    if(index==0){
      card=
        `<div class="row">
          <div class="card col-4 p-2 m-2" style=width:15rem;height:30rem;>
            <img src="${item.img}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
              <a href="#" class="btn btn-primary" id="${item.name}">Add to cart</a>
            </div>  
          </div>`
      
    }else if(index+1==products.length){ 
      card=
        `
          <div class="card col-4 p-2 m-2" style=width:15rem;height:30rem;>
            <img src="${item.img}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}potato</h5>
              <p class="card-text">${item.description}</p>
              <a href="#" class="btn btn-primary" id="${item.name}">Add to cart</a>
            </div>
          </div>
        </div>`
    }else if((index+1)%3==0){
      card =
        `
          <div class="card col-4 p-2 m-2" style=width:15rem;height:30rem;>
            <img src="${item.img}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
              <a href="#" class="btn btn-primary" id="${item.name}">Add to cart</a>
            </div>
          </div>
        </div>
        <div class="row">`
    }else {
      card=
      
        `<div class="card col-4 p-2 m-2" style=width:15rem;height:30rem;>
          <img src="${item.img}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary" id="${item.name}">Add to cart</a>
          </div>
        </div>`              
      
      
      
    }
     cardList+= card
    
    
  
  })
  itemList.innerHTML= itemList.innerHTML + cardList
});

/*`<li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">${item.name}</h6>
                <small class="text-body-secondary">${item.description}</small>
              </div>
              <span class="text-body-secondary">${item.price}</span>
            </li>`;*/