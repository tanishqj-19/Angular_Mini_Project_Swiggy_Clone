import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
