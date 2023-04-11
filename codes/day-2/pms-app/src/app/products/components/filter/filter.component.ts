import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filterValue = ''
  @Output() filterValueChanged = new EventEmitter<string>()
  @Input() sample = ''

  updateFilterValue(newValue: string) {
    this.filterValue = newValue
    this.filterValueChanged.emit(this.filterValue)
  }
}
