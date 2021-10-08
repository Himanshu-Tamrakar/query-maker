import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/httpclient/api.service';
import { BrmService } from '../service/brm.service';

@Component({
  selector: 'app-business-rules',
  templateUrl: './business-rules.component.html',
  styleUrls: ['./business-rules.component.scss'],
})
export class BusinessRulesComponent implements OnInit {
  selectedView = 'thumbnail';
  constructor(private brm: BrmService, api: ApiService) {}

  ngOnInit(): void {}

  highLightView(view) {
    this.selectedView = view;
  }
}
