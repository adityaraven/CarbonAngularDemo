import { PromtFormComponent } from './promt-form/promt-form.component';
import { Component, destroyPlatform, OnInit } from '@angular/core';
import { ModalButtonType, ModalService } from 'carbon-components-angular';

@Component({
	selector: 'app-promt',
	templateUrl: './promt.component.html',
	styleUrls: ['./promt.component.scss']
})
export class PromtComponent implements OnInit {

	constructor(protected modalService: ModalService) { }

	ngOnInit(): void {
	}

	

	openDeleteModal() {
		 this.modalService.show(this.data
		// 	label: "Delete Prompt",
		// 	title: "Delete Receipients",
		// 	content: "Do you want to delete the receipients permanently?",
		// 	showCloseButton: true,
		// 	size: 'sm',
		// 	buttons: [{
		// 		text: "Cancel",
		// 		type: ModalButtonType.secondary
		// 	}, {
		// 		text: "Delete",
		// 		//type: ModalButtonType.danger,
		// 		type: ModalButtonType.primary,
		// 		click: () => alert("OK button clicked")
		// 	}]
		);
	}
	data:any = {
		type:"danger",
		label:"Warning",
		title:"Sure Delete",
		content:"Are you sure!!!!!",
		size:"sm",
		buttons: [{
						text: "Cancel",
						type: ModalButtonType.secondary
					}, {
						text: "Delete",
						//type: ModalButtonType.danger,
						type: ModalButtonType.primary,
						click: () => alert("OK button clicked")
					}]
	};

	// openDeleteModal() {
	// 	this.modalService.create({
	// 		component: PromtFormComponent,
	// 		inputs: {
	// 			modalText: "Warning",
	// 			size: 'sm',
	// 			showCloseButton: true,
	// 		}
	// 	});
	// }


	

	openSendModal() {
		this.modalService.show({
			label: "Notification Prompt",
			title: "Send Notification to all",
			content: "Do you want to send the notification to all the receipients in the database?",
			showCloseButton: true,
			size: 'sm',
			buttons: [{
				text: "Cancel",
				type: ModalButtonType.secondary
			}, {
				text: "Send",
				//type: ModalButtonType.danger,
				type: ModalButtonType.primary,
				click: () => alert("OK button clicked")
			}],
		});
	}

}
