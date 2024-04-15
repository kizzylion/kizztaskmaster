export function renderNavUi(){

    
    return document.body.innerHTML = `
    <div id="main-container" class="flex  text-light-text-tertiary dark:text-dark-text-tertiary h-full w-full">
    <nav id="Navigator" class="flex flex-col bg-gray-100 dark:bg-neutral-950 dark:md:bg-gray-800 w-full sm:w-[45%] md:w-[46%] lg:w-[37%] xl:w-[21%] h-full border-r border-gray-200 dark:border-stone-950">
    <header class="flex p-5 lg:p-4 border-b-2 border-gray-200 dark:border-stone-800">
      <h1 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
        KizzTask<span class="text-light-text-brand-tertiary dark:text-dark-text-brand-tertiary">Master</span>
      </h1>
      <button class="ml-auto px-1 py-0 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:bg-dark-bg-secondary-hover" id="theme-toggle"></button>
    </header>
    <section class="flex flex-col h-full overflow-auto lg:overflow-hidden">
      <div id="dashboard" class="w-full grid grid-cols-2 p-5  sm:p-4 lg:pr-2.5 gap-4 lg:gap-2 mt-6">
        <div id="allTab" data-id="tab" class="p-3 lg:p-2 bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600  rounded-lg">
          <div class="flex justify-between items-center">
            <span  class="p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-inbox-fill text-white text-xl lg:text-base m-auto"></i></span>
            <h3 id="allTabCount" class="ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 ">1</h3>
          </div>
          <h4 class="text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none">All</h4>
        </div>

        
        <div id="todayTab" data-id="tab" class="p-3 lg:p-2 bg-white dark:bg-stone-900 h dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600   rounded-lg">
          <div class="flex justify-between items-center">
            <span  class="p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-inbox-fill text-white text-xl lg:text-base m-auto"></i></span>
            <h3 id="todayTabCount" class="ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 ">0</h3>
          </div>
          <h4 class="text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none">Today</h4>
        </div>

        
        <div id="priorityTab" data-id="tab" class="p-3 lg:p-2 bg-white dark:bg-stone-900 h dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600   rounded-lg">
          <div class="flex justify-between items-center">
            <span  class="p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-inbox-fill text-white text-xl lg:text-base m-auto"></i></span>
            <h3 id="priorityTabCount" class="ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 ">3</h3>
          </div>
          <h4 class="text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none">Priority</h4>
        </div>

        
        <div id="completedTab" data-id="tab" class="p-3 lg:p-2 bg-white dark:bg-stone-900 h dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600   rounded-lg">
          <div class="flex justify-between items-center">
            <span  class="p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-inbox-fill text-white text-xl lg:text-base m-auto"></i></span>
            <h3 id="completedTabCount" class="ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 ">2</h3>
          </div>
          <h4 class="text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none">Completed</h4>
        </div>

      </div>
      
      <div id="groupdiv" class=" flex flex-col h-full lg:overflow-auto lg:hover:overflow-scroll relative">
        <header class="text-gray-900 dark:text-white md:dark:text-gray-300 mt-0 pb-2 font-bold px-5 text-[140%] lg:text-xs md:lg:pb-2 lg:pt-4 dark:lg:text-gray-500 lg:sticky top-0 bg-gray-100 dark:bg-neutral-950 dark:md:bg-gray-800  lg:border-b lg:border-gray-200 lg:dark:border-gray-700">My Projects</header>
        <ul id="taskgroups" class="px-4 py-2 flex  flex-col rounded-lg lg:pr-2.5" >
          <!-- Taskgroup List -->
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Reminder</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          </li>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-orange-500 dark:bg-orange-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Home</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          </li>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-blue-500 dark:bg-blue-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Work</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Reminder</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          </li>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-orange-500 dark:bg-orange-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Home</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          </li>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-blue-500 dark:bg-blue-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Work</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Reminder</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          </li>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-orange-500 dark:bg-orange-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Home</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          </li>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-blue-500 dark:bg-blue-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Work</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Reminder</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          </li>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-orange-500 dark:bg-orange-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Home</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          </li>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-blue-500 dark:bg-blue-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Work</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Reminder</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          </li>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-orange-500 dark:bg-orange-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Home</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          </li>
          <li class="group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
            <span  class="p-2 grid place-content-center bg-blue-500 dark:bg-blue-600 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
            <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
              <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">Work</h4>
              <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">0</p>
              <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
            </span>
          

        </ul>
      </div>
    </section>
    <footer class="flex px-5 py-4 lg:px-8 lg:pr-6 bg-gray-100  dark:bg-neutral-950 dark:md:bg-gray-800  dark:bg-neutral-950 dark:md:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div data-element="newtask" class="sm:hidden text-indigo-500 hover:text-indigo-600 cursor-pointer dark:text-indigo-400 dark:hover:text-indigo-300 font-medium "> <i class="bi bi-plus-circle-fill text-[1.25rem] mr-1"></i> New Task</div>
      <div data-element="newgroup" class="ml-auto text-indigo-500 dark:text-indigo-400 hover:text-indigo-600  font-medium cursor-pointer dark:hover:text-indigo-300 "> <i class="bi bi-plus text-[1.25rem] mr-1 "></i> New Group</div>
    </footer>
  </nav>
  <main class="hidden sm:flex flex-col bg-gray-50 dark:bg-gray-900 dark:md:bg-gray-900 w-full sm:w-[55%] md:w-[64%] lg:w-[63%] xl:w-[79%] h-full relative"></main>
  </div>
  <div id="GroupModalElement" class="relative z-10 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true"></div>
    `
}