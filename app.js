var Current_Q,Current_A;
function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

      function openURL(url){
        window.open(url, 'Share');
      }
       var Q=new Array(80);
       console.log(Q);
      $(document).ready(function() {

        var res=[],cont=0; 
                  $.getJSON('https://codepen.io/loomernescent/pen/LRGRaB.js', function(json) {
                    var str=JSON.stringify(json);
                     res = str.split('"');
                    
                    for(var i=0;i<res.length-10;i++){
                    
                      if(res[i]==="quote")
                      {
                          Q[cont]=res[i+2];
                          Q[cont+1]=res[i+6];
                          Q[cont+2]=res[i+10];
                         
                          cont+=3;
                        }
                       
                        
                      }
                      return Q;
                  });
            
     var Post= function (){
       var x=parseInt(Math.random()*22);
       return x;
     };
     var p=0;
   console.log(Q);
     $("#getQuote").on("click", function(){

      p=Post()*3;
      Current_Q=Q[p];
      Current_A=Q[p+1];
      $("#quot").html(Q[p]);
      $("#Author").html(Q[p+1]);
      

    });
    $('#social').on('click', function() {
      if(!inIframe() && Current_Q!==undefined) {
        
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + Current_Q + '" ' + 'by: '+ Current_A));
                }
}); 
      });
