window.BalanceLoaded();
var BALANCE = {
  var SERVER_URL = null;
    function init(params){
     SERVER_URL = params.SERVER_URL;
    }

function getAllSuppliers(callback){
    _load(callback);
}



    function _load(callback) {
        var defaultConfig = {};
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                  callback(JSON.parse(xhttp.responseText));
                }
            };
            xhttp.open("GET", SERVER_URL+"/api/rest/suppliers", false);
            xhttp.send();
    }
}
