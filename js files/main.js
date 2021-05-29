/////////////ARRAY OF PRODUCTS
var products =[{cat:"coffe" ,name:"Espresso",price:3.000,img:"../photos/coffee/espresso.jpg"},
           {cat:"coffe" ,name:"Direct",price:4.500,img:"../photos/coffee/direct.jpg"},
           {cat:"coffe" ,name:"Cappuccino",price:3.500,img:"../photos/coffee/cappuccino2.jpg"},
           {cat:"juice" ,name:"Orange",price:5.500,img:"../photos/juice/orange.jpg"},
           {cat:"juice" ,name:"Kiwi",price:6.500,img:"../photos/juice/kiwi.jpg"},
           {cat:"juice" ,name:"Cocktail",price:7.000,img:"../photos/juice/cocktail.jpg"},
           {cat:"water" ,name:"Normal Water",price:2.000,img:"../photos/water/normal.jpg"},
           {cat:"water" ,name:"Carbonated Water",price:4.500,img:"../photos/water/carbonated.jpg"},
           {cat:"chicha" ,name:"Chicha Apple",price:10.000,img:"../photos/chicha/apple.png"},
           {cat:"chicha" ,name:"Chicha Classic",price:9.000,img:"../photos/chicha/classic.png"},          
          ];

         
////////ARRAY OF TABELS
var tables ={one: [],two:[] ,three: [],four: [],five: [],six: [],seven: [],eight: [],nine: []}
// localStorage.setItem('tables',JSON.stringify(tables)) 
//////////////FUNCTION TABELS
function table(tables){
    var i = 0
    for (var key in tables){
        // localStorage.setItem(key,JSON.stringify([]))
        $(".cards-list").append('<a href="order.html"><div id='+ key +' class="cardtable" ><div class="card_image"><img src="../photos/table.jpg" /></div><div class="card_title title-white"><p>'+key+'</p></div></div></a>')
        i++
    }
}

table(tables)

/////////////////FUNCTION PRODUCTS appends selected 
function product(products){  
    for (var i=0;i<products.length; i++){
        $(".prod-list").append('<div id='+ i +' class="card"><div class="card_image"><img src="'+products[i].img+'" /></div><div class="card_title title-white"></div></div>"')
    }
}


product(products)
///////////////TO CLICK AND GIT ORDERS
var count = 0 
var parsed =[]
$('.card').click(function(){

    

    // var addedItems=[];
    var selectedProduct = $(this).attr('id');
    var selectedTable = JSON.parse(localStorage.getItem('table'))
    // console.log(selectedTable);
    var table = JSON.parse(localStorage[selectedTable])
    // console.log(table);
    table.push(products[selectedProduct])
    localStorage.setItem(selectedTable,JSON.stringify(table))
    
    $('#items').append('<span id="n'+count+'">'+'..................'+products[selectedProduct].name+'   : '+'</span>'+'<span id="n'+count+'">'+products[selectedProduct].price+'  DT '+'</span>'+'<button class="btn" id="n'+count+'" onclick="deleteProduct('+count+')">delete</button>');
    count++
    // function total(){
    //     var total=0;
    //     total=total+products[selectedProduct].price;
    //     $('#total').html('');
    //     $('#total').html('Total = 'total);

    // }
    // total();



})
// function for deleteing product from order list
function deleteProduct(prodId){

   $(`#n${prodId}`).remove()
   $(`#n${prodId}`).remove()
   $(`#n${prodId}`).remove()

}
/////////////////TO CLICK TO GET OUR NUMBER OF TABLE
$('.cardtable').click(function(){
    var selectedTable = $(this).attr('id');
    // console.log(selectedTable);
    //console.log(tables[selectedTable]);
    localStorage.setItem('table',JSON.stringify(selectedTable));
})
var tableNumber= localStorage.getItem('table');
var tableNumber2=JSON.parse(tableNumber)
$('#items').append('<span> Table :  '+tableNumber2+'</span>')
//////////////////
/////////////////////////
///////////////////////////////
// sending order to another div
$('#sendorder').click(function(){
    var selectedProduct = $(this).attr('id');
    $("#dd").animate({
        width: "toggle",
        right: '250px',
    })
    var table = JSON.parse(localStorage.getItem('table'))
    var ORDERS = JSON.parse(localStorage[table])
   for(var i =0;i<ORDERS.length;i++){
    $('#items1').append('<span id="n'+count+'">'+'.....Table :'+table+'   : '+'</span>'+'<span id="n'+count+'">'+ORDERS[i].name+' :'+'</span>'+'<span id="n'+count+'">'+ORDERS[i].price+' DT'+'</span>');

   }
   $('#items1').append('<button class="button" id="n'+count+'" onclick="deleteProduct('+count+')">Update</button>')

})



        
    









