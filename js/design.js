const ticketPrice= document.getElementById("ticket_price");
const priceText=parseFloat(ticketPrice.innerText) ;

let titleCount =1;
let totalPrice=0;

const seat=document.querySelectorAll(".seats");




 for(let i=0; i<seat.length; i++)
{
    const seats= seat[i];
    seats.addEventListener("click", function() {

        const heading=seats.querySelector("h2")
        const headingText= heading.innerText;


        const title=seats.querySelector("h3");
       const titleText= title.innerText;


       const appendItems1=document.getElementById("append_items1");
const p1=document.createElement("p");
p1.innerText=titleCount + ". " + headingText;
appendItems1.appendChild(p1);
titleCount++;

const appendItems2=document.getElementById("append_items2");
const p2=document.createElement("p");
p2.innerText=titleText;
appendItems2.appendChild(p2);

const appendItems3=document.getElementById("append_items3");
const p3=document.createElement("p");
p3.innerText=priceText;
appendItems3.appendChild(p3);

const numIncrease=document.getElementById("num_increase");
numIncrease.innerText=titleCount-1;

// const seatsLeft = document.getElementById("seats_left");
// const numSeatsLeft=parseFloat(seatsLeft.innerText)
// console.log(numSeatsLeft)
// const numSeatsRight=numSeatsLeft-titleCount;
// seatsLeft.innerText=numSeatsRight;


totalPrice = totalPrice+ priceText;
document.getElementById("total_price").innerText=totalPrice;

    } );
        

}


const btn = document.getElementById('apply-btn')
btn.addEventListener("click", function(){
    const coupon= document.getElementById("input-field").value;
    const new15=coupon.split('').join("").toUpperCase();
    const couple20=coupon.split('').join("").toUpperCase();
 
if(new15==="NEW15"){
const discountedPrice=document.getElementById("discounted_price");
const discountedAmount=totalPrice*.15;
const finalPrice= totalPrice- discountedAmount;
discountedPrice.innerText=finalPrice;
hid_content.classList.add('hidden');




}

else if(couple20==="COUPLE20"){
    const discountedPrice=document.getElementById("discounted_price");
const discountedAmount=totalPrice*.2;
const finalPrice= totalPrice- discountedAmount;
discountedPrice.innerText=finalPrice;
hid_content.classList.add('hidden');

}
else{
    alert("Invalid Coupon");
}



})


