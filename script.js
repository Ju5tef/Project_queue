const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('main-img');



selectEl.addEventListener('change', function() {


switch(true) {
    case this.value === 'italy' : registrationImage.src = "./Assets/italy.svg";
    break;
    case this.value === 'france' : registrationImage.src = "./Assets/france.svg";
    break;
    case this.value === 'salami' : registrationImage.src = "./Assets/salami.svg";
    break;
    case this.value === 'mush' : registrationImage.src = "./Assets/mush.svg";
    break;
    case this.value === 'cheese' : registrationImage.src = "./Assets/cheese.svg";
    break;
}
})

