import { LightningElement, track,api } from "lwc";

export default class ChildWebComponent extends LightningElement {
    value=100; 
  @api handleValueChange() {
    this.value=200;
  }
}