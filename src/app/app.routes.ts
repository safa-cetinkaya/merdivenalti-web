import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { MagazineListComponent } from './pages/magazine-list/magazine-list.component';
import { AboutComponent } from './pages/about/about.component';
import { MagazineComponent } from './pages/magazine/magazine.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'news',
        component: NewsListComponent
    },
    {
        path: 'news/:news_fk',
        component: NewsComponent
    },
    {
        path: 'magazine',
        component: MagazineListComponent
    },
    {
        path: 'magazine/:magazine_fk',
        component: MagazineComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
];
