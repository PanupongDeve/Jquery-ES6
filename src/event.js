
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
        this.eventDoubleClick();
        this.eventMouseEnter();
        this.eventMouseLeave();
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

    eventDoubleClick() {
        this.mouseDoubleClick.on('dblclick', () => {
            this.countNumber.text('Game Over You Doble Click.');
            setTimeout(() => {
                this.countNumber.hide(); 
            }, 2000);
        });   
    }

    eventMouseEnter() {
        this.mouseEnter.on('mouseenter', () => {
            this.countNumber.text('Game Over You Mouse Enter.');
            setTimeout(() => {
                this.countNumber.hide(); 
            }, 2000);
        })
    }

    eventMouseLeave() {
        this.mouseEnter.on('mouseleave', () => {
            this.countNumber.text('Game Restart.');
            this.count = 0;
            setTimeout(() => {
                this.countNumber.show();
                this.countNumber.text(this.count);
            }, 2000);
        })
    }
}