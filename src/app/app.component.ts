import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { Auth } from "@angular/fire/auth";
import { StorageService } from "./core/data/storage.service";
import { Subscription } from "rxjs";
import { AuthentificationService } from "./core/services/authentification.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'safeguide';
  auth$!: Subscription;
  constructor() {}

  private authentication = inject(AuthentificationService);
  private auth = inject(Auth);
  private storage = inject(StorageService);
  private router = inject(Router);

  ngOnInit() {
    // Load user data
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.auth$ = this.authentication
          .getUser(user.uid)
          .subscribe((userData) => {
            this.storage.user = userData;
          });
        return;
      }
      this.storage.user = undefined;
    });
  }

}
