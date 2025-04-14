import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatCardModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences : any[] = [];
  constructor(private http: HttpClient){}
  ngOnInit() {
    this.http.get<any[]>('assets/experience.json').subscribe(data => {
      this.experiences = data;
    });
  }
}
