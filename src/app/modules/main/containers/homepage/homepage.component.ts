import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../../../animations';
import {FirebaseService} from '../../../../core/services/firebase.service';
import {Observable} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {AngularFireAction, DatabaseSnapshot} from '@angular/fire/database';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [slideInDownAnimation]
})
export class HomepageComponent implements OnInit {
  categories: Observable<AngularFireAction<DatabaseSnapshot<{}>>[]> = this.fbservice.getItems();
  correctWidth: boolean;


  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  @HostListener('window:resize') onResize() {
    this.correctWidth = window.innerWidth < 786;
  }

  constructor(public fbservice: FirebaseService, private title: Title) {
    this.title.setTitle('ПП "Рефакт" м.Івано-Франківськ | Кольоровий та нержавіючий металопрокат. Виготовлення та монтаж поручнів');
  }

  ngOnInit() {
  }
}

