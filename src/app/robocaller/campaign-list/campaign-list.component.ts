import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Campaign } from '../campaign/state';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  @Input() campaigns: Array<Campaign> = [];
  @Output() newCampaign = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
