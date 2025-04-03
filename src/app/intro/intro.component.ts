import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, MatIconModule, AboutComponent, SkillsComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

}
