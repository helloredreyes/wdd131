document.addEventListener("DOMContentLoaded", function() {
  const full = document.querySelector("#datetimemodified");

  const today = new Date();

  const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC"
  };

  const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(today);

  full.innerHTML = `LAST MODIFIED ON: <span class="highlight">${formattedDateTime}</span>`;
});
