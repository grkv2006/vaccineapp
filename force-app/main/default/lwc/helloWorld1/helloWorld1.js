import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    name = "world";
    handleChange(event){
        this.name= event.target.value;
    }
}