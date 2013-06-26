// add-cart.js JScript source code

        var formName = "egrips";
        var hardwarePrice = 2.00;

        function addCart(){
						
            if(document.getElementById("option2").checked)
            {
                document.getElementById("quantityInput").name = document.getElementById("option2").value;
            }else // option1 is selected
            {
                 document.getElementById("quantityInput").name = document.getElementById("option1").value;
            }
           document.egrips.submit()

        }
        
        //takes option prices and sets the values according to products checked. ie: 3 options, 3 prices
        
        function addItemToCart(){
            
            if(addItemToCart.arguments){
                for(i=1; i<= addItemToCart.arguments.length; i++){
                    var option = "option" +i;
                    if(document.getElementById(option).checked)
                    {
                        document.getElementById("item_name").value = document.getElementById(option).value;
                        document.getElementById("price").value = addItemToCart.arguments[i-1];
                    }
                }//for
                
                document.egrips.submit();
                
            }//if

         }