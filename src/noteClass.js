export class Task{
    constructor(title, message, date, tag, priority, groupid){
        this.title = title
        this.message = message
        this.date = date
        this.tag = (tag === "") ? null : `${'#' + tag}`
        this.priority = (priority === "") ? null : priority //low, medium, high
        this.completed = false;
        this.groupid = groupid;
    }

    toggleCompleted(){
        this.completed = !this.completed
    }

    getTitle(){
        return this.title
    }

    getGroupid(){
        return this.groupid
    }

    getPriority(){
        return this.priority
    }

    getTag(){
        return this.tag
    }

    getDate(){
        return this.date
    }

    getMessage(){
        return this.message
    }

    getCompleted(){
        return this.completed
    }

    setGroupid(groupid){
        this.groupid = groupid
    }

    setTag(tag){
        this.tag = tag
    }

    setMessage(message){
        this.message = message
    }

    addToGroup(task) {
        this.groupid = task.groupid
    }
    
    removeFromGroup() {
        this.groupid = null
    }
    isInGroup() {
        return this.groupid !== null
    }

    setPriority(priority){
        this.priority = priority
    }

    displayTaskDetails() {
        return {
            title: this.title,
            message: this.message,
            date: this.date,
            tag: this.tag,
            priority: this.priority
        }
    }
    editTask(){
        return {
            title: this.title,
            message: this.message,
            date: this.date,
            tag: this.tag,
            priority: this.priority,
            groupid: this.groupid
        }
    }
    
}