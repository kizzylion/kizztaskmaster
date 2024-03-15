
import { taskMaster } from ".";
import { Group } from "./groupClass";
import { Task } from "./noteClass";
// import { toggleUi } from "./components/toggle";

export class Reminder {
    constructor() {
        this.collection = [
        new Task("Pay Water Bill","Pay utility bill for water bill","2022-05-27","General", "low", "General"),
        new Task("Pay Electricity Bill","Pay utility bill for electric bill","2022-05-27","General", "low", "General"),
        ];
        this.groups = [
            new Group("General", "General","bg-red-500"),
            new Group("Personal", "Personal","bg-blue-500"),
            new Group("Work", "Work","bg-green-500")
        ];
    }

    //add a default  group to the groups
    
    addReminder(title, message, date, tag, priority, groupid) {
        this.collection.push(new Task(title, message, date, tag, priority, groupid));
    }

    getNotesByTag(tag) {
        return this.collection.filter(task => task.getTag() === tag);
    }

    //returns an array of all notes in a group
    getNotesByGroup(groupid) {
        return this.collection.filter(note => note.getGroupid() === groupid);
    }

    //adds a new group to the collection
    addGroup(groupid,groupname, groupcolor) {
        this.groups.push(new Group(groupid,groupname, groupcolor));
        console.log(this.groups);
    }

    //gets a specific group by its name
    getGroupByName(groupname) {
        return this.collection.find(group => group.getGroupname() === groupname);
    }

    //adds a note to a group
    addNoteToGroup(note, groupid) {
        this.getGroupByName(groupid).collection.push(note);
    }

    removeGroup(groupname) {
        this.collection = this.collection.filter(group => group.getGroupname() !== groupname);
    }

    //removes a note from a group
    removeNoteFromGroup(note, groupid) {
        this.getGroupByName(groupid).collection = this.getGroupByName(groupid).collection.filter(n => n !== note);
    }

    editGroup(groupname, groupcolor) {
        this.getGroupByName(groupname).setGroupcolor(groupcolor);
        this.getGroupByName(groupname).setGroupname(groupname);
    }

    editTask(task, title, message, date, tag, priority, groupid) {
        task.setTitle(title);
        task.setMessage(message);
        task.setDate(date);
        task.setTag(tag);
        task.setPriority(priority);
        task.setGroupid(groupid);
    }

    deleteNote(task) {
        this.collection = this.collection.filter(n => n !== task);
    }

    deleteGroup(groupname) {
        this.collection = this.collection.filter(group => group.getGroupname() !== groupname);
    }

    displayReminder() {
        return this.collection;
    }

    displayReminderByGroup(groupid) {
        return this.getGroupByName(groupid).collection;
    }
    noTaskUi(){
        let div = document.createElement("div");
        div.innerHTML = `
            <div id="no-tasks" class="flex-col w-full text-center mt-16 justify-items-center">
            <p class="text-base text-gray-400 dark:text-gray-400 font-medium">No tasks found</p>
            <p class="text-base text-gray-400 dark:text-gray-400 font-normal">Add a task to get started</p>
        </div>
        `
        return div
    }

    updateGrouplist() {
        let groupContainer = document.getElementById("taskgroups");
        groupContainer.innerHTML = "";
    
        this.groups.forEach(group => {
            groupContainer.insertAdjacentHTML('beforeend', group.getGroupListHTML());
        });
    }

    updateTasklist() {
        let taskContainer = document.getElementById("tasklist");
        taskContainer.innerHTML = "";
        console.log(this.collection)
        
        if (this.collection.length === 0 ) {
            taskContainer.innerHTML = "";
            taskContainer.appendChild(this.noTaskUi());
            return
        } 
    
        this.collection.forEach(task => {
    
            taskContainer.appendChild(task.getTaskHTML());
        });
        
        // get data-btn="deletetaskbtn" elements and bind the delete function
        const deleteButtons = document.querySelectorAll('[data-btn="deletetaskbtn"]');
        deleteButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                this.deleteNote(this.collection[index]);
                this.updateTasklist();
            });
        })
        

    }

    getGroup(){
        return this.groups
    }

    getCountOfTaskInEachGroup(){
        this.groups.forEach(group=>{
            group.calculateTaskCount(this.collection)
            console.log(`${group.getGroupname()}: `, group.taskCount)
        })
    }
    
    update(){
        taskMaster.getCountOfTaskInEachGroup()
        taskMaster.updateGrouplist();
        taskMaster.updateTasklist()
    }

}