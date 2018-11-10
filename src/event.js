
export class JqueryEvent {
    constructor() {
        this.mouseClick = $('#m1');
        this.mouseDoubleClick = $('#m2');
        this.mouseEnter = $('#m3');
        this.mouseLeave = $('#m4');
        this.countNumber = $('#count');
        this.count = 0;
    }

    start() {
        this.mouseEventStart();
    }

    mouseEventStart() {
        this.countNumber.text(this.count);
        this.eventClick();
    }

    eventClick() {
        this.mouseClick.click(() => {
            this.count++;
            if(this.count === 10) {
                this.count = 0;
            }
            this.countNumber.text(this.count);
        });
    }
}