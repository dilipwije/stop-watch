const Stopwatch = function () {

    let startTime, stopTime, watchRunning, timeDuration;

    // Define the stop watch stop function
    this.stopWatch = function () {

        if (!watchRunning) {
            document.querySelector(".display").innerHTML = "Watch has been stoped...";
        } else {
            watchRunning = false;
            stopTime = new Date();
            //  document.querySelector(".display").innerHTML = stopTime;
            // Calculate the time duration between start and stop
            timeDuration = (stopTime.getTime() - startTime.getTime()) / 1000;

            stopTimeHour = stopTime.getHours();
            stopTimeMinutes = stopTime.getMinutes();
            stopTimeSeconds = stopTime.getSeconds();
            stopTimeMilliseconds = stopTime.getMilliseconds();

            document.querySelector(".display").innerHTML = 'Stope Time : '+stopTimeHour + ':' + stopTimeMinutes + ':' + 
            stopTimeSeconds + ':' + stopTimeMilliseconds + ' Time Duration : ' + timeDuration;

        };
    };


    Object.defineProperty(this, 'timeDuration', {

        get: function () {

            return timeDuration;

        },
        set: function (timeDuration) {
            document.querySelector(".display").innerHTML = timeDuration;
        }
    });


    // Define the stop watch start function
    this.startWatch = function () {

        if (watchRunning) {

            document.querySelector(".display").innerHTML = "Watch is already working...";

        } else {
            watchRunning = true;
            startTime = new Date();
            startTimeHour = startTime.getHours();
            startTimeMinutes = startTime.getMinutes();
            startTimeSeconds = startTime.getSeconds();
            startTimeMilliseconds = startTime.getMilliseconds();

            document.querySelector(".display").innerHTML = 'Start Time : ' + startTimeHour + ':' + startTimeMinutes + ':' 
            + startTimeSeconds + ':' + startTimeMilliseconds;
            //  document.querySelector(".display").innerHTML = startTime.getTime();


        };
    };



    // Reset function

    this.resetWatch = function () {
        startTime = null;
        stopTime = null;
        watchRunning = null;
        timeDuration = 0;

        document.querySelector(".display").innerHTML = "Reset the Watch!";

    };



}
const finalTimeCal = new Stopwatch();
finalTimeCal.timeDuration = 0;
