/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
monday, tuesday, wednesday, thursday, friday, saturday, sunday
}

function isWeekend(days: Days): boolean {
  if (Days.saturday ?? Days.sunday) {
    return true
  }
  return false;
 }