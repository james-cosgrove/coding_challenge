const days = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];

window.onload() {
  function getDate() {
    var todaysDate = new Date();
    var day = days[todaysDate.getDay()-1];
    var date = todaysDate.getDate();
    var month = todaysDate.getMonth();
    var hours = todaysDate.getHours();
    var minutes = todaysDate.getMinutes();
    $('#day').html(day);
    $('#date').html(date);
    $('#month').html(month);
    $('#time').html(hours + ':' + minutes);
  }

  // adds 30 mins to current time for future time section
  function getDatePlus30() {
    var todaysDate = new Date();
    var todaysDatePlus30 = new Date();
    todaysDatePlus30.setMinutes(todaysDate.getMinutes()+30);
    var hours = todaysDatePlus30.getHours();
    var minutes = todaysDatePlus30.getMinutes();
    $('#time-plus-30').html(hours + ':' + minutes);
  }
};
