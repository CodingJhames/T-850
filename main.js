

let shop = document.getElementById('shop');

let shopItemsData = [
    {
    id: "000",
    name: "Casual Shirt",
    price: 45,
    desc: "lorem ipsum caelum, Civitas Dei Civitas Diaboli",
    img: "/images/img-1.jpg"
},{
    id: "001",
    name: "Office Shirt",
    price: 100,
    desc: "lorem ipsum caelum, Civitas Dei Civitas Diaboli",
    img: "/images/img-2.jpg"
},{
    id: "002",
    name: "T-Shirt",
    price: 25,
    desc: "lorem ipsum caelum, Civitas Dei Civitas Diaboli",
    img: "/images/img-3.jpg"
},{
    id: "003",
    name: "Mens Suit",
    price: 300,
    desc: "lorem ipsum caelum, Civitas Dei Civitas Diaboli",
    img: "/images/img-2.jpg"
}];

let generateShop = () => {

    return shop.innerHTML = shopItemsData.map( ( { id, name, price, desc, img} ) => {

        return `
        <div id=product-id-${id} class="item">
           <img width="230" src=${img} alt="">
           <div class="details">
               <h3>${name}</h3>
               <p>${desc}</p>
               <div class="price-quantity">
                   <h2>${price}</h2>
                   <div class="buttons">
                       <i class="bi bi-plus-lg"></i>
                       <div id=${id} class="quantity">0</div>
                       <i class="bi bi-dash-lg"></i>
                   </div>
               </div>
           </div>
        </div>
        `
    }  ).join("");
    
};

//    return shop.innerHTML = shopItemsData.map( ( x ) => { 
//         return `
//        <div class="item">
//        <img width="230" src="/images/img-1.jpg">
//        <div class="details">
//            <h3>Casual Shirt</h3>
//            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//            <div class="price-quantity">
//                <h2>$ 45</h2>
//                <div class="buttons">
//                    <i class="bi bi-plus-lg"></i>
//                    <div class="quantity">0</div>
//                    <i class="bi bi-dash-lg"></i>
//                </div>
//            </div>
//        </div>
//        `
//    });

    


    

generateShop();

