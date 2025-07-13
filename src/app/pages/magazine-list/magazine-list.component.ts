import { Component } from '@angular/core';
import { UtilsModule } from '../../common/utils.module';
import { HeaderComponent } from '../../widgets/header/header.component';
import { FooterComponent } from '../../widgets/footer/footer.component';

@Component({
  selector: 'app-magazine-list',
  imports: [UtilsModule, HeaderComponent, FooterComponent],
  templateUrl: './magazine-list.component.html',
  styleUrl: './magazine-list.component.css'
})
export class MagazineListComponent {

}
