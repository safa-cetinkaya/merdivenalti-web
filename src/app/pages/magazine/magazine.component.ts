import { Component } from '@angular/core';
import { UtilsModule } from '../../common/utils.module';
import { HeaderComponent } from '../../widgets/header/header.component';
import { FooterComponent } from '../../widgets/footer/footer.component';

@Component({
  selector: 'app-magazine',
  imports: [UtilsModule, HeaderComponent, FooterComponent],
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.css'
})
export class MagazineComponent {

}
