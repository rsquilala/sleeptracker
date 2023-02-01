import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  @Input() loggedValue:number = 1;
  @ViewChild(IonModal) modal: IonModal;

  constructor(public sleepService:SleepService, private alertController: AlertController) {}

  ngOnInit() {}

  pinFormatter(value:number) {
    return `${value}`;
  }

  confirm() {
    var data = new StanfordSleepinessData(this.loggedValue);
    this.sleepService.logSleepinessData(data);
    this.modal.dismiss();
  }

  async remove(sleepData:StanfordSleepinessData) {
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

    if (role == 'delete') this.sleepService.removeSleepinessData(sleepData);
  }

  async presentInfo(loggedValue:number) {
    const alert = await this.alertController.create({
      header: `Sleepiness: ${loggedValue}`,
      message: StanfordSleepinessData.ScaleValues[loggedValue],
      buttons: ['OK'],
    });

    await alert.present();
  }

	get allSleepinessData() {
		return SleepService.AllSleepinessData;
	}

}
