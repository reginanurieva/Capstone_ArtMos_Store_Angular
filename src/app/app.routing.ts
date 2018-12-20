import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { routing } from './app.routing';

import { FooterComponent }   from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WelcomeComponent }   from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { NatureComponent }   from './nature/nature.component';
import { PaintingDetailsComponent} from './painting-details/painting-details.component'

const appRoutes: Routes = [
  {
      path: '',
      component: WelcomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
      },

      {
        path: 'nature',
        component: NatureComponent
      },
      {
        path: 'painting/:id',
        component: PaintingDetailsComponent
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
