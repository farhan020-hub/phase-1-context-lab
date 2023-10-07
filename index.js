/* Your Code Here */


function createEmployeeRecord(array) {
    const employeeRecord = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
    return employeeRecord;
  }

  function createEmployeeRecords(arrays) {
    const employeeRecords = arrays.map((array) => {
      return createEmployeeRecord(array);
    });
    return employeeRecords.slice(0, 10); 
  }

function createTimeInEvent(dateTimeString) {
    let [date, hour] = dateTimeString.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function createTimeOutEvent(dateTimeString) {
    let [date, hour] = dateTimeString.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(
      (event) => event.date === date
    );
    const timeOutEvent = this.timeOutEvents.find(
      (event) => event.date === date
    );
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }

 
  function wagesEarnedOnDate (date) {
    let wage = hoursWorkedOnDate.call(this, date)
        * this.payPerHour
    return parseFloat(wage.toString())
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function (rec) {
      return rec.firstName === firstName;
    });
  }

function calculatePayroll (arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
  
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

