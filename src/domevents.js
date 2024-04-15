
import { taskMaster } from ".";
import { renderUi } from "./renderMainUi";
import { showAddGroupModal } from "./addgroup";
import { showTaskModal } from "./addTask";



export function initialRender(){
    taskMaster.temporalcollection = taskMaster.displayReminder();
    taskMaster.mobileNavEvent()
    taskMaster.update(taskMaster.temporalcollection)
    showTaskModal(0)
    showAddGroupModal()
    viewTaskByGroup()
    viewAllTask()
}
export function viewAllTask(){
    
    const viewAllTaskBtn = document.getElementById("allTab");


    viewAllTaskBtn.addEventListener("click", function(){
        taskMaster.currentGroupDisplaying = "all";
        taskMaster.temporalcollection = taskMaster.displayReminder();
        
        //update the ui 
        renderCurrentDisplaying(0)
    })
}

export function viewTaskByGroup(){
    let taskGroups = document.getElementById("taskgroups");

    let groupsBtn = taskGroups.querySelectorAll(".group");

    groupsBtn.forEach((group,index) => {
        group.addEventListener('click', function(e) {
            let groupId = group.getAttribute('data-groupid'); 
            
            taskMaster.currentGroupDisplaying = index;
            taskMaster.temporalcollection = taskMaster.getNotesByGroup(groupId);
            
            // update the UI with new
            renderCurrentDisplaying(taskMaster.currentGroupDisplaying)
        });
    });
        
        
        
    
    
}


export function renderCurrentDisplaying(CurrentDisplayingIndex){
    
    taskMaster.mobileNavEvent()
    console.log(taskMaster.temporalcollection)
    taskMaster.update(taskMaster.temporalcollection)
    
    showTaskModal(CurrentDisplayingIndex)
    showAddGroupModal()
    viewTaskByGroup()
    viewAllTask()
}