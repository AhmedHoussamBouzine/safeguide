import { Component, Input, inject } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthentificationService } from "../../core/services/authentification.service";

@Component({
  selector: 'app-sign-in-google',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-google.component.html',
  styleUrl: './sign-in-google.component.scss'
})
export class SignInGoogleComponent {
  constructor() {}

  private authentification = inject(AuthentificationService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  @Input() disabled = false;

  async handleGoogleSignIn() {
    const result = await this.authentification.signInWithGoogle();
    if (result.error || !result.user) {
      this.toastr.error("Oops! Something went wrong. Please try again.");
      return;
    }

    // Redirect to explore page
    this.router.navigate(["/explore"]);
  }
}
