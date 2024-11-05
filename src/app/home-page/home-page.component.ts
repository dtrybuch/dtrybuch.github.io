import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  title: string = "Rożnowski Domek Wytchnienia";

  firstTitle: string = "Twój Azyl nad Jeziorem Rożnowskim";
  firstContent: string = `
<b>Rożnowski Domek Wytchnienia</b> to urokliwe miejsce stworzone z myślą o pełnym wypoczynku w malowniczej scenerii Jeziora Rożnowskiego. To idealna lokalizacja dla osób poszukujących spokoju i kontaktu z naturą, z dala od miejskiego zgiełku.`;

  secondTitle: string = "Komfortowe Wnętrza i Przestrzeń dla Każdego"; 

  secondContent: string = `<b>Domek składa się z dwóch przytulnych sypialni oraz przestronnego salonu połączonego z funkcjonalnym aneksem kuchennym. Wygodne wnętrza tworzą przyjazną atmosferę do wspólnego spędzania czasu, a aneks kuchenny pozwala na przygotowanie domowych posiłków. To miejsce, gdzie poczujesz się jak w domu, ciesząc się każdym momentem relaksu.`;

  thirdTitle: string = "Taras z Widokiem na Jezioro"; 

  thirdContent: string = `Salon prowadzi na duży taras, idealny do wypoczynku na świeżym powietrzu. Widok na jezioro i otaczającą zieleń stwarzają wyjątkowy klimat, sprzyjający spokojnym chwilom przy kawie lub wieczornemu odpoczynkowi przy zachodzie słońca. Taras to serce domku, które pozwala cieszyć się pięknem natury o każdej porze dnia.`;

  fourthTitle: string = "Strefa Relaksu z Jacuzzi"; 

  fourthContent: string = `Prawdziwym luksusem Rożnowskiego Domku Wytchnienia jest strefa relaksu z jacuzzi, zanurzonego w zieleni, gdzie można odpocząć pod rozgwieżdżonym niebem. Ciepła woda i hydromasaż zapewniają pełne odprężenie po dniu pełnym aktywności. To idealne miejsce na wieczorne chwile regeneracji i relaksu w wyjątkowej atmosferze.`;

  images: ImageItem[] = [];

  imagesChunks: ImageItem[][] = [];

  /**
   *
   */
  constructor(public gallery: Gallery, private mainTitle: Title) {
    this.mainTitle.setTitle(this.title);
    let imagesCount = 10;
    for (let i = 1; i <= imagesCount; i++) {
      this.images.push(new ImageItem({ src: `../../assets/images${i}.jpg`, thumb: `../../assets/images${i}.jpg` }))
    }
  }
  
  ngOnInit() {
    // Load items into gallery
    this.setChunksOnPage();
    const galleryRef = this.gallery.ref();
    galleryRef.load(this.images);
  }

  private setChunksOnPage() {
    this.imagesChunks = this.countChunks(this.images, 4);
  }

  private countChunks(chunkImages: any, chunkSize: number)
  {
    let tmpChunks = [];
    if(chunkImages)
    {
      for (let i = 0; i < chunkImages.length; i += chunkSize) {
        let chunk = chunkImages.slice(i, i + chunkSize);
        tmpChunks.push(chunk);
      }
    }
    return tmpChunks;
  }

}
