const calendar = document.querySelector(".calendar"),
    date = document.querySelector(".date"),
    daysContainer = document.querySelector(".days"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    todayBtn = document.querySelector(".today-btn"),
    gotoBtn = document.querySelector(".goto-btn"),
    dateInput = document.querySelector(".date-input"),


    eventDay = document.querySelector(".event-day"),
    eventDate = document.querySelector(".event-date"),
    eventContainer = document.querySelector(".events"),
    addEventBtn = document.querySelector(".add-event"),
    addEventWrapper = document.querySelector(".add-event-wrapper "),
    addEventCloseBtn = document.querySelector(".close "),
    addMapBtn = document.querySelector(".add-event-btn-map"),
    addMapWrapper = document.querySelector(".map "),
    addEventTitle = document.querySelector(".event-name "),
    addEventFrom = document.querySelector(".event-from "),
    addEventTo = document.querySelector(".event-to "),
    addEventSubmit = document.querySelector(".add-event-btn "),
    addEventLocation = document.querySelector(".event-location")



let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();







const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const eventsArrCompleted = []
const eventsArr = [
    {
        day : 13,
        month:11,
        year :2023,
        events:[
            {
                title: "Event 1",
                location: "Viking",
                time :"10:00Am",

            },
            {
                title: "Event 2",
                location: "Van Lang uni",
                time :"12:00Am",

            }
        ]
    },
    {
        day : 13,
        month:10,
        year :2023,
        events:[
            {
                title: "Event 1",
                location: "Viking",
                time :"10:00Am",

            },
            {
                title: "Event 2",
                location: "Van Lang uni",
                time :"12:00Am",

            }
        ]
    }
]






function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    date.innerHTML = months[month] + " " + year;

    let days = "";

    for (let x = day; x > 0; x--) {
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
    }
    
    for (let i = 1; i <= lastDate; i++) {


        let event = false;
        eventsArr.forEach((eventObj)=>{
            if (
                eventObj.day == i &&
                eventObj.month == month +1 &&
                eventObj.year == year
            ){
                event = true;
            }
        });



        // if (           
        //     i == 17 &&
        //     year == 2022 &&
        //     month == 6 )
        //     {
        //     days += `<div class="day">  </div>`;
        // }
        if (
            i == new Date().getDate() &&
            year == new Date().getFullYear() &&
            month == new Date().getMonth()
        ) {
            getActiveDay(i);
            activeDay =i;
            updateEvents(i);


            if(event){days += `<div class="day today event active  "> ${i} </div>`;}
            else {days += `<div class="day today active "> ${i} </div>`;}
        }
        else {
            if(event){days += `<div class="day event "> ${i} </div>`;}
            else {days += `<div class="day "> ${i} </div>`;};
        }
    }
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next-date"> ${j} </div>`
    }
    daysContainer.innerHTML = days

    addListener();


}



initCalendar();

function prevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    initCalendar();
}

function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalendar();
}
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

// initCalendar();
todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
});

dateInput.addEventListener("input", (e) => {
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
    if (dateInput.value.length === 2) {
        dateInput.value += "/";
    }
    if (dateInput.value.length > 7) {
        dateInput.value = dateInput.value.slice(0, 7);
    }
    if (e.inputType === "deleteContentBackward" && dateInput.value.length === 3) {
        dateInput.value = dateInput.value.slice(0, 2);
    }
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
    // console.log("here");
    const dateArr = dateInput.value.split("/");
    if (dateArr.length === 2 && (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4)) {
        month = dateArr[0] - 1;
        year = dateArr[1];
        initCalendar();
        return;
    }
    alert("Invalid Date");
}


addEventBtn.addEventListener("click",() => {
    addEventWrapper.classList.toggle("active")
})


addMapBtn.addEventListener("click",() => {
    addMapWrapper.classList.toggle("active")
})


addEventCloseBtn.addEventListener("click",() => {
    addEventWrapper.classList.remove("active")
})

document.addEventListener("click",(e)=>{
    if (e.target != addEventBtn && !addEventWrapper.contains(e.target) && e.target!= addMapBtn){
        addEventWrapper.classList.remove("active");
    }
}
)

addEventFrom.addEventListener("input", (e) => {
    addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
    if (addEventFrom.value.length === 2) {
      addEventFrom.value += ":";
    }
    if (addEventFrom.value.length > 5) {
      addEventFrom.value = addEventFrom.value.slice(0, 5);
    }
  });
  
addEventTo.addEventListener("input", (e) => {
addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
if (addEventTo.value.length === 2) {
    addEventTo.value += ":";
}
if (addEventTo.value.length > 5) {
    addEventTo.value = addEventTo.value.slice(0, 5);
}
});
  
function addListener(){
    const days = document.querySelectorAll(".day");
    days.forEach((day) => {
        day.addEventListener( "click" ,(e) => {

            activeDay = Number(e.target.innerHTML);


            getActiveDay(e.target.innerHTML);
            updateEvents(Number(e.target.innerHTML));

            // day.classList.add("active");

            days.forEach((day) =>{
                day.classList.remove("active");
            });

            if (e.target.classList.contains("prev-date")){
                prevMonth();
                setTimeout(()=>{
                    const days = document.querySelectorAll(".day");
                    
                    days.forEach((day)=>{
                        if(
                            !day.classList.contains("prev-date")&&
                        day.innerHTML ==e.target.innerHTML){
                            day.classList.add("active");
                        }
                    });
                },100);}
                else if (e.target.classList.contains("next-date")){
                    prevMonth();
                    setTimeout(()=>{
                        const days = document.querySelectorAll(".day");
                        
                        days.forEach((day)=>{
                            if(
                                !day.classList.contains("next-date")&&
                            day.innerHTML ==e.target.innerHTML){
                                day.classList.add("active");
                            }
                        });
                    },100);
            } else {
                e.target.classList.add("active")
            }
        });
    });
}


function getActiveDay(date){
    const day = new Date(year,month,date);
    const dayName=day.toString().split(" ")[0];
    eventDay.innerHTML = dayName;
    eventDate.innerHTML = date + " "+ months[month]+ " "+year;
}


function updateEvents(date){
    let events ="";
    eventsArr.forEach((event)=> {
        if(
            date ==event.day && 
            month +1 == event.month &&
            year == event.year
        ){

            event.events.forEach((event)=>{
                events +=`
                <div class="event">
                    <div class="event-tag1">
                        <div class="title">
                            <h3 class="event-title">${event.title}</h3>
                        </div>
                        <div class="location">Location: ${event.location}</div>

                        <div class="event-time" >${event.time}</div>
                    </div>
                </div> 
                `;
            });
        }
    });

    if ((events ==="")){
        events = `
        <div class="no-event">
        <h3>No Events</h3>
        </div>`;
    }
    // console.log(events);
    eventContainer.innerHTML =events;
}


addEventSubmit.addEventListener("click",()=>{
    const eventTile = addEventTitle.value;
    const eventTimeFrom = addEventFrom.value;
    const eventTimeTo = addEventTo.value;
    const eventLocation = addEventLocation.value;

    if(
        eventTile == ""||
        eventLocation == ""||
        eventTimeFrom == ""||
        eventTimeTo == ""
    ){ alert("Please fill all the fields");
    return;
    }

        const timeFromArr = eventTimeFrom.split(":");
        const timeToArr = eventTimeTo.split(":");

        if (
            timeFromArr.length != 2 ||
            timeToArr.length != 2 ||
            timeFromArr[0]>23 ||
            timeFromArr[1]>59 ||
            timeToArr[0]>23 ||
            timeToArr[0]>59 
        ){
            alert("Invalid Time Format");
        }
    const timeFrom = convertTime(eventTimeFrom);
    const timeTo = convertTime(eventTimeTo)

    const newEvent = {
        title : eventTile,
        location :eventLocation,
        time: timeFrom+ " - "+timeTo
    };

    let eventAdded = false;

    if (eventsArr.length>0){
        eventsArr.forEach((item) =>{
            if (
                item.day == activeDay &&
                item.month == month +1 &&
                item.year == year
            ){
                item.events.push(newEvent);
                eventAdded=true;
            }
        })
    }


    if(!eventAdded){
        eventsArr.push({
            day:activeDay,
            month:month +1,
            year:year,
            events: [newEvent],
        });
    }

    addEventWrapper.classList.remove("active")

    addEventTitle.value = "";
    addEventFrom.value="";
    addEventTo.value="";
    addEventLocation.value="";

    updateEvents(activeDay);

    const activeDayElem = document.querySelector(".day.active");
    if(!activeDayElem.classList.contains("event")){
        activeDayElem.classList.add("event");
    }

});



function convertTime(time){
    let timeArr = time.split(":");
    let timeHour = timeArr[0];
    let timeMin = timeArr[1];
    let timeFormat =timeHour >= 12 ?"PM" : "AM";
    timeHour = timeHour %12 || 12;
    time = timeHour + ":" + timeMin +" "+ timeFormat;
    return time;
    
}


eventContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("event")) {
      if (confirm("Are you sure you want to delete this event?")) {
        const eventTitle = e.target.children[0].children[0].children[0].innerHTML;
        eventsArr.forEach((event) => {
          if (
            event.day === activeDay &&
            event.month === month + 1 &&
            event.year === year
          ) {
            event.events.forEach((item, index) => {
              if (item.title === eventTitle) {
                event.events.splice(index, 1);
              }
            });
            //if no events left in a day then remove that day from eventsArr
            if (event.events.length === 0) {
              eventsArr.splice(eventsArr.indexOf(event), 1);
              //remove event class from day
              const activeDayEl = document.querySelector(".day.active");
              if (activeDayEl.classList.contains("event")) {
                activeDayEl.classList.remove("event");
              }
            }
          }
        });
        updateEvents(activeDay);
      }
    }
  });
  



// map search0-box

function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: 10.827647, lng: 106.700084 },
      zoom: 13,
      mapTypeId: "roadmap",
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
  
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
  
    let markers = [];
  
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
  
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
  
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
  
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          }),
        );
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
}
  
window.initAutocomplete = initAutocomplete;



const button_swcich = document.querySelector('.calendar-todolist'),
    todolist = document.querySelector('.todolist-container');


button_swcich.addEventListener("click",() => {
    calendar.classList.toggle("active")
    todolist.classList.toggle("active")
})
