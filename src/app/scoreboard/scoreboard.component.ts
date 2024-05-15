import { Component, OnInit } from '@angular/core';

import { ScoreService } from '../_services/score.service';
import { Score } from '../_interfaces/score';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent implements OnInit {
  allScores: Score[] = [];
  sortedScores: Score[] = [];
  scoresToShow = 10;
  scoreOrder = "descending"
  lastKey : any
  lastOrder: any

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.getScores()

    setTimeout(() => {
      this.sortedScores = this.allScores.slice(0, this.scoresToShow)
    }, 100)
  }

  getScores(): void {
    this.scoreService.getAllScores()
      .subscribe(scores => this.allScores = scores);
  }

  showMore(): void {
    this.scoresToShow += 5;
    this.sortedScores = this.allScores.slice(0,this.scoresToShow);
    this.sortScore(this.lastKey, this.lastOrder);
  }

  sortScore(key: keyof Score, order: any) {
    this.lastKey = key;
    this.lastOrder = order;
    this.sortedScores = this.sortArrayOfObjects(this.sortedScores, key, order)
  }



  sortArrayOfObjects = <T>(
    data: T[],
    keyToSort: keyof T,
    direction: 'ascending' | 'descending' | 'none',
  ) => {
    if (direction === 'none') {
      return data
    }
    const compare = (objectA: T, objectB: T) => {
      const valueA = objectA[keyToSort]
      const valueB = objectB[keyToSort]

      if (valueA === valueB) {
        return 0
      }

      if (valueA > valueB) {
        return direction === 'ascending' ? 1 : -1
      } else {
        return direction === 'ascending' ? -1 : 1
      }
    }

    return data.slice().sort(compare)
  }
}
