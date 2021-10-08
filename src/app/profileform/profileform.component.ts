import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.scss']
})
export class ProfileformComponent implements OnInit {

  public profileform: any;

	resourceGroups = [
		{ content: "None" },
		{ content: "Resource group 1"},
		{ content: "Resource group 2" }
	];
  constructor(protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
		this.profileform = this.formBuilder.group({
			fullname: new FormControl(),
			department: new FormControl(),
			designation: new FormControl(),
      phoneNo: new FormControl(),
      address: new FormControl()
		});
  }

  
  onSubmit(){
    console.log(this.profileform.value);
    this.profileform.reset();    
  }

}
