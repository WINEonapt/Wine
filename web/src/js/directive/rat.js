
angular.module("app").directive('ratingStar', function($timeout, $parse) {
  return function(scope, element, attrs) {
    var clickedValue, editable, height, hint, i, j, key, object, ratingText, ref, showHint, star, stars, starsNumber, width;
    object = attrs.ratingStar.substr(0, attrs.ratingStar.lastIndexOf('.'));
    key = attrs.ratingStar.substr(attrs.ratingStar.lastIndexOf('.') + 1);
    object = $parse(object)(scope);
    stars = [];
    width = attrs.starWidth;
    height = attrs.starHeight;
    editable = attrs.editable === 'true';
    starsNumber = 5;
    starsNumber--;
    clickedValue = object[key] || 0;
    ratingText = ["Необходимо выбрать оценку", "Очень плохо", "Плохо", "Средне", "Хорошо", "Отлично"];
    showHint = attrs.showHint;
    hint = $(angular.element("<p></p>"));
    hint.hide();
    scope.$watch(showHint, function(val) {
      if (val) {
        hint.html(ratingText[0]);
        return hint.show();
      }
    });
    hint.css({
      "text-align": 'center',
      "color": "#ed3b3b",
      margin: "0",
      position: "absolute",
      left: 0,
      right: 0,
      top: parseInt(height) + 5 + "px",
      'white-space': 'nowrap'
    });
    for (i = j = 0, ref = starsNumber; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      star = angular.element("<div></div>");
      stars.push(star);
    }
   
    stars.forEach(function(el, ind) {
      el=$(el);
      var init, k, l, ref1, ref2, ref3;
      el.css({
        'background-image': 'url(assets/img/unfill_star.svg)',
        width: width,
        height: height,
        'background-size': 'cover',
        cursor: 'pointer',
        display: 'inline-block'
      });
      if (editable) {
        el.click(function() {
          var k, l, ref1, ref2, ref3, results;
          clickedValue = ind + 1;
          scope.$apply(function() {
            return object[key] = ind + 1;
          });
          for (i = k = 0, ref1 = ind; 0 <= ref1 ? k <= ref1 : k >= ref1; i = 0 <= ref1 ? ++k : --k) {
            stars[i].css({
              'background-image': 'url(assets/img/fill_star.svg)'
            });
          }
          results = [];
          for (i = l = ref2 = ind + 1, ref3 = starsNumber; ref2 <= ref3 ? l <= ref3 : l >= ref3; i = ref2 <= ref3 ? ++l : --l) {
            if (i > starsNumber) {
              break;
            }
            results.push(stars[i].css({
              'background-image': 'url(assets/img/unfill_star.svg)'
            }));
          }
          return results;
        });
        el.on('mouseover', function(e) {
          var k, l, ref1, ref2, ref3;
          for (i = k = 0, ref1 = ind; 0 <= ref1 ? k <= ref1 : k >= ref1; i = 0 <= ref1 ? ++k : --k) {
            stars[i].css({
              'background-image': 'url(assets/img/fill_star.svg)'
            });
          }
          for (i = l = ref2 = ind + 1, ref3 = starsNumber; ref2 <= ref3 ? l <= ref3 : l >= ref3; i = ref2 <= ref3 ? ++l : --l) {
            if (i > starsNumber) {
              break;
            }
            stars[i].css({
              'background-image': 'url(assets/img/unfill_star.svg)'
            });
          }
          hint.html(ratingText[ind + 1]);
          return hint.show();
        });
        el.on('mouseleave', function(e) {
          var k, l, ref1, ref2, ref3, results;
          if (clickedValue) {
            for (i = k = 0, ref1 = clickedValue - 1; 0 <= ref1 ? k <= ref1 : k >= ref1; i = 0 <= ref1 ? ++k : --k) {
              stars[i].css({
                'background-image': 'url(assets/img/fill_star.svg)'
              });
            }
            hint.html(ratingText[clickedValue]);
          } else {
            hint.hide();
          }
          results = [];
          for (i = l = ref2 = clickedValue, ref3 = starsNumber; ref2 <= ref3 ? l <= ref3 : l >= ref3; i = ref2 <= ref3 ? ++l : --l) {
            if (i > starsNumber) {
              break;
            }
            results.push(stars[i].css({
              'background-image': 'url(assets/img/unfill_star.svg)'
            }));
          }
          return results;
        });
      }
      if (object[key]) {
        init = object[key];
        if (init !== Math.floor(init)) {
          init = Math.floor(init + .5);
        }
        for (i = k = 0, ref1 = init - 1; 0 <= ref1 ? k <= ref1 : k >= ref1; i = 0 <= ref1 ? ++k : --k) {
          stars[i].css({
            'background-image': 'url(assets/img/fill_star.svg)'
          });
        }
        for (i = l = ref2 = init, ref3 = starsNumber; ref2 <= ref3 ? l <= ref3 : l >= ref3; i = ref2 <= ref3 ? ++l : --l) {
          if (i > starsNumber) {
            break;
          }
          stars[i].css({
            'background-image': 'url(assets/img/unfill_star.svg)'
          });
        }
      }
      return element.append(el);
    });
    if (editable) {
      element.append(hint);
    }
    if (!attrs.disableWatch) {
      return scope.$watch(attrs.ratingStar, function(val, oldVal) {
        var init, k, l, ref1, ref2, ref3, results;
        object[key] = val;
        if (object[key]) {
          init = object[key];
          if (init !== Math.floor(init)) {
            init = Math.floor(init + .5);
          }
          for (i = k = 0, ref1 = init - 1; 0 <= ref1 ? k <= ref1 : k >= ref1; i = 0 <= ref1 ? ++k : --k) {
            stars[i].css({
              'background-image': 'url(assets/img/fill_star.svg)'
            });
          }
          results = [];
          for (i = l = ref2 = init, ref3 = starsNumber; ref2 <= ref3 ? l <= ref3 : l >= ref3; i = ref2 <= ref3 ? ++l : --l) {
            if (i > starsNumber) {
              break;
            }
            results.push(stars[i].css({
              'background-image': 'url(assets/img/unfill_star.svg)'
            }));
          }
          return results;
        }
      });
    }
  };
});
