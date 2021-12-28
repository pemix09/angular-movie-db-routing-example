import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: "", redirectTo: "/movies", pathMatch: 'full' },
    { path: "movies", component: MoviesComponent },
    { path: "movie/:id", component: MovieDetailsComponent},
    { path: "categories", component: CategoriesComponent},
    { path: "category/:category", component: MoviesInCategoryComponent},
    { path: "**", component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}