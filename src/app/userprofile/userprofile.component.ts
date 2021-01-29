import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { CountryService } from '../shared/country.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  allUsers: User[];
  
  constructor(private userservice: UserService,
              private countryservice: CountryService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  // tslint:disable-next-line:typedef
  getAllUsers(){
    this.userservice.getAllUsers().subscribe(
      (data: User[]) => {
        this.allUsers = data;
      });
  }
  // tslint:disable-next-line:typedef
  deleteUser(id: number){
     this.userservice.deleteUser(id).subscribe(
       (data: User) => {
         this. getAllUsers();
       }
     );
}
  // tslint:disable-next-line:typedef
  update(user){
    this.userservice.currentUser = Object.assign({}, user);
  }
}
