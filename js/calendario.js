document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Curso HTML 1',
                start: '2021-06-17',
                end:'2021-06-30'
            },

            {
                title: 'Curso CSS 1',
                start: '2021-07-01',
                end: '2021-07-15'
            },

            {
                title: 'Curso Javascript 1',
                start: '2021-07-17',
                end: '2021-07-30'
            }
        ]
    }); 

    calendar.render();
  });