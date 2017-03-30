$("#file").on("click",function() {
  // $("#file").toggleClass("focused");
  $(".dropdown").toggleClass("dropdown-clicked");
})

$("#file").on("focusout", function() {
  $(".dropdown").removeClass("dropdown-clicked");
})

$("#edit").on("click",function() {
  $("#edit").toggleClass("focused");
  $(".edit-dropdown").toggleClass("edit-clicked");
})

$("#edit").on("focusout",function() {
  $(".edit-dropdown").removeClass("edit-clicked");
})