import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MyFirstLWCComponent extends LightningElement {
   name="Test";
   handleClick(){
    window.alert('Hello Salesforce Learner');
    this.showToast(this.name);
   }
   showToast(firstArgument) {
    const event = new ShowToastEvent({
        title: firstArgument,
        message:
            'Hello Salesforce User Welcome to LWC Learning Channel',
            variant:'success',
    });
    this.dispatchEvent(event);
}
// Arrow Function
myFunction=(dividend,divisor) =>{
return(dividend/divisor);
}
  connectedCallback(){
    let callMyFunction=this.myFunction(20,10);
    window.alert('Divisor Function'+callMyFunction);
  }
}