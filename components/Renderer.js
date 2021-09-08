// export class Renderer {
//     constructor({items, renderer}) {
//         this._items = items;
//         this._renderer = renderer;
//         this._containerSelector = containerSelector;
//     }
//
//     renderAllElements() {
//         const elements = []
//         this._items.forEach((item) => {
//             const el = this._renderer(item);
//             elements.unshift(el)
//         })
//         return elements;
//     }
// }