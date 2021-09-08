// import {List} from "./components/List";
// import {Renderer} from "./components/Renderer";

const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submitBtn');

const cardsList = [
    {
        place: "SunMarket",
        sum: "200",
        period: "12/12/12"
    },
    {
        place: "MoonMarket",
        sum: "600",
        period: "11/11/12"
    }
]


cardsList.forEach((obj) => renderList(obj.place, obj.sum, obj.period));


function renderList(place, sum, period) {
    const listGrid = document.querySelector('.result');
    const listTemplate = document.querySelector('#list').content;
     const listElement = listTemplate.querySelector('.container').cloneNode(true);
    listElement.querySelector('.place').textContent = place;
    listElement.querySelector('.sum').textContent = sum;
    listElement.querySelector('.period').textContent = period;
    listGrid.prepend(listElement);
}

submitBtn.addEventListener('click', renderList);

