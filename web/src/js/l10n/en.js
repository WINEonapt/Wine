angular.module("app")
  .factory('$translateEn', [() => {
    var words = {
      wine: "Wine",
      meat: "Meat",
      milk: "Milk",
      beer: "Beer",
      Champagne: "Champagne",
    }
    return words
  }])