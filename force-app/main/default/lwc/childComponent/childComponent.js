import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
   @api title='Child Component Title';
  @api  changeTitleValue=() =>{
    this.title='Child Component Title value is Changed ';
   }
}