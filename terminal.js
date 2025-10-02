const terminalInput = document.getElementById('terminalInput');

const sections = {
  about: `👋 Hi! Rehansh Mohta.\n\nMy goal is to contribute to innovative and impactful projects Passionate about Cybersecurity and Forensics, professionally I aim to explore the field of cryptography with network protocols!`,
  experience: `- Project Management Intern @ DIGIR Innovative Services, India\n- YouTube Tech Content Creator (150+ Subscribers)\n- Cyber Security Awareness Mentor at Jan Skishan Sansthan Bikaner`,
  work: `-Con-Log - IP ADDRESS detection tool)\n- Oh Shakes Website ( Server and Project Managment )\n- Various Python Programs on GitHub\n- Various D.S.A Programs on GitHub`,
  certifications: `- Certified AI Programmer - AI Institute 2025\n- Machine Learning Certification - Coursera\n- Cybersecurity Foundations - Udemy\n- Add your certifications here`,
  skills: `- Python, JavaScript, HTML, CSS\n- Machine Learning, AI\n- Web Development\n- Project Management`,
  contact: `💼 Mail: harrybpotter@email.com\n🌐 LinkedIn: linkedin.com/in/harrybpotter\n🐙 GitHub: github.com/harrybpotter\n💬 Twitter: @harrybpotter`
};

function showOutput(section) {
  let output = document.getElementById('terminalOutput');
  if (!output) {
    output = document.createElement('pre');
    output.id = 'terminalOutput';
    output.style.margin = '32px 35px 0 35px';
    output.style.color = '#00ff7f';
    output.style.fontFamily = 'Monospace';
    output.style.fontSize = '1.05rem';
    let container = document.querySelector('.command-section');
    container.appendChild(output);
  }
  output.textContent = sections[section] || 'Command not recognized. Try aboutMe, experience, work, certifications, skills, or contactMe.';
}

terminalInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    let cmd = terminalInput.value.trim().toLowerCase();
    if (cmd === 'aboutme' || cmd === 'about') showOutput('about');
    else if (cmd === 'experience') showOutput('experience');
    else if (cmd === 'work') showOutput('work');
    else if (cmd === 'certifications') showOutput('certifications');
    else if (cmd === 'skills') showOutput('skills');
    else if (cmd === 'contactme' || cmd === 'contact') showOutput('contact');
    else showOutput('');
    terminalInput.value = '';
  }
});
