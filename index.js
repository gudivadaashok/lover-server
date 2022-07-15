const headerHight = $("header").height();

$(window).scroll(() => {
  const scrollTop = $(this).scrollTop();

  if (scrollTop < headerHight) {
    $("header").css({
      "background-position-y": `${-scrollTop / 2}px`
    });
    $(".header__title, .header__subtitle").css({
      transform: `translate(0px, ${scrollTop / 2.5}px)`
    });
  }

  // Landing Elements
  if (scrollTop > $(".subnails").offset().top - $(window).height() / 1.5) {
    $(".subnail").each(function (i, subnail) {
      setTimeout(function () {
        $(subnail).addClass("subnail-active");
      }, 700 * Math.exp(i * 0.14) - 700);
    });
  }
});

function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}

var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

setInterval(refreshTime, 1000);
