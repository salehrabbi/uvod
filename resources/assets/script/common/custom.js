$(".section-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true
});

$(".banner-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true
});

$(".inner-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="far fa-angle-left"></button>',
  nextArrow: '<button class="far fa-angle-right"></button>',
  autoplay: false
});

/**
 * Czech translation for bootstrap-datetimepicker
 * Matěj Koubík <matej@koubik.name>
 * Fixes by Michal Remiš <michal.remis@gmail.com>
 */
(function($) {
  $.fn.datetimepicker.dates["cs"] = {
    days: [
      "Neděle",
      "Pondělí",
      "Úterý",
      "Středa",
      "Čtvrtek",
      "Pátek",
      "Sobota",
      "Neděle"
    ],
    daysShort: ["Ned", "Pon", "Úte", "Stř", "Čtv", "Pát", "Sob", "Ned"],
    daysMin: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So", "Ne"],
    months: [
      "Leden",
      "Únor",
      "Březen",
      "Duben",
      "Květen",
      "Červen",
      "Červenec",
      "Srpen",
      "Září",
      "Říjen",
      "Listopad",
      "Prosinec"
    ],
    monthsShort: [
      "Led",
      "Úno",
      "Bře",
      "Dub",
      "Kvě",
      "Čer",
      "Čnc",
      "Srp",
      "Zář",
      "Říj",
      "Lis",
      "Pro"
    ],
    today: "Dnes",
    suffix: [],
    meridiem: [],
    weekStart: 1,
    format: "dd.mm.yyyy"
  };
})(jQuery);

$(".form_datetime").datetimepicker({
  format: "dd/MM",
  showMeridian: true,
  autoclose: true,
  minuteStep: 10,
  todayBtn: true,
  startDate: "2019-01-1 00:00",
  language: "cs"
});
