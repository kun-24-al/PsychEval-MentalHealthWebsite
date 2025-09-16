import React from 'react';

const founders = [
  {
    name: 'Dr. Jonah Vexley',
    role: 'Clinical Psychologist', 
  
    image: 'https://th.bing.com/th/id/OIP.qNSiJ7PqVb9R24N0D_4bewHaNK?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', // Replace with actual image file
  },
  {
    name: 'Dr. Eliot Mersan',
    role: 'Behavioral Psychologist',
    image:'https://th.bing.com/th/id/OIP.l96BdnBni68Vv9r_AgP7UgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },

  {
    name: 'Dr. Callum Drex',
    role: 'Psychotherapist',
    image: 'https://th.bing.com/th/id/OIP.l96BdnBni68Vv9r_AgP7UgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7', // Replace with actual image file
  },
  {
    name: 'Dr. Victor Dael',
    role: 'Neuropsychologist',
    image: 'https://th.bing.com/th/id/OIP.l96BdnBni68Vv9r_AgP7UgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7', // Replace with actual image file
  },
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;

  