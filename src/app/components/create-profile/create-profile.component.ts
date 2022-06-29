import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { Profile } from "../../models/profile";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-create-profile",
  templateUrl: "./create-profile.component.html",
  styleUrls: ["./create-profile.component.css"],
})
export class CreateProfileComponent implements OnInit {
  form: FormGroup;
  profile: Profile;
  imageData: string;

  perfil = {
    username: "",
    age: "",
    license: "",
    description: ""
  }

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      age: new FormControl(null),
      license: new FormControl(null),
      description: new FormControl(null),
      image: new FormControl(null),
    });
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.perfil.age = this.form.value.age;
    this.perfil.license = this.form.value.license;
    this.perfil.description = this.form.value.description;

    //NOTA: FUNCIONA. Pero es un poco ineficiente y feo porque primero intenta
    //      enviar una petición post, por si no existe tu perfil, y después envía
    //      una petición patch. La cuestión es que una de las dos va a fallar siempre
    //      porque siempre se intentan las dos. Se puede mejorar de alguna manera seguro.

    try {
      let aux = this.profileService.addProfile(this.perfil);
      console.log(aux);
      this.form.reset();
      this.imageData = null;
    } catch (error) {
      console.log(error, "Fallo al añadir un nuevo perfil");
    }

    try {
      this.profileService.updateProfile(this.perfil);
      this.form.reset();
      this.imageData = null;
    } catch (error) {
      console.log(error, "Fallo al actualizar un perfil");
    }
  }
}