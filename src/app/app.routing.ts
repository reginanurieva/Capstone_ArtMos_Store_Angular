import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { routing } from './app.routing';

import { FooterComponent }   from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WelcomeComponent }   from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';

const appRoutes: Routes = [
  {
      path: '',
      component: WelcomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
