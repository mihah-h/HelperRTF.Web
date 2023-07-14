import {Component, ViewChild} from '@angular/core';
import {AuthApiService} from "../../services/auth-api.service";
import {TuiHostedDropdownComponent} from "@taiga-ui/core";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

  openDropdown = false


  constructor(public auth: AuthApiService) {}

  logout() {
    this.auth.logout()
    this.closeDropdown()
  }

  closeDropdown() {
    this.openDropdown = false;
    this.component?.nativeFocusableElement?.focus();
  }
}
