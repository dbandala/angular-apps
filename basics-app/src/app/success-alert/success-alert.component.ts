import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

const alert_data = {
  type: 'success',
  message: 'This is a warning alert',
}

@Component({
  selector: 'app-success-alert',
  imports: [NgbAlertModule],
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css',
  standalone: true
})
export class SuccessAlertComponent {
  alert = alert_data;

  constructor() {
		this.reset();
	}

  reset() {
		this.alert = alert_data;
	}
}
