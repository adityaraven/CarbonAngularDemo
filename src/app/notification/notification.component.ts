import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'carbon-components-angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(protected notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  show: boolean = true;


  showNotification(){

    setTimeout(() => {
      this.show=false;
    }, 4000);

    this.show=true;

      this.notificationService.showNotification({
        type: "success",
        title: "notification",
        message: "notification created successfully",
        target: ".notification-container"
      });
    }

}
