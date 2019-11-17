import { Component, OnInit } from '@angular/core';
import {RaterService} from '../rater.service';
import {PictureModel} from '../../shared/_models/picture.model';
import {BehaviorSubject, concat, merge, Observable, Subject} from 'rxjs';
import {mergeMap, startWith, switchMap, switchMapTo, tap} from 'rxjs/operators';

@Component({
  selector: 'app-rater',
  templateUrl: './rater.component.html',
  styleUrls: ['./rater.component.scss']
})
export class RaterComponent implements OnInit {

  public pictures$: Observable<PictureModel[]>;
  private choices$: Subject<{chosen, other}>;

  constructor(private apiService: RaterService) { }

  ngOnInit() {
    this.choices$ = new Subject<{chosen, other}>();

    this.pictures$ = concat(
      this.apiService.getImages({groupName: 'female'}), this.choices$.pipe(
      mergeMap(({chosen, other}) =>
        this.apiService.sendUserChoice({
        chosenPictureId: chosen,
        otherPictureId: other
      })),
      switchMapTo(this.apiService.getImages({groupName: 'female'}))
    ));


  }

  handleChoice(chosen: string, other: string) {
    this.choices$.next({chosen, other});
  }
}
