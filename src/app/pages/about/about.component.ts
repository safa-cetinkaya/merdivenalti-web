import { Component } from '@angular/core';
import { UtilsModule } from '../../common/utils.module';
import { HeaderComponent } from '../../widgets/header/header.component';
import { FooterComponent } from '../../widgets/footer/footer.component';

@Component({
  selector: 'app-about',
  imports: [UtilsModule, HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
