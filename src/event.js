
export class JqueryEvent {
    constructor() {
        this.click = $('#m1');
        this.doubleClick = $('#m2');
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
    }
}