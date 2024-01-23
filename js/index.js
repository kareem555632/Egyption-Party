// ================> start <==================>
// =========================================>


$('.close').on('click',function(){
    $('nav').animate({width:'toggle',padding:'toggle'},2000);
  
  })
  $('.icon').on('click',function(){
    $('nav').animate({width:'toggle',padding:'toggle'},2000);
  
  })

  $("h3").click(function (eInfo) {
    $("p").not ( $ (eInfo.target).next() ).slideUp(500)
    $(eInfo.target).next().slideToggle(500);
  })
  
  
  let coutDownDate=new Date("Dec 31, 2024 23:59:59").getTime();
  let counter=setInterval(() => {
    let dateNow=new Date().getTime();
  let dateDiff= coutDownDate-dateNow; 
  
  let days =Math.floor( dateDiff  / (1000 * 60 * 60 * 24));
  let hours=Math.floor((dateDiff % (1000*60*60*24))/ (1000 * 60 * 60));
  let minute=Math.floor((dateDiff % (1000*60*60))/ (1000 * 60 ));
  let second=Math.floor((dateDiff % (1000*60))/ (1000));
  
  document.getElementById('day').innerHTML= days + " " + 'D'
  document.getElementById('hours').innerHTML= hours + " " + 'h'
  document.getElementById('minute').innerHTML=minute<10?`0${minute + " " + 'm'}` : minute + " " + 'm';
  document.getElementById('second').innerHTML= second<10?`0${second + " " + 's'}` : second + " " + 's';
  }, (1000));
  
  function updateCount() {
    var maxLength = 100;
    var userInput = document.getElementById("userInput").value;
    var remainingChars = maxLength - userInput.length;
  
    if (remainingChars >= 0) {
      document.getElementById("charCount").innerHTML = remainingChars;
    } else {
      // يمكنك تنفيذ أي إجراء آخر هنا عند تجاوز الحد الأقصى
      document.getElementById("charCount").innerHTML = "your available character finished ";
    }
  }
  
  $(function(){
    $('.loader').fadeOut(1500,function(){
      $('.loading').slideUp(1500,function(){
        $('body').css('overflow','auto')
        $('.loading').remove();
      });
    });
    }) 
  
    $('.link-item').on('click',function(e){
   let aHref=  e.target.getAttribute('href');
      let sectionOffset=$(aHref).offset().top;
      $('html,body').animate({scrollTop:sectionOffset},2000)
  
    })
  
    $(window).on('scroll',function(){
      let windowScroll = $(window).scrollTop();
      if(windowScroll>350){
        $('.icon').css("backgroundColor","#d62e33")
      }else{
        $('.icon').css('backgroundColor','transparent');
      }
    })



    // ================> end <==================>
// =========================================>
  