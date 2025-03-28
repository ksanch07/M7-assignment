// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let employees = document.getElementById('employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let $         = (id) => document.getElementById(id);
    id              = $("id");
    _name           = $("name");
    extension       = $("extension");
    email           = $("email");
    department      = $("department");
   
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employees.insertRow();
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDept = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id.value));
    cellName.appendChild(document.createTextNode(_name.value));
    cellExt.appendChild(document.createTextNode(extension.value));
    cellEmail.appendChild(document.createTextNode(email.value));
    cellDept.appendChild(document.createTextNode(department.value));
    
    // CREATE THE DELETE BUTTON
    let cellDelete = row.insertCell();
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger';
    deleteBtn.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteBtn);
    
    // RESET THE FORM
    form.reset();
    
    // SET FOCUS BACK TO THE ID TEXT BOX
    id.focus();
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    document.getElementById('empCount').textContent = `(${count})`;

})

// DELETE EMPLOYEE
employees.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (confirm('Are you sure you want to delete this employee?')) {
            let row = e.target.parentElement.parentElement;
            employees.deleteRow(row.rowIndex);
            count--;
            document.getElementById('empCount').textContent = `(${count})`;
        }
    }
})