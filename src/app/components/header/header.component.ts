import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule, NgIf } from '@angular/common';
import { SigninComponent } from '../../pages/signin/signin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SigninComponent, NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  cartCount = 0;
  user: { name: string; email: string } | null = null;
  isMobileMenuOpen = false;
  userDropdownOpen = false;
  

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.totalItemsCount$.subscribe((count) => {
      this.cartCount = count;
    });
    
    this.fetchUserData();
  }

  ngDoCheck() {
    this.fetchUserData();
  }

  fetchUserData() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

 
  toggleUserDropdown(event: Event) {
    event.stopPropagation(); 
    this.userDropdownOpen = !this.userDropdownOpen;
  }
  logout() {
    localStorage.removeItem('user');
    this.user = null;
    this.userDropdownOpen = false;
    this.router.navigate(['/signin']);
  }

  @HostListener('document:click', ['$event'])
  closeUserMenuOnClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item') && !target.closest('.user-name')) {
      this.userDropdownOpen = false;
    }
  }
}
