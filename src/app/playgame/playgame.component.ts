import { Component } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-playgame',
  templateUrl: './playgame.component.html',
  styleUrl: './playgame.component.css'
})
export class PlaygameComponent {
  
  isLoggedIn = false;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }
}
