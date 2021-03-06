import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Estudiante } from '../../../models/estudiante';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  estudiantes: Estudiante[] = [
    {
      name: 'GABRIELA MUÑOZ',
      descrip:
        'Estudiante de Ingeniería Eléctrica cautivada por la ciencia y la innovación tecnológica',
      facebook: '',
      instagram: '',
      twitter: '',
      img: 'Gaby.png',
    },
    {
      name: 'MISAEL LANDERO',
      descrip:
        'Estudiante de Ing. en sistemas apasionado por la inteligencia artificial y ciencias de datos.',
      facebook: '',
      instagram: 'instagram.com/misael_landero',
      twitter: 'twitter.com/misa9827',
      img: 'Misa.png',
    },
    {
      name: 'DIANA ROSALES',
      descrip:
        'Estudiante de la carrera de Ingenierìa Mecánica  apasionada por la naturaleza y el arte.',
      facebook: '',
      instagram: '',
      twitter: '',
      img: 'Diana.png',
    },
    {
      name: 'WUILMER GARCIA',
      descrip:
        'Estudiante de Ingeniería Civil, comprometido con la sociedad a brindar estructuras seguras.',
      facebook: 'https://www.facebook.com/jose.w.garciaortiz',
      instagram: 'https://instagram.com/wuilmer081?igshid=1vo6lfbs068b',
      twitter: 'https://twitter.com/wuilmer081?s=09',
      img: 'Wuil.png',
    },
    {
      name: 'JEANLUC BOQUIN',
      descrip:
        'Estudiante de Ingeniería en Sistemas apasionado por los procesos automatizados',
      facebook: '',
      instagram: '',
      twitter: '',
      img: 'Jean.png',
    },
    {
      name: 'ANA THOMPSON',
      descrip:
        'Estudiante de Ingeniería Eléctrica apasionada por el diseño y la electrónica',
      facebook: 'https://www.facebook.com/AnaCThompson',
      instagram: 'https://instagram.com/anathompson_?igshid=fzidnavyi3f0',
      twitter: 'https://twitter.com/anathompsong?s=09',
      img: 'Ana.png',
    },
    {
      name: 'OSCAR R. GARCIA',
      descrip:
        'Estudiante de Astronomía, apasionado por la ciencia, física de altas energías y el deporte',
      facebook: '',
      instagram: '',
      twitter: '',
      img: 'Oscar.png',
    },
  ];
  constructor() {
    AOS.init();
  }

  ngOnInit(): void {}
}
