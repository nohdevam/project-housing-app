import { Injectable } from '@angular/core';
import { Lieu } from './lieux.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LieuxService {

  constructor(private http:HttpClient) { }

  private _lieux : Lieu[] = [
    new Lieu(
      'l1',
      'Studio à Paris',
      'Studio neuf entièrement rénové.',
      'assets/icon/1.jpg',
      690
    ),
    new Lieu(
      'l2',
      "Studio neuf dans le 9ième",
      'Studio équipé confortable!',
      'assets/icon/2.jpg',
      850
    ),
    new Lieu(
      'l3',
      'Appart 2 pièces à Clichy',
      'Un grand appartement pour vos visites à Paris !',
      'assets/icon/3.jpg',
      1100
    )
  ];

  get lieux() {
    return [...this._lieux];
  }

  avoirLieu(id: string) {
    return {...this._lieux.find(l => l.id === id)};
  }
  addLieu(
    title: string,
    description: string,
    imageUrl: string,
    price: number,
  ) {
    const newLieu = new Lieu(
      Math.random().toString(),
      title,
      description,
      imageUrl,
      price
    );
    return this.http.post<{ name: string }>(

        // Mettre le lien de la realtime database et le nom collection
        'https://locationdb-f0091.firebaseio.com/locations.json',
        {
          ...newLieu,
          id: null
        }
    );
  }
}
