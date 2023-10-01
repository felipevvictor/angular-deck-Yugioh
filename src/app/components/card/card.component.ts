import { Component, OnInit } from '@angular/core';
import { CartaData } from 'src/app/models/pokemonData';
import { YugiohService } from 'src/app/services/yugioh.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  nomeCarta: string = '';
  
  carta: CartaData = {
    data: {
      0: {
        id: 0,
        name: '',
        type: '',
        desc: '',
        card_images: [
          {
            image_url_cropped: ''
          }
        ]
      }
    }
  };

  constructor(private service: YugiohService) { }

  ngOnInit(): void {
    this.getCarta('Blue-Eyes White Dragon'); // Atribuição do nome da carta no ngOnInit
  }

  getCarta(nome: string) {
    this.service.getCarta(nome).subscribe(
      {
        next: (res) => {
          this.carta = {
            data: {
              0: {
                id: res.data[0].id,
                name: res.data[0].name,
                type: res.data[0].type,
                desc: res.data[0].desc,
                card_images: [
                  {
                    image_url_cropped: res.data[0].card_images[0].image_url_cropped
                  }
                ]
              }
            }
          };
        },
        error: (erro) => console.log(erro)
      }
    );
  }


  buscarCarta() {
    if (this.nomeCarta) {
      this.service.getCarta(this.nomeCarta).subscribe(
        {
          next: (res) => {
            this.carta = {
              data: {
                0: {
                  id: res.data[0].id,
                  name: res.data[0].name,
                  type: res.data[0].type,
                  desc: res.data[0].desc, // Adicione a propriedade desc se estiver disponível na resposta
                  card_images: [
                    {
                      image_url_cropped: res.data[0].card_images[0].image_url_cropped
                    }
                  ]
                }
              }
            };
          },
          error: (erro) => console.log(erro)
        }
      );
    }
  }

}
