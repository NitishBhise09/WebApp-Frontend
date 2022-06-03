main_explore = document.querySelector(".main_explore");
cart_parent_explore = document.querySelector(".cart_parent_explore");
main_explore = document.querySelector(".main_explore");
cart_parent_explore = document.querySelector(".cart_parent_explore");
categories_main = document.querySelector(".categories_main");

const opencart = () => {
    main_explore.style.display = "none";
    categories_main.style.display = "none";
    cart_parent_explore.style.display = "block";
};
const homepage = () => {
    main_explore.style.display = "block";
    cart_parent_explore.style.display = "none";
    categories_main.style.display = "none";
};

const add_product = (price, total_price, total_items, saved_money, save_money, product_img, product_name, amount) => {
    price = document.querySelector("." + price);
    total_price = document.querySelector("." + total_price);
    total_items = document.querySelector("." + total_items);
    save_money = document.querySelector("." + save_money);
    saved_money = document.querySelector("." + saved_money);
    product_img = document.querySelector("." + product_img);
    product_name = document.querySelector("." + product_name);
    amount = document.querySelector("." + amount);
    empty_div = document.querySelector(".empty_div");
    // console.log(product_img.src);
    var no_of_items = 0;

    empty_div.style.display = "none";

    total_price.innerHTML = parseInt(total_price.innerHTML) + parseInt(price.innerHTML);
    saved_money.innerHTML = parseInt(saved_money.innerHTML) + parseInt(save_money.innerHTML);
    total_items.innerHTML = parseInt(total_items.innerHTML) + 1;

    //creating class elements
    var container_cart = document.querySelector(".cart_list_items");
    let new_cart = document.createElement("div");
    new_cart.setAttribute("class", "cart_item_list");
    container_cart.appendChild(new_cart);

    let left_div = document.createElement("div");
    left_div.classList.add("cart_left");
    new_cart.appendChild(left_div);

    let cart_image = document.createElement("img");
    cart_image.setAttribute("src", product_img.src);
    left_div.appendChild(cart_image);

    let cart_left_content = document.createElement("div");
    cart_left_content.classList.add("cart_left_content");
    left_div.appendChild(cart_left_content);

    let head1 = document.createElement("h1");
    head1.innerHTML = product_name.innerHTML;
    let head4 = document.createElement("h4");
    head4.innerHTML = amount.innerHTML.split("g")[0] + " gms";

    let para = document.createElement("p");
    para.innerHTML = "Save ₹";

    cart_left_content.append(head1, head4, para);

    let span_save = document.createElement("span");
    span_save.innerHTML = save_money.innerHTML;
    para.appendChild(span_save);

    let cart_right_content = document.createElement("div");
    cart_right_content.classList.add("cart_right_content");
    new_cart.appendChild(cart_right_content);

    let para_price = document.createElement("p");
    para_price.classList.add("cart_main_price");
    para_price.innerHTML = "₹";
    cart_right_content.appendChild(para_price);

    let span_price = document.createElement("span");
    span_price.innerHTML = price.innerHTML;
    para_price.appendChild(span_price);

    // console.log(saved_money.innerHTML);
};

// ===================drop down============================

const show_title = (lists) => {
    // alert("clicked");
    document.querySelector(".dp_head").innerText = lists;
};

let dropdown = document.querySelector(".dropdown");
let dp_head_span = document.querySelector(".dp_head_span");

dropdown.onclick = function () {
    dropdown.classList.toggle("active_dropdown");
    dp_head_span.classList.toggle("active_dropdown");
    console.log(dropdown);
};

// console.log(dp_head);
// console.log(list_clicked);
// dp_head.innerText = lists;

// ========================categories==================================
const section = document.querySelector(".body_explore");
const view_all = document.querySelectorAll(".view_all");
const child_exlpore = document.querySelectorAll(".child_exlpore");

section.addEventListener("click", (e) => {
    const view_all_clicked = e.target;
    // console.log(view_all_clicked);

    // categories_main.style.display = "block";
    // main_explore.style.display = "none";
    if (view_all_clicked.getAttribute("class") == "view_all") {
        categories_main.style.display = "block";
        main_explore.style.display = "none";

        // view_all_butnum = view_all_clicked.dataset.btnNum;
        // console.log(view_all_butnum);

        // const list_active = document.querySelectorAll(`.list-active--${view_all_butnum}`)
        // console.log(list_active);

        // child_exlpore.forEach((item)=>{
        //     item.classList.add("item_hide");
        // })
        // list_active.forEach((item)=>{
        //     item.classList.remove("item_hide");
        // })
    }

    // list-active--6
});
