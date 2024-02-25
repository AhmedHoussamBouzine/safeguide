import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";
import { SignInGoogleComponent } from "../../shared/sign-in-google/sign-in-google.component";
import { AuthentificationService } from "../../core/services/authentification.service";

@Component({
  selector: "app-sign-up",
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    SignInGoogleComponent,
    HeaderComponent,
    ButtonComponent,
    InputComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor() { }

  private authentification = inject(AuthentificationService);
  private router = inject(Router);
  private toastr = inject(ToastrService);

  showPassword = false;
  buttonsDisabled = false;

  user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  async handleSubmit() {
    this.buttonsDisabled = true;

    // TODO: Add form validation

    // Sign up
    const result = await this.authentification.signUp(this.user);
    if (result.error || !result.user) {
      switch (result.error.code) {
        case "auth/email-already-in-use":
          this.toastr.error("Oops! This email is already in use");
          break;
        default:
          this.toastr.error("Oops! Something went wrong");
          break;
      }
      this.buttonsDisabled = false;
      return;
    }

    // Redirect to explore page
    this.router.navigate(["/login"]);
  }
}
