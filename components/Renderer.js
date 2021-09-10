export class Renderer {
    constructor({place, sum, period}, containerSelector, gridSelector, templateSelector) {
        this._place = place;
        this._sum = sum;
        this._period = period;
        this._containerSelector = containerSelector;
        this._templateSelector = templateSelector
        this._gridSelector = gridSelector;
        this._listTemplate = document.querySelector(this._templateSelector).content;
        this._listElement = this._listTemplate.querySelector(this._containerSelector).cloneNode(true);
    }

    renderList() {
        this._listElement.querySelector('.place').textContent = this._place;
        this._listElement.querySelector('.sum').textContent = this._sum;
        this._listElement.querySelector('.period').textContent = this._period;
        this._gridSelector.prepend(this._listElement);
    }
}