(function () {
  var output = {};
  var spaBreaks = {};
  output.totalPrice = 0;

  if (guest.email) {
    output.email = guest.email;
  }

  const addEventDataToOutput = function (events) {
    events.forEach(function (event) {
      if (
        event.type === "ADD" &&
        event.arbitraryData &&
        event.arbitraryData.product &&
        event.arbitraryData.product.price
      ) {
        output.totalPrice =
          event.arbitraryData.product.price *
          event.arbitraryData.product.quantity;
        output.spaBreak = event.arbitraryData.product.name;
        output.sku = event.arbitraryData.product.referenceId;
        output.orderedAt = event.arbitraryData.product.orderedAt;
        output.link = "https://budapestspabreakscdpdemo.website/";
      }
    });
    output.sessionAbandonedAt = guest.sessions[i].endedAt;
  };

  if (guest.sessions && guest.sessions.length) {
    for (var i = 0; i < guest.sessions.length; i++) {
      if (guest.sessions[i].cartType === "ABANDONED") {
        addEventDataToOutput(guest.sessions[i].events);
        break;
      }
    }
  }

  return output;
})();
