import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from 'src/app/modules/rest/interceptors';
import {ToastsModule} from 'src/app/modules/toasts/toasts.module';
import {ComponentsModule} from 'src/app/components/components.module';
import {AppConfigService} from 'src/app/app-config.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ToastsModule,
        ComponentsModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [AppConfigService],
            useFactory: (appConfigService: AppConfigService): () => void =>  {
                return (): void => {
                    appConfigService.initialize();
                }
            }
        },
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
