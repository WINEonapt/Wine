angular.module("app").controller("RadarCtrl", function ($scope) {
  $scope.labels =["Винный аромат", "Цветочный аромат", "Окисленный", "Интенсивность вкуса", "Кислотный вкус", "Типичность вкуса", "Длительность вкуса"];

  $scope.data = [
    [4, 7, 3, 5, 5, 0, 5]
  ];
});