let currentDate = new Date(); // Global variable to track current month and year

function renderCalendar() {
    const calendarBody = document.getElementById('calendar-body');
    const monthYear = document.getElementById('calendar-month-year');
    
    // Clear previous data
    calendarBody.innerHTML = ''; 
    
    // Display month & year
    monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`; 
    
    // Get first day of the month
    let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // 0 = Sunday
    
    // Get total days in the month
    let totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); 
    
    // Add previous month's extra days
    for (let i = 0; i < firstDay; i++) {
        calendarBody.innerHTML += '<div></div>';
    }

    // Add current month days
    for (let i = 1; i <= totalDays; i++) {
        calendarBody.innerHTML += `<div>${i}</div>`;
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

renderCalendar();
