class TaskManager {
    constructor() {
        this.tasks = new Set(); // Store unique tasks
        this.taskStatus = new Map(); // Track task status
    }
    // add a task(Prevent duplicates)
addTask(task) {
    
    if (task === "STOP") {
        console.log("Stopped adding tasks.");
        return false; // signal to stop loop
    }
        if (!this.tasks.has(task)){
            this.tasks.add(task);
            this,this.taskStatus.set(task, "Pending");
            console.log(`Task added: "${task}:`);
        } else {
            console.log(`Task "${task}" already exists!`);
        }
        return true; // continue loop
}
}