import { Hello } from './Hello';
import { Dogs } from './apend';
import { JqueryEvent } from './event';
import { SearchTableController } from './SearchTableController';
import { JqueryGetTextController } from './JqueryGetTextController';

const hello = new Hello();
const dogs = new Dogs();
const jqueryEvent = new JqueryEvent();
const searchTableController = new SearchTableController();
const jqueryGetTextController = new JqueryGetTextController();

$( document ).ready(() => {
    // Handler for .ready() called
    dogs.start();
    hello.start();
    jqueryEvent.start();
    searchTableController.start();
    jqueryGetTextController.start();
});