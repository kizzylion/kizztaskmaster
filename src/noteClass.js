import toggle from "./components/toggle"

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


    
    getTaskHTML(){
        let div = document.createElement('div');
        div.innerHTML = `
            <div class="flex gap-x-4  lg:gap-x-3 mt-4">
            <div>
            <input id="Completed" type="checkbox" name="Completed">

            </div>
            <div class="flex flex-col w-full border-b border-gray-200 dark:border-gray-800 pb-2">
                <div class="flex gap-x-2">
                <h3 class="mr-auto text-gray-900 dark:text-gray-50 mb-2 text-xl">${this.title}</h3>
                <span class="cursor-pointer"><i class="bi bi-flag-fill text-green-600 dark:text-green-500"></i></span>
                </div>
                <p class="text-gray-500 dark:text-gray-500 text-sm lg:text-sm mb-2">${this.message}</p>
                <div class="flex">
                <span class="text-gray-500 dark:text-gray-400 text-sm mr-2">Due: ${this.date}</span>
                <span class="text-blue-500 dark:text-blue-400 text-sm mr-auto">${this.tag}</span>
                <span id="edittaskbtn" data-btn="edittaskbtn" class="inline-block text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-400 cursor-pointer  ml-auto"><i class="bi bi-pen mr-2"></i></span>
                <span id="deletetaskbtn" data-btn="deletetaskbtn" class=" text-gray-500 hover:text-red-600 dark:gray-red-400 dark:hover:text-red-600 cursor-pointer ml-4"><i class="bi bi-trash3 text-red-500 hover:text-red-600"></i></span>

                </div>
    
            </div>
    
            </div>
        `
        
        return div
    }

    
}