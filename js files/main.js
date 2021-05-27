var products =[{cat:"coffe" ,name:"Espresso",price:3.000,img:"../photos/coffee/espresso.jpg"},
           {cat:"coffe" ,name:"Direct",price:4.500,img:"../photos/coffee/direct.jpg"},
           {cat:"coffe" ,name:"Cappuccino",price:3.500,img:"../photos/coffee/cappuccino2.jpg"},
           {cat:"juice" ,name:"Orange",price:5.500,img:"../photos/juice/orange.jpg"},
           {cat:"juice" ,name:"Kiwi",price:6.500,img:"../photos/juice/kiwi.jpg"},
           {cat:"juice" ,name:"Cocktail",price:7.000,img:"../photos/juice/cocktail.jpg"},
           {cat:"water" ,name:"Normal",price:2.000,img:"../photos/water/normal.jpg"},
           {cat:"water" ,name:"Narbonated",price:4.500,img:"../photos/water/carbonated.jpg"},
           {cat:"chicha" ,name:"Apple",price:10.000,img:"../photos/chicha/apple.png"},
           {cat:"chicha" ,name:"Classic",price:9.000,img:"../photos/chicha/classic.png"},          
          ];
    

var tables =[{table:"One"},{table:"Two"},{table:"Three"},{table:"Four"},{table:"Five"},{table:"Six"},{table:"Seven"},{table:"Eight"},{table:"Nine"},]


function table(tables){
    var counter=0;
    for (var i=0;i<tables.length; i++){
        $(".cards-list").append('<div id= '+ counter++ +' class="card 2"><div class="card_image"><img src="../photos/table.jpg" /></div><div class="card_title title-white"><p>'+tables[i].table+'</p></div></div>"')
    }
}

table(tables)
function product(products){  
    for (var i=0;i<products.length; i++){
        $(".prod-list").append('<div id= '+ i +' class="card 2" ><div class="card_image"><img src="'+products[i].img+'" /></div><div class="card_title title-white"><p></p></div></div>"')
    }
}


product(products)
/*
function orders(i){
    var clic=$(this).attr('id')
    $(".items").append(products[i].name)
}
*/

/*
var Espresso = document.getElementById('1');
var items = document.getElementById('items');
Espresso.click=function(){
    items.append('<h1>test</h1>')
}
*/


    for (var i=0; i<products.length;i++){
        $('#'+i).click(function(){
            for (var i=0;i<products.length; i++){
                if(products[i].name===id)
                $('#items').append('<h5>'+products[i].name+'</h5><h5>'+products[i].price+'</h5><button>delete</button>')
            }
            
    })
}




