(function(){

  function trackConversion(selector,label,redirect=true){

    document.querySelectorAll(selector).forEach(function(btn){

      btn.addEventListener("click",function(e){

        const url = btn.getAttribute("href");

        if(redirect && url){
          e.preventDefault();
        }

        if(typeof gtag === "function"){
          gtag('event','conversion',{
            'send_to':label,
            'event_callback':function(){
              if(redirect && url){
                window.location.href = url;
              }
            }
          });
        }

        if(redirect && url){
          setTimeout(function(){
            window.location.href = url;
          },800);
        }

      });

    });

  }

  trackConversion(".btn-line","");
  trackConversion(".btn-wa","");
  trackConversion(".btn-fb","");
  trackConversion('a[href^="tel:"]',"",false);

})();