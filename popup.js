$(function(){
  String.prototype.replaceAll  = function(s1,s2){     
    return this.replace(new RegExp(s1,"gm"),s2);     
  }

  $.ajax({
    url: 'http://ip.chinaz.com/getip.aspx',
    type: 'GET',
    data: {},
    success: function(data){
      console.log(data);
      data = data.replace("ip","'ip'");
      data = data.replace("address","'address'");
      data = data.replaceAll("\'","\"");
      console.log(data);
      var dataJson = JSON.parse(data);
      $('#ip').val(dataJson.ip);
      $('#address').val(dataJson.address);
    },
    error: function(xhr){
      console.log(xhr);
    }
  });
  
});