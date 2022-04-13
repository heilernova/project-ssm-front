import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiSurveysService } from 'src/app/api/surveys/api-surveys.service';

@Component({
	selector: 'app-surveys',
	templateUrl: './surveys.component.html',
	styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {

	pollsters:any[] = [];
	pollster = new FormControl(0, Validators.required);
	range = new FormGroup({
		pollster: this.pollster,
		start: new FormControl(null, Validators.required),
		end: new FormControl(null, Validators.required),
	});

	surveys:{
		eps:number,
		ips:number,
		hospitalization:number,
		laboratory:number,
		medicine:number,
		odontology:number,
		pharmacy:number,
		total:number
	} = {eps:0, ips:0, hospitalization:0, laboratory:0, medicine:0, odontology:0, pharmacy:0, total:0 };

	constructor(
		private _apiSurveys:ApiSurveysService,
		private _router:Router
	) { 

		let date = new Date();
		let dateStart = `${date.getFullYear()}/${date.getMonth() + 1}/1`;
		
		date.setMonth(date.getMonth() + 1);
		let dateEnd = new Date(`${date.getFullYear()}/${date.getMonth() + 1}/1`);
		dateEnd.setDate(dateEnd.getDate() - 1);

		this._apiSurveys.getPollsters().subscribe({
			next: data =>{
				// console.log(data);
				data.push({id:0, name: 'TODOS'});
				this.pollsters = data;
			}
		})
		
		// console.log(date);
		this.range.get('start')?.setValue(new Date(dateStart));
		this.range.get('end')?.setValue(dateEnd);
		
		if (this.range.valid){
			this.getReport();
		}
		this.range.valueChanges.subscribe(value=>{
			if (this.range.valid){
				this.getReport();
			}
		});
	}

	ngOnInit(): void {
	}

	getReport(){
		if (this.range.valid){
			let start:Date = this.range.get('start')?.value;
			let end:Date = this.range.get('end')?.value;
			
			this._apiSurveys.getTotals(
				this.pollster.value, 
				`${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`,
				`${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`
			).subscribe({
				next: data=>{
					this.surveys = data;
				}
			});
		}
	}

	form(){
		this._router.navigate(['encuesta-de-satisfaccion']);
	}
	download(){
		if (this.range.valid){
			let start:Date = this.range.get('start')?.value;
			let end:Date = this.range.get('end')?.value;
			
			this._apiSurveys.getExcel(
				this.pollster.value, 
				`${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`,
				`${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`
			).subscribe({
				next: file=>{
					const dataType = file.type;
					const binaryData = [];

					binaryData.push(file);

					const filePath = window.URL.createObjectURL(new Blob(binaryData,{type: dataType}));

					const dowlink = document.createElement('a');
					dowlink.href = filePath;
					dowlink.setAttribute('download', 'reporte.xlsx');
					document.body.appendChild(dowlink);
					dowlink.click();
				}
			});
		}
	}

}
