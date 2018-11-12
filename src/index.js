import { Hello } from './Hello';
import { Dogs } from './apend';
import { JqueryEvent } from './event';
import { SearchTableController } from './SearchTableController';

const hello = new Hello();
const dogs = new Dogs();
const jqueryEvent = new JqueryEvent();
const searchTableController = new SearchTableController();

$( document ).ready(() => {
    // Handler for .ready() called
    dogs.start();
    hello.start();
    jqueryEvent.start();
    searchTableController.start();
    
});