window.addEventListener('load', () => {
    const form =document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector('#tasks');

    //Prevent the page from reloading when submitting the page
    form.addEventListener('submit', (e) => {
        e.preventDefault();//Prevent default behaviour

        //Catching the input
        const task = input.value;
        if(!task) {
            alert("Please Fill out a Task.");
            return;
        }

        //Create a div for the list of tasks with class "task"
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        //Div for task element with class content
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        //Append task content to task list
        task_el.appendChild(task_content_el);

        //Create an input for task element with class "text"
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text")
        task_input_el.type = "text;"
        task_input_el.value = task;//Add entered task value to task_input_el
        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);//Appent task_input_el to task_content_el div


        //Creating a div for buttons with class "actions"
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        //Creating "Edit" and "Delete" buttons with thier classes "edit" and "delete"
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "Edit";
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("edit");
        task_delete_el.innerText = "Delete"

        //Appending buttons to actions div
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        //Appending actions div to task element's div
        task_el.appendChild(task_actions_el)

        //Appending task element's div to task list's div
        list_el.appendChild(task_el);

        input.value = "";


        //Adding Event Listeners to action buttons
        task_edit_el.addEventListener('click', () => {
            if(task_edit_el.innerText.toLowerCase() === "edit"){
                task_input_el.removeAttribute("readonly");//Remove readonly attribute from added task text area to edit it.
                task_input_el.focus();//Automatically focuses the cursor to the text
                task_edit_el.innerText = "Save";
            }else {
                task_input_el.setAttribute("readonly", "readonly");//Add readonly attribute to remove editing functionality
                task_edit_el.innerText = "Edit";
            }
        });

        //Adding Event Listener to delete a task
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

    });
});