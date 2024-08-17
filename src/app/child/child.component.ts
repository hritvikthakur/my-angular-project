import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childData: number = 0; 

  @Output() childEvent = new EventEmitter<number>(); 

  sendDataToParent() {
    
    const data = Math.floor(Math.random() * 10);
    this.childEvent.emit(data);
  }
}
