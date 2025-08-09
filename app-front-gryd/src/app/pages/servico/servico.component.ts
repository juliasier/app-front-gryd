import { Component } from '@angular/core';

@Component({
  selector: 'app-servico',
  standalone: true,
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss'],
})
export class ServicoComponent {
  servicos = [
    {
      titulo: 'Desenvolvimento de Sites',
      descricao: 'Layout prontos para serem colocados no ar!',
      imagem: 'assets/images/carousel/person/person-roberto.svg',
    },
    {
      titulo: 'SEO Otimizado',
      descricao: 'Impulsione o tráfego orgânico do seu site.',
      imagem: 'assets/images/carousel/person/person-roberto.svg',
    },
    {
      titulo: 'Gerenciamento Analytics',
      descricao: 'Acompanhe dados com Google Analytics.',
      imagem: 'assets/images/carousel/person/person-roberto.svg',
    },
  ];

  indiceAtual = 0;

  anterior() {
    this.indiceAtual =
      (this.indiceAtual - 1 + this.servicos.length) % this.servicos.length;
  }

  proximo() {
    this.indiceAtual = (this.indiceAtual + 1) % this.servicos.length;
  }
}
