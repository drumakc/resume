
const target = document.getElementById('age');
let now = new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let dob = new Date(1983, 5, 29);
let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
let age;


//Возраст = текущий год - год рождения
age = today.getFullYear() - dob.getFullYear();

//Если ДР в этом году еще предстоит, то вычитаем из age одни год
if (today < dobnow) {
    age = age -1;
}

target.innerHTML = '(' + age + ' лет)';