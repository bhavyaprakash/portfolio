import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatChipsModule,MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private snackBar: MatSnackBar) {}

  copyEmail() {
    navigator.clipboard.writeText('bhavya.prakash898@gmail.com').then(() => {
      this.snackBar.open('Email copied!', '', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    });
  }

  copyPhone() {
    navigator.clipboard.writeText('+91 8986903320').then(() => {
      this.snackBar.open('Phone number copied!', '', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    });
  }

}
