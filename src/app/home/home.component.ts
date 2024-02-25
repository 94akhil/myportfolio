import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, ViewChild,Inject, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
import { PieChartComponent } from "../common/charts/pie-chart/pie-chart.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements AfterViewInit {

  path = "../../../assets/icons/";
  techStack1 = [
    {
      title: "Frontend",
      icon: "fas fa-solid fa-file-code",
      allTech: ["Angular", "JavaScript", "Typescript", "HTML5", "CSS3"],
      allImgIcon: [this.path + "typescript.png"],
      allFontIcon: [
        "fa-brands fa-css3-alt",
        "fa-brands fa-html5",
        "fa-brands fa-js",
        "fa-brands fa-angular",
      ],
    },
    {
      title: "Database",
      icon: "fas fa-database",
      allTech: ["MS SQL", "MongoDB", "PostgreSQL", "Oracle", "GraphQL"],
      allImgIcon: [
        this.path + "sql-server.png",
        this.path + "mysql.png",
        this.path + "mongo.png",
        this.path + "oracle.png",
        this.path + "postgresql.png"
      ],
      allFontIcon: [],
    }
  ];

  techStack2 = [
    {
      title: "Backend",
      icon: "fas fa-server",
      allTech: ["Node.js", "Java", "Python", "ASP.NET", "C#"],
      allImgIcon: [this.path + "web.png", this.path + "c-sharp.png"],
      allFontIcon: [
        "fa-brands fa-node",
        "fa-brands fa-java",
        "fa-brands fa-python",
      ],
    },
    {
      title: "DevOps",
      icon: "fas fa-project-diagram",
      allTech: [
        "Docker",
        "Gitlab",
        "Jenkins",
        "Azure DevOps Server",
        "Terraform",
      ],
      allImgIcon: [this.path + "terraform.png", this.path + "azure.png"],
      allFontIcon: [
        "fa-brands fa-docker",
        "fa-brands fa-gitlab",
        "fa-brands fa-jenkins",
      ],
    }
    
    
  ];
  flipped = false;

  @ViewChildren('leftSkills, rightSkills')
  sections!: QueryList<ElementRef>;

  @ViewChild(PieChartComponent)
  pieChart!: PieChartComponent;
  
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}


  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const animationName = element.getAttribute('data-animation');
            element.style.animationName = animationName || ''; // Apply the animation
            element.style.opacity = '1'; // Make element visible
            element.style.animationFillMode = 'forwards'; // Keep the state after animation
            element.style.animationDuration = '1s'; // Animation duration
            observer.unobserve(entry.target); // Stop observing the element
          }
        });
      }, { threshold: 0.1 });

      // Observe sections in the parent component
      this.sections.forEach(section => observer.observe(section.nativeElement));

      // Additionally, observe the section in the child component
      const childSectionElement = this.pieChart.sectionElement.nativeElement;
      observer.observe(childSectionElement);
    }
  }
}
