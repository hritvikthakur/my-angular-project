import { Component , OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
// import { Form } from '@angular/forms';
import { usersDataService } from './usersData.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  title = 'child-parent';
  dataToChild= 10;
  dataFromChild: any;
  twoWaydata: any;
  users: any ;
  searchItem: any;
  filteredUsers: any= []

  constructor(private userData: usersDataService) {
    console.log('Constructor: AppComponent created');
  }

  ngOnInit(): void {
    console.log('ngOnInit: AppComponent initialized');
    this.twoWaydata = "Initial Value";  // Set an initial value
    this.userData.users().subscribe((data) => {
      this.users = data;
      this.filterUsers();
    });
  }

    ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges: AppComponent input property changed', changes);
    }
  
    ngDoCheck(): void {
      console.log('ngDoCheck: AppComponent change detection triggered');
    }

   updateChild() 
   {
    this.dataToChild = Math.floor(Math.random() * 10)
    this.twoWaydata="Hritvik"
   }

   handleChildEvent(data: number) {
    this.dataFromChild = data;
  }

  // constructor(private userData:usersDataService)
  // {
  //   userData.users().subscribe((data)=>{
  //     // console.warn("data",data);
  //     this.users=data;
  //     this.filterUsers();
  //   })
  // }

 
  filterUsers() {
    if (this.searchItem) {
      this.filteredUsers = this.users.filter((user:any)=> {
        return user.title.toLowerCase().includes(this.searchItem.toLowerCase());
      });
    } else {
      this.filteredUsers = this.users;
    }
  }
  
}
    
  




