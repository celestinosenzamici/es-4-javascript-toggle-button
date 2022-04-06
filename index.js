var bottone=document.getElementById("mostra");
      
      bottone.addEventListener("click",mostra);
      
      function mostra(){
              var div = document.getElementById("messaggio");
              const display = window.getComputedStyle(div).display;
              div.style.display = (display == "none")? "block" : "none" ;
             }