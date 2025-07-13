import { Component, Output, EventEmitter } from '@angular/core';
import { UtilsModule } from '../../common/utils.module';

@Component({
  selector: 'app-header',
  imports: [UtilsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
