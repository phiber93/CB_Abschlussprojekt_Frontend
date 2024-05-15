import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    user_password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  isLoggedIn = false;

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn){
      window.location.assign("/profile")
    }
  }

  onSubmit(): void {
    const { username, email, user_password } = this.form;

    this.authService.register(username, email, user_password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
