document.getElementById('currentDay').textContent = moment().format('dddd, MMMM Do')

let presentHour = moment().hour()
let schedule = {
  'plan8': '',
  'plan9': '',
  'plan10': '',
  'plan11': '',
  'plan12': '',
  'plan13': '',
  'plan14': '',
  'plan15': '',
  'plan16': '',
  'plan17': ''
}

let workday = JSON.parse(localStorage.getItem('workday')) || schedule
schedule = workday

const stringInteger = (timeString) => {
  switch (timeString) {
    case '8AM': return 8
    case '9AM': return 9
    case '10AM': return 10
    case '11AM': return 11
    case '12PM': return 12
    case '1PM': return 13
    case '2PM': return 14
    case '3PM': return 15
    case '4PM': return 16
    case '5PM': return 17
  }


}

for (let i = 8; i <= 17; i++) {
  let time = stringInteger(document.getElementById(`time${i}`).textContent)
  if (presentHour == time) {
    document.getElementById(`plan${i}`).classList.add('present')
    document.getElementById(`plan${i}`).textContent="Current Hour"
  }
  else if (time < presentHour) {
    document.getElementById(`plan${i}`).classList.add('past')
  }
  else {
    document.getElementById(`plan${i}`).classList.add('future')
  }
  document.getElementById(`plan${i}`).textContent += workday[`plan${i}`]

}






document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')) {
    let note = event.target.previousElementSibling.children[0].value
    console.log(event.target.previousElementSibling.children[0].value)
    let plan = event.target.previousElementSibling.children[0].id
    schedule[plan] = note
    console.log(schedule)
    localStorage.setItem('workday', JSON.stringify(schedule))
    console.log(workday)

  }

})
