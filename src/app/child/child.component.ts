import { Component, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childData: number = 0; 

  @Output() childEvent = new EventEmitter<number>(); 

  constructor() {
    console.log('Constructor: ChildComponent created');
  }

  ngOnInit(): void {
    console.log('ngOnInit: ChildComponent initialized with childData:', this.childData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ChildComponent input property changed', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: ChildComponent change detection triggered');
  }


  sendDataToParent() {
    
    const data = Math.floor(Math.random() * 10);
    this.childEvent.emit(data);
  }
}
