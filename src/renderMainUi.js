
export function renderUi() {
  let main = document.querySelector("main");
  main.innerHTML += `
  
    <header id="groupheader" class="flex flex-col px-[1.25rem] py-4  lg:pr-6 bg-gray-50 dark:bg-gray-900 dark:md:bg-gray-900 px-5 lg:px-4 border-b border-gray-100 dark:border-gray-800 pb-0 relative ">
      <div class="flex flex-col">
        <div class="flex items-center  align-middle">
          <span id="backbtn" class="sm:hidden text-[1.5rem] text-gray-500 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400 cursor-pointer font-bold mr-auto"><i class="bi bi-chevron-left mr-2"></i></span>
          <span id="editgroupbtn" class="text-base text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer font-medium ml-auto"><i class="bi bi-pen mr-2"></i>Edit</span>
          <span id="deletegroupbtn" class="text-base text-gray-500 hover:text-red-400 dark:text-gray-400 dark:gray-red-400 dark:hover:text-red-400 cursor-pointer font-medium ml-4"><i class="bi bi-trash3 mr-2 text-red-500 hover:text-red-600"></i>Delete Group</span>
        </div>
        <div id="groupdescription" class="flex py-4 lg:py-4">
          <h1 id="groupname" class="text-3xl font-bold text-red-500 dark:text-red-400 mr-auto">All</h1>
          <p id="grouplength" class="text-3xl font-bold text-red-500 dark:text-red-500">0</p>
        </div>
      </div>
      <div id="groupdescription2" class="flex py-2 lg:py-2 text-xs ">
        <span>6  Completed</span> <span class="ml-1 text-red-500  hover:text-red-600 dark:text-red-500 dark:hover:text-red-600 cursor-pointer font-medium">• Clear</span> <span class="ml-auto  text-red-500  hover:text-red-600 dark:text-red-500 dark:hover:text-red-600 cursor-pointer font-medium">Hide</span>
      </div>
    </header>
    <ul id="tasklist" class="flex flex-col py-0  lg:pr-6 h-full overflow-auto px-5 lg:px-4">
      <!-- Task List -->

      
      <div id="no-tasks" class="hidden flex-col w-full text-center mt-16 justify-items-center">
        <p class="text-base text-gray-400 dark:text-gray-400 font-medium">No tasks found</p>
        <p class="text-base text-gray-400 dark:text-gray-400 font-normal">Add a task to get started</p>
      </div>

      <div class="flex gap-x-4  lg:gap-x-3 mt-4">
      <div>
        <input id="Completed" type="checkbox" name="Completed">
      </div>
        <div class="flex flex-col w-full border-b border-gray-200 dark:border-gray-800 pb-2">
          <div class="flex gap-x-2">
            <h3 class="mr-auto text-gray-900 dark:text-gray-50 mb-2 text-xl">{title}</h3>
            <span class="cursor-pointer"><i class="bi bi-flag-fill text-green-600 dark:text-green-500"></i></span>
          </div>
          <p class="text-gray-500 dark:text-gray-500 text-sm lg:text-sm mb-2">{description}</p>
          <div class="flex">
            <span class="text-gray-500 dark:text-gray-400 text-sm mr-2">Due: {date}</span>
            <span class="text-blue-500 dark:text-blue-400 text-sm mr-auto">{tag}</span>
            <span id="edittaskbtn" class="inline-block text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-400 cursor-pointer  ml-auto"><i class="bi bi-pen mr-2"></i></span>
            <span id="deletetaskbtn" class=" text-gray-500 hover:text-red-600 dark:gray-red-400 dark:hover:text-red-600 cursor-pointer ml-4"><i class="bi bi-trash3 text-red-500 hover:text-red-600"></i></span>
        
          </div>

        </div>

      </div>
      
    </ul>
    <footer id="groupfooter" class="flex px-5 lg:px-4 py-4  lg:pr-6 bg-gray-50 dark:bg-neutral-900 dark:md:bg-gray-900">
      <div data-element="newtask" class=" text-indigo-500 dark:text-indigo-400 font-medium hover:text-indigo-600 dark:hover:text-indigo-300 cursor-pointer"> <i class="bi bi-plus-circle-fill text-[1.25rem] mr-1"></i> New Task</div>
      <div class="sm:hidden sm:ml-0 text-indigo-500 dark:text-indigo-400 font-normal hover:text-indigo-600 dark:hover:text-indigo-300 cursor-pointer"> <i class="bi bi-plus text-[1.25rem] mr-1 "></i> New Group</div>
    </footer>
    `
}