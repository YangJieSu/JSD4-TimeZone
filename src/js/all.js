const timeZoneDate = [
  {
    city: 'NEW YORK',
    timezone: 'America/New_York',
  },
  {
    city: 'LONDON',
    timezone: 'Europe/London',
  },
  {
    city: 'BANGKOK',
    timezone: 'Asia/Bangkok',
  },
  {
    city: 'TAIWAN',
    timezone: 'Asia/Taipei',
  },
  {
    city: 'SYDNEY',
    timezone: 'Australia/Sydney',
  },
];

function printTimeZone() {
  const el = document.querySelector('.timeZone-body');
  let content = '';
  timeZoneDate.forEach((item) => {
    const localTime = getTimeZone(item.timezone);
    content += `
    <li class="d-flex justify-content-between align-items-center">
      <div>
        <h3 class="timeZone-city text-uppercase mb-0 font-weight-bold">${item.city}</h3>
        <div class="timeZone-date font-italic font-weight-bold text-uppercase">${localTime.date} ${localTime.month}. ${localTime.year}</div>
      </div>
      <div>
        <div class="timeZone-time">${localTime.time}</div>
      </div>
    </li>
  `;
  });
  el.innerHTML = content;
}

const getTimeZone = function getTimeZone(timeZoneStr) {
  const now = new Date();
  const localTime = now.toLocaleString('zh-TW', {
    timeZone: timeZoneStr,
    hour12: false,
  });
  const dateStr = localTime.split(' ')[0];
  const timeStr = localTime.split(' ')[1];
  const year = dateStr.split('/')[0];
  const month = now.toLocaleString('en-US', {
    timeZone: timeZoneStr,
    hour12: false,
    month: 'long',
  }).slice(0, 3);
  const date = dateStr.split('/')[2];
  const time = timeStr.slice(0, 5);
  const localTimeData = {
    year,
    month,
    date,
    time,
  };
  return localTimeData;
};
printTimeZone();
setInterval(printTimeZone, 1000);
