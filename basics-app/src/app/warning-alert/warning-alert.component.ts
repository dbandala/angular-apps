import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

const alert_data = {
  type: 'warning',
  message: 'This is a warning alert',
}
@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.css',
  imports: [NgbAlertModule],
  standalone: true
})
export class WarningAlertComponent {
  alert = alert_data;

  constructor() {
		this.reset();
	}

  reset() {
		this.alert = alert_data;
	}
}
