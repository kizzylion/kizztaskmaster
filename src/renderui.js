
export function renderUi() {
    const body = document.querySelector("body");
    body.innerHTML = `
    <nav id="Navigator" class="flex flex-col bg-gray-100 dark:bg-neutral-950 dark:md:bg-gray-800 w-full sm:w-[45%] md:w-[46%] lg:w-[37%] xl:w-[21%] h-full border-r border-gray-200 dark:border-stone-950">
    <header class="flex p-5 lg:p-4 border-b-2 border-gray-200 dark:border-stone-800">
      <h1 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
        KizzTask<span class="text-light-text-brand-tertiary dark:text-dark-text-brand-tertiary">Master</span>
      </h1>
      <button class="ml-auto px-1 py-0 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:bg-dark-bg-secondary-hover" id="theme-toggle"></button>
    </header>
    <section class="flex flex-col h-full overflow-auto lg:overflow-hidden">
      <div id="dashboard" class="w-full grid grid-cols-2 p-5  sm:p-4 lg:pr-2.5 gap-4 lg:gap-2 mt-6">
        <div data-id="tab" class="p-3 lg:p-2 bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600  rounded-lg">
          <div class="flex justify-between items-center">
            <span  class="p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-inbox-fill text-white text-xl lg:text-base m-auto"></i></span>
            <h3 class="ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 ">1</h3>
          </div>
          <h4 class="text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none">All</h4>
        </div>

        
        <div data-id="tab" class="p-3 lg:p-2 bg-white dark:bg-stone-900 h dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600   rounded-lg">
          <div class="flex justify-between items-center">
            <span  class="p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-inbox-fill text-white text-xl lg:text-base m-auto"></i></span>
            <h3 class="ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 ">0</h3>
          </div>
          <h4 class="text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none">Today</h4>
        </div>

        
        <div data-id="tab" class="p-3 lg:p-2 bg-white dark:bg-stone-900 h dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600   rounded-lg">
          <div class="flex justify-between items-center">
            <span  class="p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-inbox-fill text-white text-xl lg:text-base m-auto"></i></span>
            <h3 class="ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 ">3</h3>
          </div>
          <h4 class="text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none">Priority</h4>
        </div>

        
        <div data-id="tab" class="p-3 lg:p-2 bg-white dark:bg-stone-900 h dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600   rounded-lg">
          <div class="flex justify-between items-center">
            <span  class="p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-inbox-fill text-white text-xl lg:text-base m-auto"></i></span>
            <h3 class="ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 ">2</h3>
          </div>
          <h4 class="text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none">Completed</h4>
        </div>

      </div>
      
      <div id="groupdiv" class=" flex flex-col h-full lg:overflow-auto lg:hover:overflow-scroll relative">
        <header class="text-gray-900 dark:text-white md:dark:text-gray-300 mt-0 pb-2 font-bold px-5 text-[140%] lg:text-xs md:lg:pb-2 lg:pt-4 dark:lg:text-gray-500 lg:sticky top-0 bg-gray-100 dark:bg-neutral-950 dark:md:bg-gray-800  lg:border-b lg:border-gray-200 lg:dark:border-gray-700">My Projects</header>
        <ul id="taskgroups" class="px-4 py-2 flex flex-col rounded-lg lg:pr-2.5" >
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
  <main class="hidden sm:flex flex-col bg-gray-50 dark:bg-gray-900 dark:md:bg-gray-900 w-full sm:w-[55%] md:w-[64%] lg:w-[63%] xl:w-[79%] h-full relative">
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
  </main>

    `
}