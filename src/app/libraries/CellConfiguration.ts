export class CellConfiguration {
//   electricity: new Medium("E", "Electricity", "#f48642", "fa-bolt", "fa-circle-o"),
//   fuel: new Medium("F", "Fuel", "#67d3c8", "fa-free-code-camp", "fa-circle-o"),
//   gas: new Medium("G", "Gas", "#c981f9", "fa-fire",  "fa-circle-o"),
//   water: new Medium("W", "Water", "#5d9afc", "fa-tint", "fa-circle-o")
    constructor(
        public celltype: string = '',
        public handlerFunction: Function = function() { console.log('none'); },
        public value: any = null ) {
    }
}

export const CELL_TYPE = {
    value: 'value',            // new Medium("E", "Electricity", "#f48642", "fa-bolt", "fa-circle-o"),
    checkbox: 'checkbox',
    button: 'button',
    anchor: 'link'
};

