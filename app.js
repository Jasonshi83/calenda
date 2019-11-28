// var Calendar = require('tui-calendar'); /* CommonJS */
// require("tui-calendar/dist/tui-calendar.css");


// // If you use the default popups, use this.
// require("tui-date-picker/dist/tui-date-picker.css");
// require("tui-time-picker/dist/tui-time-picker.css");

var calendar = new tui.Calendar("#calendar", {
    defaultView: "month",
    taskView: true,
    template: {
        monthDayname: function (dayname) {
            return (
                '<span class="calendar-week-dayname-name">' +
                dayname.label +
                "</span>"
            );
        }
        // ...
    }
});