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



const refreshImage = function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson)
            $("#demo-img").attr("src", myJson.message);
        });
}

$('#refresh-me').click(refreshImage);


// calendar.createSchedules([{
//         id: '1',
//         calendarId: '1',
//         title: 'my schedule',
//         category: 'time',
//         dueDateClass: '',
//         start: '2018-01-18T22:30:00+09:00',
//         end: '2018-01-19T02:30:00+09:00'
//     },
//     {
//         id: '2',
//         calendarId: '1',
//         title: 'second schedule',
//         category: 'time',
//         dueDateClass: '',
//         start: '2018-01-18T17:30:00+09:00',
//         end: '2018-01-19T17:31:00+09:00',
//         isReadOnly: true // schedule is read-only
//     }
// ]);

//Data picker----
var container = document.getElementById('tui-date-picker-container');
var target = document.getElementById('tui-date-picker-target');


var instance = new tui.DatePicker(container, {
    input: {
        element: target
    },
});
instance.getDate();
//--------