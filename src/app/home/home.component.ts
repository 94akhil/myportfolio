import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  path= "../../../assets/icons/"
  techStack = [
    {
      title: "Frontend",
      icon: "fas fa-solid fa-file-code",
      allTech: ["Angular", "JavaScript", "Typescript", "HTML5", "CSS3"],
      allImgIcon:[this.path+"typescript.png"],
      allFontIcon:["fa-brands fa-angular","fa-brands fa-js","fa-brands fa-html5","fa-brands fa-css3-alt"]
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      allTech: ["Node.js", "Java", "Python", "ASP.NET", "C#"],
      allImgIcon:[this.path+"web.png",this.path+"c-sharp.png"],
      allFontIcon:["fa-brands fa-node","fa-brands fa-java","fa-brands fa-python","fa-brands fa-css3-alt"]
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
      allImgIcon:[this.path+"terraform.png",this.path+"azure.png"],
      allFontIcon:["fa-brands fa-docker","fa-brands fa-gitlab","fa-brands fa-jenkins"]
    },
    {
      title: "Database",
      icon: "fas fa-database",
      allTech: ["MS SQL", "MongoDB", "PostgreSQL", "Oracle", "GraphQL"],
      allImgIcon:[this.path+"sql-server.png",this.path+"mysql.png",this.path+"mongo.png",this.path+"postgresql.png",this.path+"oracle.png"],
      allFontIcon:[]
    },
    {
      title: "Big Data",
      icon: "fas fa-chart-line",
      allTech: ["Hadoop", "Spark", "Cassandra"],
      allImgIcon:[this.path+"hadoop.png",this.path+"r.png"],
      allFontIcon:[]
    },
    {
      title: "Testing",
      icon: "fas fa-flask",
      allTech: ["Selenium", "Protractor", "Postman", "JMeter", "Fiddler"],
      allImgIcon:[this.path+"selenium.png",this.path+"protractor.png",this.path+"feather.png"],
      allFontIcon:[]
    },
  ];
  flipped = false;
  constructor(private router: Router) {}
}
