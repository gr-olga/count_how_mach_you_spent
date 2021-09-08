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
    },
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

// submitBtn.addEventListener('click', () => countSum(cardsList));


function countSum(list) {
    const sumSun = list
        .map((item) => item.sum)
        .map(Number)
        .reduce((akk, prev) => akk + prev, 0)
    console.log(sumSun)
}

submitBtn.addEventListener('click', () => placeName(cardsList));

function sumByPlace(list, placeName) {
    const sumSun = list
        .filter((item) => item.place === placeName)
        .map((item) => item.sum)
        .map(Number)
        .reduce((akk, prev) => akk + prev, 0)
    return sumSun
}

function placeName(list) {
    const res = {}
    list.map((item) => item.place)
        .forEach((place) => {
            res[place] = sumByPlace(list, place);
        })
    console.log(res)
}
