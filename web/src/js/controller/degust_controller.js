angular.module("app")
  .controller("degController", ($scope, $rootScope, $state, $translate)=>{
    $rootScope.lang = "ru"
    $rootScope.translate = $scope.translate = $translate
    $scope.setLang = (lang)=>{
      $rootScope.lang = lang
    }
    
        $scope.rad ={};
        var r = $scope.rad;

        r.vin =0;
        r.cvet = 0;
        r.trav = 0;
        r.ovosh = 0;
        r.miner = 0; 
        r.muskat = 0;
        r.greip = 0;
        r.kruj = 0;
        r.okis = 0;
        r.efir = 0;
        r.intens = 0;
        r.kislot = 0;
        r.slad = 0;
        r.tip = 0;
        r.dlit = 0;
       

        for ( var key in r) {
            // key = 0;
            console.log("Ключ: " + key + " значение: " + r[key])
        }
    $scope.goFuck = ()=> {
    // console.log($scope.rad.opacity);
    console.log(r.color);
    }
  })    
