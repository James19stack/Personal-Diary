import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries: Diary[] = [

  ];

  addNewDiary(newDiary){
    let diaryLength=this.diaries.length;
    newDiary.id=diaryLength++;
    newDiary.date = new Date(newDiary.date)
    this.diaries.push(newDiary)
    console.log(this.diaries)
    this.diaries.values();
  }
  showDetails(index){
    this.diaries[index].showDescription = !this.diaries[index].showDescription;
  }
  completeDiary(isComplete, index){
    if (isComplete) {
      this.diaries.splice(index,1);
    }
  }
  deleteDiary(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.diaries[index].title}?`)

      if (toDelete){
        this.diaries.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
