import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private snackBar: MatSnackBar){}
  showDownloadMessage() {
    this.snackBar.open('Downloading Resume...', '✖', {
      duration: 3000, // Closes after 3 seconds
      verticalPosition: 'top', // Positions at top
      horizontalPosition: 'center', // Centered horizontally
      panelClass: ['custom-snackbar'] // Custom class for styling
    });
  }
}
