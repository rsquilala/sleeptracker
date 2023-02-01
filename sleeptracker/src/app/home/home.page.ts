import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(public sleepService:SleepService, private alertController: AlertController) {}

	ngOnInit() {}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allOvernightData() {
		return SleepService.AllOvernightData;
	}

	async remove(sleepData:OvernightSleepData) {
		const alert = await this.alertController.create({
			header: 'Delete this entry?',
			buttons: [
				{
				text: 'Cancel',
				role: 'cancel'
				},
				{
				text: 'Confirm',
				role: 'delete'
				}
			],
		});
	
		await alert.present();
	
		const { role } = await alert.onDidDismiss();

		if (role == 'delete') this.sleepService.removeOvernightData(sleepData);
	}

}
