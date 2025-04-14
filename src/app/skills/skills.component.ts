import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ExperienceComponent } from "../experience/experience.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatChipsModule, ExperienceComponent, ContactComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  skills: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get<any[]>('/assets/skill.json').subscribe(data => {
      this.skills = data;
    });
  }
}
