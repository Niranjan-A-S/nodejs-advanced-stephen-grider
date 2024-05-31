//!Process: Instance of a computer program being executed

//!Threads: Within a single process there can be multiple threads which acts like todo list that needs to be executed one by one.

//!Scheduling: It is the OS's ability to decide which thread to process at any given instance of time

//One core can process more than one thread at a time  - Multi Threading
//In case of async processes like IO operations there is always a non-zero waiting time for the time during this period the scheduler can pause the current thread make other thread do other tasks and once it is done come back to the first one and continue
