import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  techStack = [
    { title: "Frontend", icon: "fab fa-html5",allTech:['Angular', 'JavaScript', 'Typescript', 'HTML5', 'CSS3'] },
    { title: "Backend", icon: "fas fa-server" ,allTech:['Node.js', 'Java', 'Python', 'ASP.NET', 'C#']},
    { title: "DevOps", icon: "fas fa-project-diagram",allTech:['Docker', 'Git', 'Jenkins', 'Azure DevOps Server', 'ALM', 'Terraform', 'Octopus Deploy'] },
    { title: "Database", icon: "fas fa-database",allTech:['MS SQL', 'MongoDB', 'PostgreSQL', 'Oracle', 'GraphQL'] },
    { title: "Big Data", icon: "fas fa-chart-line",allTech:['Hadoop', 'Spark', 'Cassandra'] },
    { title: "Testing", icon: "fas fa-flask",allTech:['Selenium', 'Protractor', 'UFT', 'Postman', 'JMeter', 'Fiddler'] },
  ];
  flipped = false;
  constructor(private router: Router) {}
}
