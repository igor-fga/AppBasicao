$(document).ready(function(){
  $('.sidenav').sidenav();
});


function hideAllPages() {
  $("#loginPage,#formPage,#mapPage").hide();
}

function showLoginPage() {
  hideAllPages();
  $("#loginPage").show();
}

function showFormPage() {
  hideAllPages();
  $("#formPage").show();
  listForm();
}

function showMapPage() {
  hideAllPages();
  $("#mapPage").show();
}   