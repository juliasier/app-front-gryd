import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teamMembers = [
    {
      id: 1,
      name: 'Roberto Silva',
      role: 'CEO & Founder',
      image: 'assets/images/team/roberto.jpg',
      bio: 'Especialista em desenvolvimento web com mais de 10 anos de experiência.',
      social: {
        linkedin: 'https://linkedin.com/in/roberto-silva',
        github: 'https://github.com/roberto-silva',
        email: 'roberto@gryd.com'
      }
    },
    {
      id: 2,
      name: 'Ana Costa',
      role: 'Lead Designer',
      image: 'assets/images/team/ana.jpg',
      bio: 'Designer UX/UI apaixonada por criar experiências digitais incríveis.',
      social: {
        linkedin: 'https://linkedin.com/in/ana-costa',
        dribbble: 'https://dribbble.com/ana-costa',
        email: 'ana@gryd.com'
      }
    },
    {
      id: 3,
      name: 'Carlos Santos',
      role: 'Full Stack Developer',
      image: 'assets/images/team/carlos.jpg',
      bio: 'Desenvolvedor full-stack especializado em tecnologias modernas.',
      social: {
        linkedin: 'https://linkedin.com/in/carlos-santos',
        github: 'https://github.com/carlos-santos',
        email: 'carlos@gryd.com'
      }
    },
    {
      id: 4,
      name: 'Marina Oliveira',
      role: 'Marketing Digital',
      image: 'assets/images/team/marina.jpg',
      bio: 'Estrategista de marketing digital focada em resultados mensuráveis.',
      social: {
        linkedin: 'https://linkedin.com/in/marina-oliveira',
        instagram: 'https://instagram.com/marina.marketing',
        email: 'marina@gryd.com'
      }
    }
  ];

  currentIndex = 0;
  itemsPerView = 3;

  get visibleMembers() {
    const members = [];
    for (let i = 0; i < this.itemsPerView; i++) {
      const index = (this.currentIndex + i) % this.teamMembers.length;
      members.push(this.teamMembers[index]);
    }
    return members;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.teamMembers.length - 1 : this.currentIndex - 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  trackByMemberId(index: number, member: any): number {
    return member.id;
  }
}