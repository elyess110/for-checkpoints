var all = document.getElementById('all').textContent
var price = document.getElementById('price').textContent

function add(){
    all++
    document.getElementById('all').textContent=all
    allgo()
}
function less(){
    if(all<1){
        return 1
    }else{
    all--
    document.getElementById('all').textContent=all
    }
    allgo()
}
function allgo(){
   var totalprice = all*price
    document.getElementById('price').textContent=totalprice
}
function shopcard(){
var img=document.getElementById('pc1').src
var totalprice=document.getElementById('price').textContent
var object
object={
    price:totalprice,
    quantity:all,
    image:img
 }
 sessionStorage.setItem('data',JSON.stringify(object))
}
function getdata(){
    var object = JSON.parse(sessionStorage.getItem('data'))
    document.getElementById('pc1').src=object.image
    document.getElementById('all').textContent=object.quantity
    document.getElementById('price').textContent=object.price
}
