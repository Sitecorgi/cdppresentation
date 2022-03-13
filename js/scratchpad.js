(function () {
  var output = {};
  var spaBreaks = {};
  output.totalPrice = 0;

  if (guest.email) {
    output.email = guest.email;
  }

  if (guest.sessions && guest.sessions.length) {
    for (var i = 0; i < guest.sessions.length; i++) {
      if (guest.sessions[i].cartType === "ABANDONED") {
        guest.sessions[i].events.forEach(function (event) {
          if (
            event.type === "ADD" &&
            event.arbitraryData &&
            event.arbitraryData.product &&
            event.arbitraryData.product.price
          ) {
            output.totalPrice += event.arbitraryData.product.price;
            output.spaBreak = event.arbitraryData.product.name;
          }
        });
        output.sessionAbandonedAt = guest.sessions[i].endedAt;
        break;
      }
    }
  }

  return output;
})();
