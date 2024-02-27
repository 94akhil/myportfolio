import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
  ViewChild,
  Inject,
  PLATFORM_ID,
  HostListener,
} from "@angular/core";
import { Router } from "@angular/router";
import { PieChartComponent } from "../common/charts/pie-chart/pie-chart.component";
import { isPlatformBrowser } from "@angular/common";

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
        this.path + "postgresql.png",
      ],
      allFontIcon: [],
    },
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
    },
  ];
  flipped = false;

  @ViewChildren("leftSkills, rightSkills")
  sections!: QueryList<ElementRef>;

  @ViewChild(PieChartComponent)
  pieChart!: PieChartComponent;

  workExperience = [
    {
      title: "Application Development Senior Analyst",
      companyName: "Accenture",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      title: "Technology Analyst",
      companyName: "Infosys Limited",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      title: "Senior Software Engineer",
      companyName: "Infosys Limited",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      title: "Software Engineer",
      companyName: "Infosys Limited",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];

  academics = [
    {
      title: "M.S. in Computer Science",
      companyName: "University of Texas at Dallas",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      title: "B.E. in Electronics and Communication Engineering",
      companyName: "NITTE Meenakshi Institute of Technology",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
  ];
  internship = [
    {
      title: "Software Development Engineering Intern",
      companyName: "Development Dimensions International",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
  ];
  public windowWidth!: number;

  

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              const animationName = element.getAttribute("data-animation");
              element.style.animationName = animationName || ""; // Apply the animation
              element.style.opacity = "1"; // Make element visible
              element.style.animationFillMode = "forwards"; // Keep the state after animation
              element.style.animationDuration = "1s"; // Animation duration
              observer.unobserve(entry.target); // Stop observing the element
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observe sections in the parent component
      this.sections.forEach((section) =>
        observer.observe(section.nativeElement)
      );

      // Additionally, observe the section in the child component
      const childSectionElement = this.pieChart.sectionElement.nativeElement;
      observer.observe(childSectionElement);
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.windowWidth = window.innerWidth;
  }
}
