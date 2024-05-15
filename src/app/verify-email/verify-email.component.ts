import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.css'
})
export class VerifyEmailComponent implements OnInit {
  @Input() emailToken: string = "";
  isSuccessful = false;
  errorMessage = '';
  isLoggedIn = false;

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {

    if (this.storageService.isLoggedIn()) {
      window.location.assign("/home")
    }

    this.authService.verifiyEmail(this.emailToken).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;

        setTimeout(() => { window.location.assign("/login") }
          , 3000)
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    })
  }
}
