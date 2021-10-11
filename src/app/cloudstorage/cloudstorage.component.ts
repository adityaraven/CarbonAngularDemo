import { Component, OnInit } from '@angular/core';
import { FileItem, NotificationService } from 'carbon-components-angular';


@Component({
  selector: 'app-cloudstorage',
  templateUrl: './cloudstorage.component.html',
  styleUrls: ['./cloudstorage.component.scss']
})
export class CloudstorageComponent implements OnInit {

  files: Set<FileItem> = new Set();
  static notificationCount = 0;
  notificationId = `notification-${CloudstorageComponent.notificationCount}`;
  protected maxSize = 500000;


  constructor(protected notificationService: NotificationService) {
    CloudstorageComponent.notificationCount++;
  }

  ngOnInit(): void {
  }


  onUpload() {
    this.files.forEach((fileItem:any) => {
      if (!fileItem.uploaded) {
        if (fileItem.file.size < this.maxSize) {
          fileItem.state = "upload";
          setTimeout(() => {
            fileItem.state = "complete";
            fileItem.uploaded = true;
            console.log(fileItem);
          }, 1500);
        }

        if (fileItem.file.size > this.maxSize) {
          fileItem.state = "upload";
          setTimeout(() => {
            fileItem.state = "edit";
            fileItem.invalid = true;
            fileItem.invalidText = "File size exceeds limit";
          }, 1500);
        }
      }
    });
  }



}
