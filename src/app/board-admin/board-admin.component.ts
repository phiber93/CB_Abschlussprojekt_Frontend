import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';
import { User } from '../_interfaces/user';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrl: './board-admin.component.css'
})
export class BoardAdminComponent implements OnInit {
  users: User[] = [];
  currentUser: any
  isAdmin = false;

  constructor(private userService: UserService, private storageService: StorageService) { }

  getUsers(): void {
    this.userService.getAdminBoard()
      .subscribe(users => this.users = users);
  }

  deleteUser(id: number): void {
    if (window.confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(id);
      window.location.reload();
    }
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.currentUser = this.storageService.getUser()
      this.isAdmin = this.storageService.isAdmin()
      if (this.isAdmin) {
        this.getUsers();
      } else {
        window.location.assign("/home")
      }
    } else {
      window.location.assign("/home")
    }
  }
}
