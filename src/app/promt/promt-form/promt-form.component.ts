import { Component, OnInit } from '@angular/core';
import { ModalService } from 'carbon-components-angular';

@Component({
  selector: 'app-promt-form',
  templateUrl: './promt-form.component.html',
  styleUrls: ['./promt-form.component.scss']
})
export class PromtFormComponent implements OnInit {

  constructor(protected modalService: ModalService) { }

  ngOnInit(): void {
  }

  modalText = "Are you sure you want to delete this item from the database permanently!!";

  ClosePrompt(){
      alert("Closed");
  }

  DeleteAndClosePrompt(){
      alert("Deleted");
  }

}
