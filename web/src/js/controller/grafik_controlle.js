angular.module("app").controller("RadarCtrl", function ($scope) {
  $scope.labels =["Винный аромат", "Цветочный аромат", "Окисленный", "Интенсивность вкуса", "Кислотный вкус", "Типичность вкуса", "Длительность вкуса"];

  $scope.data = [
    [4, 7, 3, 5, 5, 1, 5],
    [0,0,0,0,0,10]
  ];
//   $scope.options = { 
// scales: { 
// yAxes: [ 
// { 

// ticks: { 
// callback: (value, index, values)=>{ 
// if(parseInt(value) > 1000){ 
// return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") 
// } 
// else 
// if(value!=Math.floor(value)){ 
// value = Math.floor(value*10)/10 
// } 
// return value 
// } 
// } 
// } 
// ] 
// } 
// };
});