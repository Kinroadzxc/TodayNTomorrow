import { Component } from '@angular/core';
import { RecordService } from './record.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

@Component({
  selector: 'compe',
  templateUrl: "app/UI/compe.html",
  styleUrls: ['app/UI/compe.css']
})
export class CompeComponent {

constructor(recordService: RecordService){}
  // recordService: RecordService;

  word: string = "比较";

  test(): void {
    this.word = "hhhh";
    this.recordService.getTest();
  }
}