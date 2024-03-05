
import { Group } from "./groupClass";
import { Task } from "./noteClass";

export class Reminder {
    constructor() {
        this.collection = [];
        this.groups = [
            new Group("General", "General","bg-red-500"),
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

    updateGrouplist(){
       let groupContainer = document.getElementById("taskgroups");
       groupContainer.innerHTML = "";
       this.groups.forEach(group => groupContainer.innerHTML += group.getGroupListHTML());
    }


}