import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
	//---------TOOLTIP--------------
	offset: object = {
		x: 0,
		y: 0
	}

	triggerText: string ="This is tooltip";

  stringContentTooltip: string = "Tooltip text";
  content = "Heloooohksdhahkdhsah hhda khsakd hk skd hkhakskhd kjhkdshkhd ksahkdhs kh kdk hdkh khkdsahk hh khas khdkshk hdsak hkh khdskhdkhkdsahkhdsa h hk dsakh kdshkhdask h dskahkdhkd hsakhdsahd ksah kh khdsakhkdasykuafv  kaf";

}
