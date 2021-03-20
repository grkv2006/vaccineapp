import { LightningElement } from 'lwc';

export default class Usecase2 extends LightningElement {
    name = "";
    phone = "";
    email = "";
    isVisible = false;
    handleChangeName(event){
        this.name = event.target.value;
    }
    handleChangePhone(event){
        this.phone = event.target.value;
    }
    handleChangeEmail(event){
        this.email = event.target.value;
    }
    handleClick(event){
        this.isVisible = true;
    }

}