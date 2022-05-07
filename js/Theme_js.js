// Rendering 
let TheUser = [
    {
        UserId: "1",
        Firstname: "Barry",
        Secondname: "Wang",
        Phone: "041252355",
        Email:"asdasd@qq.com",
        Date: "13Augest2021",
        StartTime: "08:00:00 AM",
        EndTime: "12:00:00 PM"
    },
    {},
    {}];

let rowSetter= [];
let ColumnSetter= [];
let increaseTime = 7;
//
function Render()
{

    let trslate =  document.getElementById('Pick_a_date').value = new Date().toISOString().slice(0, 10);
     document.getElementById('Pick_a_date_second').value = trslate;
 
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);
    
    document.getElementById("Right_Bot_Selection").appendChild(table);


    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Time";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Monday";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Tuesday";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Wednesday";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Thursday";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "Friday";
    let heading_7 = document.createElement('th');
    heading_7.innerHTML = "Saturday";
    let heading_8 = document.createElement('th');
    heading_8.innerHTML = "Sunday";
    
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    row_1.appendChild(heading_7);
    row_1.appendChild(heading_8);
    thead.appendChild(row_1);

    //////////////////////////////

    for(let row_number = 0; row_number<31;row_number++)
    {
        rowSetter[row_number] = document.createElement('tr');
        rowSetter[row_number].innerHTML=increaseTime;

        for(let column_number=0; column_number<7; column_number++)
        {
            ColumnSetter[column_number] =document.createElement('td');
            ColumnSetter[column_number].innerHTML = " ";
            rowSetter[row_number].appendChild(ColumnSetter[column_number]);
        }
        tbody.appendChild(rowSetter[row_number]);
        increaseTime +=0.5;
    }

}

function CalenderOnchange_first()
{
    let ValueMedia = document.getElementById("Pick_a_date").value;
    document.getElementById("Pick_a_date_second").value = ValueMedia;
}

function CalenderOnchange_second()
{
    let ValueMedia = document.getElementById("Pick_a_date_second").value;
    document.getElementById("Pick_a_date").value = ValueMedia;
}


//
Render();



///