import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  myDate: any;
  currentDate : any;

  constructor(private datePipe: DatePipe) { 
    this.myDate = new Date();
    this.currentDate = this.datePipe.transform(this.myDate, 'MMM/y');
    console.log("current date RANKING",this.currentDate);
  }

  //Check how this data is returned to the cinq points ranking of the intra, because the same format will be used
  usersRanking = [{name: "Victor Quintanilha", points:"490", ranking: "1"},
                  {name: "Maria Bastos", points:"440", ranking:"2"},
                  {name: "Mateus Couto", points:"440", ranking:"2"},
                  {name: "Leticia Pedroso", points:"410", ranking:"3"}]

  ngOnInit() {
  }

}
