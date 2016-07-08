angular.module('starter.controllers')
    .controller('landingCtrl',[ function(){
    
var deploy = new Ionic.Deploy();
  deploy.setChannel("dev");
  
  deploy.check().then(function(hasUpdate) {
    alert('Ionic Deploy: Update available: ' + JSON.stringify(hasUpdate));
    if(hasUpdate) {
        deploy.update().then(function(res) {
     //App will automatically reload when updated successfully
     alert('Ionic Deploy: Update Success! ' + JSON.stringify(res));
  }, function(err) {
     alert('Ionic Deploy: Update error! ' + JSON.stringify(err));
  }, function(prog) {
    
  });
    //Perform update
    }
  }, function(err) {
    alert('Ionic Deploy: Unable to check for updates' + JSON.stringify(err));
  });
    
  

    }]);