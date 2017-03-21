angular.module("app")
  .controller("degController", ($scope, $rootScope, $state, $translate)=>{
    $rootScope.lang = "ru"
    $rootScope.translate = $scope.translate = $translate
    $scope.setLang = (lang)=>{
      $rootScope.lang = lang
    }
    
        $scope.val =[];
        var v = $scope.val;
        $scope.show =1 ;

    $scope.goFuck = ()=> {
        // console.log(v.vish)
    }

// GRAFIK-start//////////////////////////////////////////////////////////////////
    $scope.drawGrafik = ()=> {
        $scope.grafik = [];
        var g = $scope.grafik;
        g.g ="1";

        $scope.labelsRadar =["Вишня", "Гранат", "Смородина", "Ежевика", "Слива", "Конфитюр", "Сафьян", "Черный шоколад", "Изюм", "Сливки", "Корица", "Стручковая ваниль", "Вкус", "Послевкусие", "Общее впечатление"];
        $scope.dataRadar = [
        [v.vish, v.gran, v.smor, v.ej, v.sliv, v.konf, v.saf, v.black, v.izum, v.slivki, v.kor, v.vanil, v.vkus, v.poslevkus, v.vpech],
        [0,0,0,0,0,8]
        ];

        $scope.labelsChart =["Вишня", "Гранат", "Смородина", "Ежевика", "Слива", "Конфитюр", "Сафьян", "Черный шоколад", "Изюм", "Сливки", "Корица", "Стручковая ваниль", "Вкус", "Послевкусие", "Общее впечатление"];
        $scope.dataChart = [
        [v.vish, v.gran, v.smor, v.ej, v.sliv, v.konf, v.saf, v.black, v.izum, v.slivki, v.kor, v.vanil, v.vkus, v.poslevkus, v.vpech],
        [0,0,0,0,0,0]
        ];

        $scope.labelsArea =["Вишня", "Гранат", "Смородина", "Ежевика", "Слива", "Конфитюр", "Сафьян", "Черный шоколад", "Изюм", "Сливки", "Корица", "Стручковая ваниль", "Вкус", "Послевкусие", "Общее впечатление"];
        $scope.dataArea = [v.vish, v.gran, v.smor, v.ej, v.sliv, v.konf, v.saf, v.black, v.izum, v.slivki, v.kor, v.vanil, v.vkus, v.poslevkus, v.vpech];
    }
    $scope.drawGrafik();
//GRAFIK-end/////////////////////////////////////////////////////////////////

//RANDOM-start/////////////////////////////////////////////////////////////////
     $scope.random = ()=> {
        var rand = 1000 - 0.5 + Math.random() * (9999 - 1000 + 1)
        $scope.rand = Math.round(rand);
    }
//RANDOM-end/////////////////////////////////////////////////////////////////


//RELOAD-start/////////////////////////////////////////////////////////////////
    $scope.reload =()=> {
        location.reload()
    }
//RELOAD-end/////////////////////////////////////////////////////////////////

  })  