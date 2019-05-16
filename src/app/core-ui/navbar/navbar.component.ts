import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { AuthService, AuthQuery } from '@auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  user$;

  constructor(public authService: AuthService,
              public authQuery: AuthQuery) { }

  ngOnInit() {
    this.user$ = this.authQuery.user$;
  }

}
