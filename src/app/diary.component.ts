import { Component } from '@angular/core';
import { Record } from './record';
import { RecordService } from './record.service';

@Component({
	selector: 'diary',
	templateUrl: "app/UI/diary.html",
	styleUrls: ['app/UI/diary.css']
})

export class DiaryComponent {

	recordService: RecordService;
	record: Record = {
		color: "#ffffff",
		sentense: "null",
		date_num: "15"
	};

	upload(): void {
		this.recordService.upload(this.record);
	}
}