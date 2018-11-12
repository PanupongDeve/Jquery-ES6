

export class JqueryGetTextController {
    constructor() {
        this.textView = $('#w3s');
        this.showTextBtn = $('#showText');
        this.showHTMLBtn = $('#showHTML');
        this.showHrefBtn = $('#showHref');
        this.showAltBtn = $('#showAlt');
    }

    start() {
        this.showText();
        this.showHtml();
        this.showHref();
        this.showAlt();
    }

    showText() {
        this.showTextBtn.click(() => {
            alert(this.textView.text());
        });
    }

    showHtml() {
        this.showHTMLBtn.click(() => {
            alert(this.textView.html());
        });
    }

    showHref() {
        this.showHrefBtn.click(() => {
            alert(this.textView.attr('href'));
        });
    }

    showAlt() {
        this.showAltBtn.click(() => {
            alert(this.textView.attr('alt'));
        })
    }
}