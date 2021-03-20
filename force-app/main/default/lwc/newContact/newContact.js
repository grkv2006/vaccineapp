import { LightningElement ,api} from 'lwc';

export default class NewContact extends LightningElement {
    name="";
    phone ="";
   email = "";
   handleName(event) {
    this.name= event.target.value;
  }
  handlePhone() {
    this.phone= event.target.value;
  }
  handleEmail() {
    this.email= event.target.value;
  }


    handleSubmit(){
        const submitEvent = new CustomEvent('submit', {detail: {param : this.name, param1: this.phone,param2: this.email }});
        this.dispatchEvent(submitEvent);
    }
}