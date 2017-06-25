const days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat',];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function getDate() {
  var todaysDate = new Date();
  var day = days[todaysDate.getDay()];
  var date = todaysDate.getDate();
  var month = months[todaysDate.getMonth()-1];
  var hours24 = todaysDate.getHours();
  var hours12 = ((hours24 + 11) % 12 + 1);
  if (todaysDate.getMinutes() <= 9) {
    var minutes = "0" + todaysDate.getMinutes();
  } else {
    var minutes = todaysDate.getMinutes();
  }
  if (hours24 >= 12) {
    var timeOfDay = "pm";
  } else {
    var timeOfDay = "am"
  }
  $('#day').html(day);
  $('#date').html(date);
  $('#month').html(month);
  $('#time').html(hours12 + ':' + minutes + timeOfDay);
  setTimeout(getDate, 999);
}

// adds 30 mins to current time
function getTimePlus30() {
  var todaysDate = new Date();
  var todaysDatePlus30 = new Date();
  todaysDatePlus30.setMinutes(todaysDate.getMinutes()+30);
  var hours24 = todaysDatePlus30.getHours();
  var hours12 = ((hours24 + 11) % 12 + 1);
  if (todaysDatePlus30.getMinutes() <= 9) {
    var minutes = "0" + todaysDatePlus30.getMinutes();
  } else {
    var minutes = todaysDatePlus30.getMinutes();
  }
  if (hours24 >= 12) {
    var timeOfDay = "pm";
  } else {
    var timeOfDay = "am"
  }
  $('#time').append(' - ' + hours12 + ':' + minutes + timeOfDay);
  setTimeout(getTimePlus30, 999);
}

window.onload = function() {
  getDate();
  getTimePlus30();
}
