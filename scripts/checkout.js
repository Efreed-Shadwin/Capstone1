
document.addEventListener("DOMContentLoaded", createItemCard=>{
  products.forEach(item=>{
    let itemList=document.getElementById("itemList")
    itemList.innerHTML= itemList.innerHTML +
  `<div class="col-lg-4 mb-3">
      <div class="card flex-item" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
        <h5 class="card-title">C${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <a href="#" class="btn btn-primary" id="${item.name}">Add to cart</a>
      </div>
    </div>
  </div>`
  })
});

`<li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">${item.name}</h6>
                <small class="text-body-secondary">${item.description}</small>
              </div>
              <span class="text-body-secondary">${item.price}</span>
            </li>`;