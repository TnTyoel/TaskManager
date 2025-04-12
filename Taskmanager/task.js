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
    //Mark a task as completed
    completeTask(task){
        if (this.taskStatus.has(task)){
            this.taskStatus.set(task, "Completed");

        console.log(`Task "${task}" marked as completed.`);
        } else {
            console.log(`Task "${task}" not found.`);
        }
    }
    //Remove a task
    removeTask(task){
        if (this.tasks.has(task)){
            this.tasks.delete(task);
            this.taskStatus.delete(task);
            console.log(`Task "${task}" removed.`);
        }else{
            console.log(`Task "${task}" does not exist.`);
        }
    }

    // Display all tasks
    showTasks(){
        if (this.tasks.size === 0){
            console.log("No tasks available.");
            return;
        }
        console.log("\nTasks:");
        for (const task of this.tasks){
            console.log(`- ${task} [${this.taskStatus.get(task)}]`);
        }
}
}
// Create task manager instance
const manager = new TaskManager();
// Stimulate user input
const taskList = ["Learn Javascript", "Build a project", "Learn Javascript", "Write documentation", "STOP"];
for (const task of taskList){
    if (!manager.addTask(task)) break; // stop loop on STOP
}
manager.completeTask("Learn Javascript");
manager.removeTask("Write documentation");
manager.showTasks();