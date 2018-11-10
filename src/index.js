import { Hello } from './Hello';
import { Dogs } from './apend';
import { JqueryEvent } from './event';

const hello = new Hello();
const dogs = new Dogs();
const jqueryEvent = new JqueryEvent();

$( document ).ready(() => {
    // Handler for .ready() called
    dogs.start();
    hello.start();
    jqueryEvent.start();
    
});