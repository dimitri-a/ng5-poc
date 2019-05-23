import { Component } from '@angular/core';
import {MyServiceService } from './services/my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ajax to barca';


  public players = [];
  public errorMsg;
  constructor(private _playersService: MyServiceService) { }

  ngOnInit() {
    this._playersService.getPlayers()
      .subscribe(data => this.players = data,
                error => this.errorMsg = error);
  }
}
