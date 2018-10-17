$(function(){
  $.ajax({
    url: 'http://pv.sohu.com/cityjson?ie=utf-8',
    type: 'GET',
    data: {},
    success: function(data){
      console.log(data);
    },
    error: function(xhr){
      console.log(xhr);
      console.log(xhr.responseText);
      console.log("var returnCitySN = ".length);
      var str = xhr.responseText.substring(18);
      str = str.slice(0,str.length-1);
      var res = JSON.parse(str);
      console.log(res);
      $('#ip').val(res.cip);
      $('#address').val(res.cname);
    }
  });
  
});