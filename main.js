// cake-1 
document.getElementById('cakeOneOrderbtn').addEventListener('click',function(){
    getIds('cakeName','cakeOneQuantity','cakeOnePrice','cost','cakeName','showQuantity')

})
// cake-2 
// const cakeNameTwo=document.getElementById('cakeNameTwo').innerText;
document.getElementById('cakeTwoOrderbtn').addEventListener('click',function(){
    getIds('cakeName','cakeTwoQuantity','cakeTwoPrice','cost','cakeName','showQuantity')
})
// cake-1 
// const cakeNameThree=document.getElementById('cakeNameThree').innerText;
document.getElementById('cakeThreeOrderbtn').addEventListener('click',function(){
    getIds('cakeName','cakeThreeQuantity','cakeThreePrice','cost','cakeName','showQuantity')
})


function getIds(id1,id2,id3,id4,id5,id6){
    const cakeName=document.getElementById(id1).innerText;
    const cakeQuantity=document.getElementById(id2).value;
    const quantityVal=parseInt(cakeQuantity);
    const cakePrice=document.getElementById(id3).innerText;
    const cakePriceVal=parseInt(cakePrice);
    const orderResult= cakePriceVal * quantityVal;
    document.getElementById(id4).innerText=orderResult;
    document.getElementById(id5).innerText=cakeName;
    document.getElementById(id6).innerText=cakeQuantity;

}


// discount function 
document.getElementById('discountBtn').addEventListener('click',function(){
    let couponCode=document.getElementById('couponCode').value;
    if(couponCode === '1010'){
        let cost=document.getElementById('cost').innerText;
        // console.log(cost);
        let costVal=parseInt(cost);
        let discountResult=costVal - (costVal * 0.05);
        document.getElementById('total').innerText=discountResult;
    }else{
        alert('wrong coupon code!!');
    }
    
})