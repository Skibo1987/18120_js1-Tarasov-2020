let calendarMonth = "<table class=table>";
for (let i = 0, k = 0; i < 6; i++) {
  calendarMonth += "<tr>";

  for (let j = 0; j < 7; j++) {
    calendarMonth += "<td>";
    if (k > 0 && k < 32) {
      calendarMonth += k;
    }
    k++;
  }
}

calendarMonth += "</table>";
document.write(calendarMonth);
