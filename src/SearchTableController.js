

export class SearchTableController {
    constructor() {
        this.searchInputView = $('#myInput');
        this.tableView = $("#myTable tr");
    }

    onSearchChange() {
        this.searchInputView.on('keyup', () => {
            const val = this.searchInputView.val().toLowerCase();
            this.filterText(val);
        });
    }

    filterText(text) {
        this.tableView.filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(text) > -1)
          });
    }

    start() {
        this.onSearchChange();
    }
}