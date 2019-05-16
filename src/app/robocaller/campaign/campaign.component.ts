import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from './state';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  @Input() campaign: Campaign;

  constructor() { }

  ngOnInit() {
  }

}
