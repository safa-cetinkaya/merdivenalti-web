import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsModule } from '../../common/utils.module';
import { HeaderComponent } from '../../widgets/header/header.component';
import { FooterComponent } from '../../widgets/footer/footer.component';

import { PageFlip } from 'page-flip';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-magazine',
  imports: [UtilsModule, HeaderComponent, FooterComponent],
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.css'
})
export class MagazineComponent implements AfterViewInit {
  @ViewChild('flipbook') flipbookContainer!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  async getPages(folderName: string): Promise<void> {
    const result = await firstValueFrom(this.http.get<string[]>(`assets/magazines/${folderName}/assets.json`));
    const pages = result.map((e) => `assets/magazines/${folderName}/${e}`);

    const pageFlip = new PageFlip(this.flipbookContainer.nativeElement, {
      width: 600,
      height: 848,
      maxShadowOpacity: 0.5,
      showCover: true,
      mobileScrollSupport: false
    });

    pageFlip.loadFromImages(pages);
  }

  ngAfterViewInit(): void {
    const magazineFk = this.route.snapshot.paramMap.get('magazine_fk');
    if (magazineFk == null) return;

    this.getPages(magazineFk);
  }
}
