

export class JquerySetTextController {
    constructor() {
        this.setTextView = $('#setTextView');
        this.inputTextView = $('#inputTextView');
        this.setTextBtn = $('#setText');
        this.setHTMLBtn = $('#setHTML');
        this.setValBtn = $('#setVal');
    }



    start() {
        this.setText();
        this.setHtml();
        this.setVal();
    }

    setText() {
        this.setTextBtn.click(() => {
            this.setTextView.text('<b>Hello world!</b>');
        });
    }

    setHtml() {
        this.setHTMLBtn.click(() => {
            this.setTextView.html('<b>Hello world!</b>');
        });
    }

    setVal() {
        this.setValBtn.click(() => {
            this.inputTextView.val('Hello world!');
        });
    }
}