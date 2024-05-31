// When a  node program is run the node takes one thread and executes all the code in that single thread
//Inside the single thread there will be something called as an event loop (control structure) which decides what that single thread is doing

//!Event Loop - Entire lifecycle

//node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents(); // All the contents inside the file are run

function shouldContinue() {
    // 3 separate checks

    // check 1: Any  pending setTimeout. setInterval, setImmediate needs to be executed?
    // check 2: Any  pending OS tasks (ike server listening to any ports)?
    // check 3: Any pending long running operations (like fs module)

    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}


// Entire body executes in one "tick"
while (shouldContinue()) {
    // 1) Node look at pendingTimers and see if any callback functions are ready to be called. setTimeout, setIntervals

    // 2) Node look at pendingOSTasks and pendingOperations and calls relevant callbacks

    // 3) Pause executions. Continue  whenever a new pendingOSTask,pendingOperations, or timers are done

    // 4) Look at pendingTimers, Call any setImmediate

    //5) Handle any close events

}

//exit back to terminal