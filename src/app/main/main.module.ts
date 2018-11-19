import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AboutModule,
    ContactModule/*,
    GalleryModule*/
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
