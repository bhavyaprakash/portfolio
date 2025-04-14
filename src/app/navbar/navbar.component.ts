import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { IntroComponent } from "../intro/intro.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSnackBarModule, IntroComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDarkMode = false;
  constructor(private snackBar: MatSnackBar) {}
  showMobileMenu = false;

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }


  showDownloadMessage() {
    this.snackBar.open('Downloading Resume...', '✖', {
      duration: 3000, // Closes after 3 seconds
      verticalPosition: 'top', // Positions at top
      horizontalPosition: 'center', // Centered horizontally
      panelClass: ['custom-snackbar'] // Custom class for styling
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  scrollToAbout() {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToWork(){
    const workSection = document.getElementById('exp-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContact(){
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
