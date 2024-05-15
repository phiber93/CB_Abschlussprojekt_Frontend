import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Score } from '../_interfaces/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private scoreUrl = "http://localhost:8080/api/scores/level1/"

  constructor(private http: HttpClient) { }

  getAllScores(): Observable<Score[]> {
    return this.http.get<Score[]>(this.scoreUrl + "getAllScores")
  }

  getUserScore(): Observable<Score[]>{
    return this.http.get<Score[]>(this.scoreUrl + "getUserScores")
  }
}
