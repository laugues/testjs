var BALANCE = {
  SERVER_URL : null,
  init : function (params){
     SERVER_URL = params.SERVER_URL;
  },
  getAllSuppliers : function (callback){
    _load(callback);
  } ,
  login : function (username,password,callback){
    _load(callback);
    
  } 
}

window.BalanceLoaded();

    function _load(callback) {
        var defaultConfig = {};
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                  callback(JSON.parse(xhttp.responseText));
                }
            };
            xhttp.open("GET", SERVER_URL+"/api/rest/masterdata/suppliers", false);
            xhttp.send();
    }



 
