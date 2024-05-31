//!Process: Instance of a computer program being executed

//!Threads: Within a single process there can be multiple threads which acts like todo list that needs to be executed one by one.

//!Scheduling: It is the OS's ability to decide which thread to process at any given instance of time

//One core can process more than one thread at a time  - Multi Threading
//In case of async processes like IO operations there is always a non-zero waiting time for the time during this period the scheduler can pause the current thread make other thread do other tasks and once it is done come back to the first one and continue

process.env.UV_THREADPOOL_SIZE = 2; //changing this may cause different result

const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    //this is will run after the task is done
    console.log('1: ', Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    //this is will run after the task is done
    console.log('2: ', Date.now() - start);
});
//we can see two benchmarks are almost close
//If node were single threaded the two tasks must have take 2 seconds assuming each task take 1 second

//Here the task is delegated to the c++ side (libuv) which has thread pool used for computationally intensive operations
//In this  case the libuv has created 4 threads in addition to the single thread assigned to the event loop

//the two tasks get assigned to one one thread in the thread pool and they run in one one core

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    //this is will run after the task is done
    console.log('3: ', Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    //this is will run after the task is done
    console.log('4: ', Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    //this is will run after the task is donenotion
    console.log('5: ', Date.now() - start);
});

//the first 4 took almost 2seconds and then the 5th call took additional one second
//Here the 4 tasks get allocated to the 4 threads in the thread pool and where due to multithreading two threads got assigned to one core and the other two to the next core  (More than one thread at one time bye a core)
//After the 4 tasks are done maybe the 5th one got assigned to any one of the thread and it was run in any core (no competition) the core was processing only one hashing function so it took less time

//! set UV_THREADPOOL_SIZE = 2 & node threads
//Running the above command gives different result the tasks are executes in batches of two