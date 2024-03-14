export function selectmenuboxui(group) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="relative mt-2">
    <button
      type="button"
      id="listbox"
      class="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-700 py-1.5 pl-4 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
      aria-haspopup="listbox"
      aria-expanded="false"
      aria-labelledby="listbox-label"
      aria-activedescendant="${group.getGroupid()}"
    >
      <span class="flex items-center">
        <span
        id="optionicon"
          class=" p-2 grid place-content-center ${group.getGroupcolor()} rounded-full w-6 h-6 lg:w-6 lg:h-6"
        >
          <i
            class="bi bi-list-ul text-white text-sm m-auto"
          ></i>
        </span>

        <span
          id="optiontext"
          class="ml-3 block text-gray-600 dark:text-gray-100 truncate"
          >${group.getGroupname()}</span
        >
      </span>
      <span
        class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
      >
        <i
          class="bi bi-chevron-down text-gray-400 mr-0.5"
        ></i>
      </span>
    </button>

    <!--
    Select popover, show/hide based on select state.

    Entering: ""
      From: ""
      To: ""
    Leaving: "transition ease-in duration-100"
      From: "opacity-100"
      To: "opacity-0"
  -->

    <ul
      id="listoptions"
      class="hidden absolute z-10 mt-1 max-h-20 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm sm:leading-6"
      role="listbox"
      tabindex="-1"
      aria-labelledby="listbox-label"
      aria-activedescendant="${group.getGroupid()}"
    >
      <!-- Dropdown menu -->

      <!--
      Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

      Highlighted: "bg-indigo-600 text-white", Not Highlighted: "text-gray-900"
    -->

      
      
    </ul>
  </div>
    `;
  return div;
}

export function selectOptionUi(group) {
  const list = document.createElement("li");
  list.classList.add(
    "text-gray-900",
    "dark:text-gray-100",
    "cursor-default", 
    "select-none",
    "relative", 
    "py-2", 
    "pl-3", 
    "pr-9"
  )
  list.id = `${group.getGroupid()}`;
  list.setAttribute("role", "option");
  list.innerHTML = `
    <div class="flex items-center">
      <span
        id="optionicon"
        class="${group.getGroupcolor()} p-2 grid place-content-center rounded-full w-6 h-6 lg:w-6 lg:h-6"
      >
        <i
          class="bi bi-list-ul text-white text-sm m-auto"
        ></i>
      </span>

      <span class="ml-3 block truncate"
        >${group.getGroupname()}</span
      >
    </div>

    <!--
    Checkmark, only display for selected option.

    Highlighted: "text-white", Not Highlighted: "text-indigo-600"
  -->
    <span
      class="hidden highlightedEl text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
    >
      <svg
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </li>
    `;
  return list
}

export function toggleListbox() {
  
    const isExpanded =
        listbox.getAttribute("aria-expanded") ===
        "true";
  
    const change = !isExpanded ? true : false;
  
    listbox.setAttribute("aria-expanded", change);
  
    if (!isExpanded) {
        listoptions.classList.remove("hidden");
        listoptions.classList.add('transition', 'ease-in', 'duration-100', 'opacity-100');
  
        const isHighlighted =
        listbox.getAttribute(
        "aria-activedescendant"
        ) === "listbox-option-0";
        
        let options = listoptions.querySelectorAll("[role=option]");
        options.forEach((option) => {
        option.addEventListener("mouseenter", focusin);
        option.addEventListener("mouseleave", focusout);
        
        
        });
  
  
  
    } else {
        listoptions.removeAttribute(
        "aria-activedescendant"
        );
        listoptions.classList.remove("transition", "ease-in", "duration-100", "hidden");
        listoptions.classList.add("transition", "ease-in", "duration-0", "opacity-0" ,"hidden");
        
    }
  
    
}

// manage keyboard navigation of the options

function focusin() {
    this.classList.remove("text-gray-900");
    this.classList.add("bg-indigo-500", "text-white" ,"dark:bg-indigo-600");
  }

  //manage highlight styles based on mouseenter/mouseleave

  function focusout() {
    this.classList.remove("bg-indigo-500", "text-white","dark:bg-indigo-600");
    this.classList.add("text-gray-900");
  }

  //when user selects an option

  export function selectoption(e) {
    const listbox = document.getElementById("listbox");
    const listoptions = document.querySelector("#listoptions");
    const selectedid = e.id;
    console.log(selectedid)
    const selected = document.getElementById(selectedid);

    listbox.setAttribute("aria-activedescendant", selectedid);
    listoptions.setAttribute("aria-activedescendant", selectedid);

    // selected.classList.add("bg-indigo-600", "text-white");
    // selected.classList.remove("text-gray-900");

    toggleListbox();
    return selectedid 
}

// update listbox ui based on selected option


function selectedoption() {
    return listoptions.getAttribute("aria-activedescendant");
  }