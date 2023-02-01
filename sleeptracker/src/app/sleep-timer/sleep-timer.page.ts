import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';

import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';

@Component({
	selector: 'app-sleep-timer',
	templateUrl: './sleep-timer.page.html',
	styleUrls: ['./sleep-timer.page.scss'],
})
export class SleepTimerPage implements OnInit {
	time_started: Date = null;
	timer = null;
	is_running: boolean = false;
	device_is_face_down: boolean = false;
	last_logged_data: OvernightSleepData = null;

	orientation_listener: PluginListenerHandle = null;

	constructor(public sleepService: SleepService) { }

	ngOnInit() {
		if (this.orientation_listener === null) this.init_motion_listener();
	}

	requestPermission(): boolean {
		try {
			(DeviceMotionEvent as any).requestPermission().then(state => {
				if (state === 'granted') return true;
				else return false;
			});
		} catch {
			console.log('here');
			return true;
		}
	}

	async init_motion_listener() {
		try {
			const granted = (DeviceMotionEvent as any).requestPermission().then(state => {
				return (state === 'granted');
			});

			if (!granted) return;
		} catch (e) {
			// OS does not ask for permission to DeviceMotionEvent
		}

		this.orientation_listener = await Motion.addListener('orientation', (event) => {
			const epsilon = 30;
			if ((180 - Math.abs(event.beta) <= epsilon) && (Math.abs(event.gamma) <= epsilon)) {
				// Device is FACE DOWN (within 30 degrees)
				if (!this.device_is_face_down) {
					this.device_is_face_down = true;
					this.start();
				}
			} else {
				// Device is NOT FACE DOWN
				if (this.device_is_face_down) {
					this.device_is_face_down = false;
					this.stop();
				}
			}
		});
	}

	time(): string {
		if (!this.is_running) return "0:00:00";

		var current: Date = new Date();
		var elapsed: Date = new Date(current.getTime() - this.time_started.getTime());

		var hour = elapsed.getUTCHours().toString();
		var min = elapsed.getUTCMinutes().toString().padStart(2, '0');
		var sec = elapsed.getUTCSeconds().toString().padStart(2, '0');

		return hour + ':' + min + ':' + sec;
	}

	async start() {
		if (this.is_running) return;
		this.is_running = true;

		this.time_started = new Date();

		this.timer = setInterval(this.time.bind(this), 1000)
	}

	async stop() {
		if (!this.is_running) return;
		this.is_running = false;

		var data: OvernightSleepData = new OvernightSleepData(this.time_started, new Date());

		this.last_logged_data = data;
		this.sleepService.logOvernightData(data);

		// if (data.elapsed / (1000*60) > 0) {
		//   // Record it as a sleep only if the elapsed time is at least one minute (prevents accidental "sleeps")
		//   this.last_logged_data = data;
		//   this.sleepService.logOvernightData(data);
		// }

		clearInterval(this.timer);
	}

}
