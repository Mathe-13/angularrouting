import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home-component/home-component";
import { CineComponent } from "./components/cine-component/cine-component";
import { MusicaComponent } from "./components/musica-component/musica-component";
import { NotFoundComponent } from "./components/not-found-component/not-found-component";

//NECESITAMOS UN ARRAY CON LAS RUTAS
//DICHO ARRAY DEBE SER DE LA CLASE Routes
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "cine", component: CineComponent },
    { path: "musica", component: MusicaComponent },
    { path: "**", component: NotFoundComponent }
]

//PARA EL MODULO DEBEMOS EXPORTAR POR VARIABLES
export const appRoutingProvider: any[] = []
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);
