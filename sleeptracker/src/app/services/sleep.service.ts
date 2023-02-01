import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor() {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
	}
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logSleepData(sleepData:SleepData) {
		SleepService.AllSleepData.push(sleepData);
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		this.logSleepData(sleepData);
		SleepService.AllOvernightData.push(sleepData);
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		this.logSleepData(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
	}

	public removeSleepData(sleepData:SleepData) {
		var index = SleepService.AllSleepData.indexOf(sleepData);
		if (index >= 0) SleepService.AllSleepData.splice(index, 1);
	}

	public removeOvernightData(sleepData:OvernightSleepData) {
		this.removeSleepData(sleepData);

		var index = SleepService.AllOvernightData.indexOf(sleepData);
		if (index >= 0) SleepService.AllOvernightData.splice(index, 1);
	}

	public removeSleepinessData(sleepData:StanfordSleepinessData) {
		this.removeSleepData(sleepData);
		var index = SleepService.AllSleepinessData.indexOf(sleepData);
		if (index >= 0) SleepService.AllSleepinessData.splice(index, 1);
	}
}
