import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from '../skills/skills.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, MatIconModule, AboutComponent, SkillsComponent, MatButtonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

  scrollToContact(){
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
