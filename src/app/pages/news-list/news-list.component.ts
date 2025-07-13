import { Component } from '@angular/core';
import { UtilsModule } from '../../common/utils.module';
import { HeaderComponent } from '../../widgets/header/header.component';
import { FooterComponent } from '../../widgets/footer/footer.component';

@Component({
  selector: 'app-news-list',
  imports: [UtilsModule, HeaderComponent, FooterComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  newsItems = [
    {
      id: 1,
      title: 'Yeni Sayımız Yayında!',
      category: 'Dergi',
      date: new Date('2024-07-01'),
      readTime: '3 dk',
      excerpt: 'Temmuz sayımızda edebiyatın büyüsüne dalmaya hazır olun.',
      featured: true,
    },
    {
      id: 2,
      title: 'Şairlerle Röportajlar',
      category: 'Röportaj',
      date: new Date('2024-06-28'),
      readTime: '5 dk',
      excerpt: 'Genç şairlerle edebiyat üzerine keyifli sohbetler yaptık.',
      featured: false,
    },
    {
      id: 3,
      title: 'Film Önerileri: Temmuz',
      category: 'Sinema',
      date: new Date('2024-06-25'),
      readTime: '4 dk',
      excerpt: 'Bu ay izlemeniz gereken bağımsız filmleri derledik.',
      featured: false,
    },
  ];
}
