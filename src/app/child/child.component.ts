import { Component, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck, SimpleChanges,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
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
   
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: ChildComponent content projected');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: ChildComponent content checked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ChildComponent view initialized');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: ChildComponent view checked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: ChildComponent is about to be destroyed');
  }


  sendDataToParent() {
    
    const data = Math.floor(Math.random() * 10);
    this.childEvent.emit(data);
  }
}
