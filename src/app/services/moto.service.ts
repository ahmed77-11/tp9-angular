import { Injectable } from '@angular/core';
import { Moto } from '../model/moto.model';

@Injectable({
  providedIn: 'root',
})
export class MotoService {
  motos: Moto[];
  moto?: Moto;

  constructor() {
    this.motos = [
      {
        idMoto: 1,
        marqueMoto: 'Honda',
        prixMoto: 3000,
        dateCreation: new Date('01/14/2011'),
      },
      {
        idMoto: 2,
        marqueMoto: 'BMW',
        prixMoto: 10000,
        dateCreation: new Date('12/17/2010'),
      },
      {
        idMoto: 3,
        marqueMoto: 'Yamaha',
        prixMoto: 5000,
        dateCreation: new Date('02/20/2020'),
      },
    ];
  }

  listeMotos(): Moto[] {
    return this.motos;
  }
  ajouterMoto(motor: Moto) {
    this.motos.push(motor);
  }
  supprimerMoto(moto: Moto) {
    //supprimer le produit prod du tableau produits
    const index = this.motos.indexOf(moto, 0);
    if (index > -1) {
      this.motos.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  }
  consulterMoto(id: number): Moto {
    this.moto = this.motos.find((m) => m.idMoto == id)!;
    return this.moto;
  }
  trierMotos() {
    this.motos = this.motos.sort((n1, n2) => {
      if (n1.idMoto! > n2.idMoto!) {
        return 1;
      }
      if (n1.idMoto! < n2.idMoto!) {
        return -1;
      }
      return 0;
    });
  }

  updateMoto(m: Moto) {
    // console.log(m);
    this.supprimerMoto(m);
    this.ajouterMoto(m);
    this.trierMotos();
  }
}
