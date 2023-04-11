import { NgModuleRef, PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const platformObject: PlatformRef = platformBrowserDynamic()

const promiseObject: Promise<NgModuleRef<AppModule>> =
  platformObject
    .bootstrapModule(AppModule)

promiseObject
  .then(
    (moduleRef) => {
      console.log(moduleRef.instance)
    },
    (err: Error) => {
      console.log(err.message)
    }
  )