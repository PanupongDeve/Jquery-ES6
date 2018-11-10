import { Hello } from './Hello';
import { Dogs } from './apend';

const hello = new Hello();
const dogs = new Dogs();

$( document ).ready(() => {
    // Handler for .ready() called
    dogs.start();
    hello.start();
    
  });