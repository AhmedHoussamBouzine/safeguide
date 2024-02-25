import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";
import { AuthentificationService } from "../../core/services/authentification.service";
import { SignInGoogleComponent } from "../../shared/sign-in-google/sign-in-google.component";
import { StorageService } from "../../core/data/storage.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    SignInGoogleComponent,
    HeaderComponent,
    ButtonComponent,
    InputComponent,
  ],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  private authentication = inject(AuthentificationService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  private storage = inject(StorageService);

  constructor() {}

  showPassword = false;
  buttonsDisabled = false;
  user = {
    email: "",
    password: "",
  };

  async handleSubmit() {
    this.buttonsDisabled = true;

    // TODO: Add form validation

    // Sign in user
    const result = await this.authentication.signIn(
      this.user.email,
      this.user.password,
    );
    if (result.error) {
      switch (result.error.code) {
        case "auth/user-not-found" || "auth/wrong-password":
          this.toastr.error("Oops! The email or password is incorrect");
          break;
        default:
          this.toastr.error("Oops! Something went wrong");
          break;
      }
      this.buttonsDisabled = false;
      return;
    }
    // Redirect to explore page
    this.router.navigate(["/explore"]);
  }
}
