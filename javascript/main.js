 $(document).ready(function() 
{

setTimeout(fade_out, 9000);
    function fade_out() {
      $(".msgErros").fadeOut("slow" );
    }
    $( ".msgserroicon" ).click(function() {
      $( this ).parent().fadeOut("slow" );
    });
});


var shoppingCart = {};

 function incrementMat(material_id,max,equipa){
    var value = parseInt($('#mat_'+material_id).html());
    if(isNaN(value)){
      value = 0;  
    }

    if(value < max){
        value++;
        $('#mat_'+material_id).html(value);
        updateCredits(material_id,1,equipa);
        updateCart(value,equipa,material_id);
        
    }


 }

 function decrementMat(material_id,equipa){
    var value = parseInt($('#mat_'+material_id).html());
    
    if(isNaN(value) || value === 0){
      
      return;  
    } 
    if(value > 1){
        value--;
        updateCredits(material_id,-1,equipa);
        updateCart(value,equipa,material_id);
        
    }else if(value===1){
        value = '-';
        updateCredits(material_id,-1,equipa);
        updateCart(0,equipa,material_id);
    }
    
    

    $('#mat_'+material_id).html(value);
 }

 function setMat(material_id,k,equipa){
    var prevK = $('#mat_'+material_id).html();
    k = parseInt(k);
    if(prevK<'0'){
        prevK = 0;
    }

    updateCredits(material_id,k-prevK,equipa);
    updateCart(k,equipa,material_id);

    if(k === 0){
        k = '-';
    }
    $('#mat_'+material_id).html(k);

 }

 function updateCart(k,equipa,material_id){
    var found=false;
    for(var i = 0;i<shoppingCart[equipa].length;i++)
        if(shoppingCart[equipa][i].material==material_id)
        {
            found=true;
            if(k===0)
                shoppingCart[equipa].splice(i,1);
            else
                shoppingCart[equipa][i].quantidade=k;
            i=shoppingCart[equipa].length;
        }
    var material = {"material":material_id,"quantidade":k};
    if(!found && k !== 0)
        shoppingCart[equipa].push(material);
    
 }

 function updateCredits(material_id,k,equipa){
    var value = k * parseInt($('#mat_'+material_id+'_price').html());
    var prevValue = parseInt($('#remaining_creds').html());
    var limit = parseInt($('#mat_'+material_id+'_limit').html());
    $('#mat_'+material_id+'_limit').html(limit-k);
    $('#remaining_creds').html(prevValue-value);

    var result = $.grep(shoppingCart, function(e){ return e.id === id; });
    if(typeof shoppingCart[equipa] == "undefined")
        shoppingCart[equipa]=Array();
 }

 function checkout(url,equipa,baseUrl){

    var materials = 
    $.post( url, {"cart":shoppingCart[equipa],"id_equipa":equipa})
      .done(function( data ) {
        window.location=baseUrl;
      });
 }
