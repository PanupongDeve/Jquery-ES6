
export class Dogs {
    constructor() {
        this.dogsHeader = $('#dogs-header');
        this.dogs = $('#dogs');
        this.dogList = ['momam', 'lulu', 'micmic']
    }

    start() {
        this.addHeader();
        this.addDogs();
    }

    addHeader() {
        this.dogsHeader.append(`<h1>Append</h1>`);
    }

    addDogs() {
        this.dogList.forEach(dog => {
            $(`<li>${dog}</li>`).appendTo(this.dogs);
        });
    }
}