document.addEventListener('DOMContentLoaded', function(){ //document.ready

  document.getElementById('opennav').onclick = function(e){
      e.preventDefault();
      document.getElementById("mySidenav").style.top = "0";
      document.getElementById("mySidenav").style.opacity = "1";
  }

  document.getElementById('closenav').onclick = function(e){
      e.preventDefault();
      document.getElementById("mySidenav").style.top = "-500%";
      document.getElementById("mySidenav").style.opacity = "0";
  }

  $('.sidenav a[href*="#"]').on('click', function(e) {
    $(this).parent('li').find('.sub-menu').slideToggle();
  });


});


