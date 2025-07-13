import { Component } from '@angular/core';
import { UtilsModule } from '../../common/utils.module';
import { HeaderComponent } from '../../widgets/header/header.component';
import { FooterComponent } from '../../widgets/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [UtilsModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
