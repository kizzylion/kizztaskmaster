
import { taskMaster } from ".";
import { renderUi } from "./renderMainUi";
import { renderNavUi } from "./rendernav";
import { showAddGroupModal } from "./addgroup";
import { showTaskModal } from "./addTask";



export function initialRender(){
    
    taskMaster.currentGroupDisplaying = "all";
    taskMaster.currentGroupDisplayingStyle = {
        groupname : "All",
        groupcolor : "bg-gray-500",
    };
    taskMaster.temporalcollection = taskMaster.displayReminder();
    
    renderNavUi()
    renderUi()

    taskMaster.mobileNavEvent()
    taskMaster.update(taskMaster.temporalcollection)
    showTaskModal(0)
    showAddGroupModal()
    viewTaskByGroup()
    viewAllTask()
    taskMaster.showNavInSmallScreen()
}
export function viewAllTask(){
    
    const viewAllTaskBtn = document.getElementById("allTab");


    viewAllTaskBtn.addEventListener("click", function(){
        taskMaster.currentGroupDisplaying = "all";
        taskMaster.currentGroupDisplayingStyle = {
            groupname : "All",
            groupcolor : "bg-gray-500",
            groupTextColor: "text-gray-500",
        };
        taskMaster.temporalcollection = taskMaster.displayReminder();
        
        renderNavUi()
        renderUi()

        
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
            taskMaster.currentGroupDisplayingStyle = taskMaster.groups[index];
            taskMaster.temporalcollection = taskMaster.getNotesByGroup(groupId);
            
            renderNavUi()
            renderUi()
            
            // update the UI with new
            renderCurrentDisplaying(taskMaster.currentGroupDisplaying)
            console.log(taskMaster.currentGroupDisplayingStyle)
        });
    });
        
        
        
    
    
}


export function renderCurrentDisplaying(CurrentDisplayingIndex){
    renderNavUi()
    renderUi()
    taskMaster.mobileNavEvent()
    console.log(taskMaster.temporalcollection)
    taskMaster.update(taskMaster.temporalcollection)
    
    
    showTaskModal(CurrentDisplayingIndex)
    showAddGroupModal()
    viewTaskByGroup()
    viewAllTask()
    console.log(CurrentDisplayingIndex)

}