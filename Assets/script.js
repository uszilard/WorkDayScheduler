
console.log("Script is here");

$(document).ready(function () {

    //current date and time
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = moment().hours();

    console.log(m);
    console.log(currentTime);
    console.log(currentHour);

    //current date header
    $("#currentDay").text("Today's Date: " + currentDate);

    //timeblocks -----
    //make 9am - 5pm timeslots
    //make an array of timestamps
    var timeStamp = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
    var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

    //loop and create divs
    for (var i = 0; i < timeStamp.length; i++) {

        var makeEventButton = $(`<button class='saveBtn' id = '${hour[i]}' data-value = ' ${hour[i]}'>`)
        var timeDiv = $("<div class='col-2'>" + timeStamp[i] + "</div>");
        var eventInputField = $(`<input type='text' class='event-input' id = '${hour[i]}' data-value = ' ${hour[i]} '>`);
        var eventDiv = $(`<div class='col-8' data-value = ' ${hour[i]} '></div>`);
        var savedEvents = $(`<div data value= ' ${hour[i]}'></div>`);

        makeEventButton.text("Add Event");

        //add styling to divs
        $(timeDiv).addClass("time-block");
        $(eventInputField).addClass("textarea");
        $(eventDiv).addClass("event-div");
        $(savedEvents).addClass("saved-events");

        //add data-values for each div
        var hourValue = hour[i];
        $(".event-input").attr("data-value", timeStamp[i]);
        $(savedEvents).data({ "hour": hourValue });
        $(makeEventButton).data({ "hour": hourValue });
        $(eventDiv).data({ "hour": hourValue });

        console.log(timeStamp[i], eventDiv.attr("data-value"));

        //append divs
        $(".row").append(timeDiv);
        $(".row").append(eventDiv);
        $(".row").append(makeEventButton);
        $(eventDiv).append(eventInputField);
        $(eventDiv).append(savedEvents);

    };

    //save button listener for input to add to local storage

    // $(document).ready() {
    $(".saveBtn").on("click", function (e) {

        e.preventDefault();
        // var eventTime = $(".event-button").attr();

        //grab the text from the input box
        console.log(e.target)

        var eventInput = $(`#${e.target.id}`).val();

        console.log("this is the venet 9999", eventInput)


        //store text in local storage
        var i = 0;
        localStorage.setItem(i = timeStamp[i], eventInput);
        console.log("~~~~adding event to local storage~~~~");
        console.log($(".saveBtn").attr("data-value"));


        //function to get event from local storage and render it on page
        function renderEvent() {

            $(".saved-events").append(eventInput);
            console.log("render this event!!!");
            console.log("event added: " + eventInput);
        };

        //empty the input
        $(`#${e.target.id}`).val("");

        //call the render event function
        renderEvent();

    });
    // };

    //if else statement for past, present and future (< = > moment)
    function timeStyle() {
        if (
            $(".saved-events").attr("data-value") <= currentHour) {
            // change the class to future
            $(".saved-events").attr("class", "future");
        }
        else if (
            $(".saved-events").attr("data-value") === currentHour) {
            // change the class to present
            $(".saved-events").attr("class", "present");
        }

        else if (
            $(".saved-events").attr("data-value") <= currentHour) {
            // change the class to past
            $(".saved-events").attr("class", "past");
        }

        console.log("changing the time style");
    }

    timeStyle();

});


































