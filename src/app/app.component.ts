import { Component , OnInit, OnChanges, DoCheck,  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,SimpleChanges } from '@angular/core';
import { usersDataService } from './usersData.service'
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck ,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'child-parent';
  dataToChild= 10;
  dataFromChild: any;
  twoWaydata: any;
  users: any ;
  searchItem: any;
  filteredUsers: any= []

  constructor(private userData: usersDataService, private authService: AuthService) {
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

    ngAfterContentInit(): void {
      console.log('ngAfterContentInit: Content has been projected into the component');
    }
  
    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked: Component content has been checked by the change detection mechanism');
    }
  
    ngAfterViewInit(): void {
      console.log('ngAfterViewInit: Component’s view (and child views) has been initialized');
    }
  
    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked: Component’s view (and child views) has been checked by the change detection mechanism');
    }
  
    ngOnDestroy(): void {
      console.log('ngOnDestroy: AppComponent is about to be destroyed');
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

  
  // Login method
  login() {
    this.authService.login();
  }

  // Logout method
  logout() {
    this.authService.logout();
  }
    
}




