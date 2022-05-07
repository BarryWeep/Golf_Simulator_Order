// Model : contain all the code that saves and mananges data

let TheUser = [
    {
        UserId: "10210",
        Firstname: "Barry",
        Secondname: "Wang",
        Phone: "041252355",
        Email:"asdasd@qq.com",
        Date: "13Augest2021",
        StartTime: "08:00:00 AM",
        EndTime: "12:00:00 PM"
    }
];

let rowSetter= [];
let ColumnSetter= [];
let increaseTime = 7;
let the_week_date = 0;


function getFormData()
{
    const User_ID = Math.floor(Math.random() * (100000 - 10000)) + 10000; //不含最大值，含最小值
    
    const fname = document.getElementById("fname").value;
    
    const lname = document.getElementById("lname").value;
    const Phone = document.getElementById("phone").value;
    const Email = document.getElementById("email").value;
    const BookDate = document.getElementById("Pick_a_date").value;
    const Start_TIme = document.getElementById("StartTime");
    const answerOne = Start_TIme.value;
    const End_TIme = document.getElementById("EndTime");
    const answertwo = End_TIme.value;

    TheUser.push({        
    UserId: User_ID,
    Firstname: fname,
    Secondname: lname,
    Phone: Phone,
    Email: Email,
    Date: BookDate,
    StartTime: answerOne,
    EndTime: answertwo});

    let usersToString = JSON.stringify(TheUser);

    alert(usersToString);
    localStorage.removeItem("accessKey735");
    localStorage.setItem("accessKey735", usersToString);
}


//view contains all the code that manages Visuals

function Render()
{
    
    const d = new Date();
    the_week_date = d.getDay();

    let RetrieverTheUser = localStorage.getItem("accessKey735");
    let reformString = JSON.parse(RetrieverTheUser);
    if(Array.isArray(reformString))
    {
        TheUser = reformString;
    }
    else
    {
        TheUser= [];
    }

    let trslate =  document.getElementById('Pick_a_date').value = new Date().toISOString().slice(0, 10);
     document.getElementById('Pick_a_date_second').value = trslate;

     render_table(the_week_date);

}

function render_table(PickWeekdate)
{
 
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
    heading_2.innerHTML = "Sunday";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Monday";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Tuesday";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Wednesday";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "Thursday";
    let heading_7 = document.createElement('th');
    heading_7.innerHTML = "Friday";
    let heading_8 = document.createElement('th');
    heading_8.innerHTML = "Saturday";

    
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
            if(PickWeekdate==column_number)
            {
                ColumnSetter[column_number] =document.createElement('td');
                ColumnSetter[column_number].innerHTML = " ";
                ColumnSetter[column_number].style.background = "blue";
                rowSetter[row_number].appendChild(ColumnSetter[column_number]);

            }
            else
            {
                ColumnSetter[column_number] =document.createElement('td');
                ColumnSetter[column_number].innerHTML = " ";
                rowSetter[row_number].appendChild(ColumnSetter[column_number]);

            }
        }
        tbody.appendChild(rowSetter[row_number]);
        increaseTime +=0.5;
    }

}


function CalenderOnchange_first()
{
    /// left calender
    let ValueMedia_one = document.getElementById("Pick_a_date").value;
    let pcik_theday_one = new Date(ValueMedia_one).getDay();
    document.getElementById("Pick_a_date_second").value = ValueMedia_one;
    document.getElementById("Right_Bot_Selection").innerHTML="";
    render_table(pcik_theday_one);


}

function CalenderOnchange_second()
{
    /// right calender
    let ValueMedia = document.getElementById("Pick_a_date_second").value;
    let pcik_theday = new Date(ValueMedia).getDay();
    document.getElementById("Pick_a_date").value = ValueMedia;
    document.getElementById("Right_Bot_Selection").innerHTML="";
    render_table(pcik_theday);
}


///Controller


////run
Render();