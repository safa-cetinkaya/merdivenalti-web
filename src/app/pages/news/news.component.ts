import { Component, OnInit } from '@angular/core';
import { UtilsModule } from '../../common/utils.module';
import { HeaderComponent } from '../../widgets/header/header.component';
import { FooterComponent } from '../../widgets/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { newsTypeColor, newsTypeTitle } from '../../common/utils/news-type';

@Component({
  selector: 'app-news',
  imports: [UtilsModule, HeaderComponent, FooterComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  news: any = {};

  async getNews(newsFk: string): Promise<void> {
    this.news = await firstValueFrom(this.http.get<string[]>(`assets/news/${newsFk}/data.json`));
    this.news.photo = `assets/news/${newsFk}/${this.news.path}`;
  }

  ngOnInit(): void {
    const newsFk = this.route.snapshot.paramMap.get('news_fk');
    if (newsFk == null) return;

    this.getNews(newsFk);
  }

  getNewsType(type: string): string {
    return newsTypeTitle[type];
  }

  getNewsColor(type: string): string {
    return newsTypeColor[type];
  }
}
