angular.module("app")
  .controller("degController", ($scope, $rootScope, $state, $translate)=>{
    $rootScope.lang = "ru"
    $rootScope.translate = $scope.translate = $translate
    $scope.setLang = (lang)=>{
      $rootScope.lang = lang
    }
    
        $scope.rad =[];
        var r = $scope.rad;

        // r.vin =10;
        // r.cvet = 0;
        // r.trav = 0;
        // r.ovosh = 0;
        // r.miner = 0; 
        // r.muskat = 0;
        // r.greip = 0;
        // r.kruj = 0;
        // r.okis = 0;
        // r.efir = 0;
        // r.intens = 0;
        // r.kislot = 0;
        // r.slad = 0;
        // r.tip = 0;
        // r.dlit = 0;
       

        
    $scope.goFuck = ()=> {
    // for ( var key in r) {
            // console.log("Ключ: " + key + " значение: " + r[key])
        // }
    }


// GRAFIK-start
     $scope.drawGrafik = ()=> {
        $scope.labels =["Винный аромат", "Цветочный аромат", "Окисленный", "Интенсивность вкуса", "Кислотный вкус", "Типичность вкуса", "Длительность вкуса"];

        $scope.data = [
        [r.vin, r.cvet, r.okis, r.intens, r.kislot, r.tip, r.dlit],
        [0,0,0,0,0,10]
        ];
  }
//GRAFIK-end

//RANDOM-start
     $scope.random = ()=> {
        var rand = 1000 - 0.5 + Math.random() * (9999 - 1000 + 1)
        $scope.rand = Math.round(rand);
    }
//RANDOM-end


//RELOAD-start
    $scope.reload =()=> {
        location.reload()
        
    }
//RELOAD-end

  })    
