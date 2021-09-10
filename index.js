// import {List} from "./components/List";
// import {Renderer} from "./components/Renderer"

const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submitBtn');
const specBtn = document.querySelector('.specBtn');
const listGrid = document.querySelector('.result');
const listSum = document.querySelector('.sum')


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
    },

    {
        place: "FooMarket",
        sum: "20",
        period: "12/12/12"
    },

    {
        place: "BooMarket",
        sum: "60",
        period: "11/11/12"
    },
    {
        place: "FooMarket",
        sum: "20",
        period: "12/12/12"
    },

    {
        place: "BooMarket",
        sum: "60",
        period: "11/11/12"
    },

]

cardsList.forEach((obj) => renderList(obj.place, obj.sum, obj.period));

function renderList(place, sum, period) {
    const listTemplate = document.querySelector('#list').content;
    const listElement = listTemplate.querySelector('.container').cloneNode(true);
    listElement.querySelector('.place').textContent = place;
    listElement.querySelector('.sum').textContent = sum;
    listElement.querySelector('.period').textContent = period;
    listGrid.prepend(listElement);
}

submitBtn.addEventListener('click', () => renderList(cardsList));


// function countSum(list) {
//     const sumSum = list
//         .map((item) => item.sum)
//         .map(Number)
//         .reduce((akk, prev) => akk + prev, 0)
//     console.log(sumSum)
// }


function sumByPlace(list, placeName) {
    const sumSum = list
        .filter((item) => item.place === placeName)
        .map((item) => item.sum)
        .map(Number)
        .reduce((akk, prev) => akk + prev, 0)
    return sumSum
}

function placeName(list) {
    const placeSumList = {}
    list.map((item) => item.place)
        .forEach((place) => {
            placeSumList[place] = sumByPlace(list, place);
        })
    for (const key in placeSumList) {
        const value = placeSumList[key]
        placeSum(key, value)
    }
}


specBtn.addEventListener('click', () => placeName(cardsList))

function placeSum(place, sum) {
    console.log(place, sum);
    const listTemplate = document.querySelector('#spec-list').content;
    const listElement = listTemplate.querySelector('.specific').cloneNode(true);
    listElement.querySelector('.place').textContent = place;
    listElement.querySelector('.sum').textContent = sum;
    listSum.prepend(listElement);
}

