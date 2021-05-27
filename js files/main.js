var products =[{cat:"coffe" ,name:"espresso",price:3.000,img:"photos\coffee\espresso"},
           {cat:"coffe" ,name:"direct",price:4.500,img:"photos\coffee\direct"},
           {cat:"coffe" ,name:"cappuccino",price:3.500,img:"photos\coffee\cappuccino"},
           {cat:"juice" ,name:"orange",price:5.500,img:"photos\juice\orange"},
           {cat:"juice" ,name:"kiwi",price:6.500,img:"photos\juice\kiwi"},
           {cat:"juice" ,name:"cocktail",price:7.000,img:"photos\juice\cocktail"},
           {cat:"water" ,name:"normal",price:2.000,img:"photos\water\normal"},
           {cat:"water" ,name:"carbonated",price:4.500,img:"photos\water\carbonated"},
           {cat:"chicha" ,name:"apple",price:10.000,img:"photos\chicha\apple"},
           {cat:"chicha" ,name:"classic",price:9.000,img:"photos\chicha\classic"},          
          ];
    

var tables =[{table:"One"},{table:"Two"},{table:"Three"},{table:"Four"},{table:"Five"},{table:"Six"},{table:"Seven"},{table:"Eight"},{table:"Nine"},]

function table(tables){
    for (var i=0;i<tables.length; i++){
        $(".cards-list").append('<div class="card 2"><div class="card_image"><img src="../photos/table.jpg" /></div><div class="card_title title-white"><p>'+tables[i].table+'</p></div></div>"')
    }
}
table(tables)