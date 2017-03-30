angular.module("app")
  .factory('$translateRu', [() => {
    var words = {
      wine: "Вино",
      meat: "Мясо",
      milk: "Молоко",
      beer: "Пиво",
      Champagne: "Шампанское",
    }
    return words

  }])