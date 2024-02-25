import { Component, OnInit, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { UserAvatarComponent } from "../user-avatar/user-avatar.component";
import { StorageService } from "../../core/data/storage.service";
import { initFlowbite } from "flowbite";
import { ButtonComponent } from "../../components/button/button.component";
import { AuthentificationService } from "../../core/services/authentification.service";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, UserAvatarComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  public storage = inject(StorageService);
  public authentification = inject(AuthentificationService);
  public router = inject(Router);
  links = [
    { label: "Discover", path: "/discover" },
    { label: "Casablanca", path: "/casablanca" },
    { label: "Rabat", path: "/rabat" },
    { label: "Marrakech", path: "/marrakech" },
    { label: "Fez", path: "/fez" },
    { label: "Agadir", path: "/agadir" },
    { label: "Tangier", path: "/tangier" },
  ];

  constructor() { }

  ngOnInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }

  handleSignOut() {
    if (confirm("Are you sure you want to sign out?")) {
      this.authentification.signOut();
      this.router.navigate(["/login"]);
      this.storage.user = null;
    }
  }

}



