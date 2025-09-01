const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];


// Get the element
var element = document.getElementById("my-calendar");
let appointments = document.getElementById("appointment-times")


let selectedDate;


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var month = today.getMonth()

today = dd + '/' + mm + '/' + yyyy;

let lastMonth = String(month-1).padStart(2, '0');

minDate = dd + '/' + lastMonth + '/' + yyyy;
console.log(minDate);

// Create the calendar
var myCalendar = jsCalendar.new(element, today,{
    monthFormat : "month YYYY",
    dayFormat : "DDD",
});

// Add events
myCalendar.onDateClick(function(event, date){

    // If date selected is before current date

    // Check: year

    if (date.getFullYear() < yyyy){
        appointments.style.display = "none";
        alert("Please select a date after today")
        return
    }
    else if (date.getMonth() < Number(mm)-1){
        appointments.style.display = "none";
        alert("Please select a date after today")
        return
    }
    else if (date.getMonth() === Number(mm)-1 && date.getDate() < Number(dd)){
        appointments.style.display = "none";
        alert("Please select a date after today")
        return
    }





    if (myCalendar.getSelected({type : "date"}).toString() != date){
        myCalendar.unselect(myCalendar.getSelected());
    }
    
    
    
    
    

        
    


    if (myCalendar.isSelected(date)){
        myCalendar.unselect(date);
        appointments.style.display = "none";
    }
    else if (!(myCalendar.isSelected(date))){
        
        myCalendar.select(date);
        intMonth = parseInt(date.getMonth());
        let strDate = date.getDate() + ' ' + months[intMonth]   + ' ' + date.getFullYear();
        localStorage.setItem("appDate", strDate)
        console.log(strDate);
        appointments.style.display = "block";
        
    }
    
});
