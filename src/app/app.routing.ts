import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
// import { routing } from './app.routing';
import { FooterComponent }   from './footer/footer.component';
import { WelcomeComponent }   from './welcome/welcome.component';
// import { IphoneComponent }   from './iphone/iphone.component';

const appRoutes: Routes = [
  {
      path: '',
      component: WelcomeComponent
    }

    // {
    //     path: 'ipad',
    //     component: IpadComponent
    //   },

    //   {
    //       path: 'tv',
    //       component: TvComponent
    //     }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
