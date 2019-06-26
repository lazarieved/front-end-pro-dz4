var age = prompt('Сколько тебе лет?');
var smoke = confirm('Куришь?');

if (age < 18 && !smoke) {
    alert ('Так держать!');
} else if (age >= 18 && !smoke){
    alert('Молодец, и не надо');
} else if (age >= 18 && smoke) {
    alert('Ну и зря');
}else {
    alert('Маме расскажу!');
}
