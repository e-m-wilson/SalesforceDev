import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {

    @track
    items = ['FirstValue'];

    removeItem(e) {
       this.items.splice(e.target.dataset.item, 1);
    }

    addItem() {
        this.items.push(this.refs.toDo.value);
    }
}