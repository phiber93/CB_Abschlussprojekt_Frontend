import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { ScoreService } from '../_services/score.service';
import { Score } from '../_interfaces/score';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  userScores: Score[] = []

  constructor(private storageService: StorageService, private scoreService: ScoreService) { }

  getUserScore() {
    this.scoreService.getUserScore()
      .subscribe(userScores => this.userScores = userScores);
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.currentUser = this.storageService.getUser();
      this.getUserScore()
    } else {
      window.location.assign("/home")
    }
  }
}
