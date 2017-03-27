import {AppModule} from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

const browser = platformBrowserDynamic();
browser.bootstrapModule(AppModule);


