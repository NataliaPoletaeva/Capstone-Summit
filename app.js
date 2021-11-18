const speakers = [
  {
    image: './images/speaker-1.jpg',
    alternative: 'Speaker 1',
    name: 'Catherine Duboix',
    position: 'Senior Director of l`Eco Inc.',
    description: 'Catherine is an executive-level professional who is responsible for the strategic management in l`Eco Inc.',
  },
  {
    image: './images/speaker-2.jpg',
    alternative: 'Speaker 2',
    name: 'Lisa Schmidt',
    position: 'CEO of Lake Build Group',
    description: 'Lisa is responsible for managing a company`s overall operations.',
  },
  {
    image: './images/speaker-3.jpg',
    alternative: 'Speaker 3',
    name: 'Michael Kelly',
    position: 'Co-founder and managing partner of K&O Group',
    description: 'Michael is responsible for setting strategic goals and objectives, monitoring performance, and driving business growth.',
  },
  {
    image: './images/speaker-4.jpg',
    alternative: 'Speaker 4',
    name: 'Lily Williamson',
    position: 'Project Manager of Sustainability Department in A-Energy LLC',
    description: 'Lily is responsible for planning and overseeing projects to ensure they are completed in a timely fashion and within budget.',
  },
  {
    image: './images/speaker-5.jpg',
    alternative: 'Speaker 5',
    name: 'Martin Robert',
    position: 'Senior Director of l`Energie Solaire',
    description: 'Martin sets precise goals and objectives based on a strategic planning process.',
  },
  {
    image: './images/speaker-6.jpg',
    alternative: 'Speaker 6',
    name: 'Corina Leight',
    position: 'Marine Engineer in RiverSide Organisation',
    description: 'Corina designs the propulsion system, auxiliary power mechanisms and other essential machinery for a ship`s efficient functioning.',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  const speakerSection = document.createElement('ul');
  speakerSection.className = 'speaker-section';
  speakers.forEach((speaker) => {
    const speakerCard = document.createElement('li');
    speakerCard.innerHTML = `<li class="speaker-card">
                     <img src="${speaker.image}" alt="${speaker.alternative}">
                     <div class="speaker-about">
                         <h3 class="speaker-name">${speaker.name}</h3>
                         <div class="speaker-position">${speaker.position}</div>
                         <p class="speaker-info">${speaker.description}</p>
                     </div>
                 </li>
                 `;
    speakerSection.appendChild(speakerCard);
  });
  const featSpeakers = document.querySelector('.speakers');
  featSpeakers.appendChild(speakerSection);
});