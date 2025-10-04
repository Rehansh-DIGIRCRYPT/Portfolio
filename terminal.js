const terminalInput = document.getElementById('terminalInput');

const sections = {
  about: `👋 Hi! Rehansh Mohta.\n- My goal is to contribute to innovative and impactful projects\n- Passionate about Cybersecurity and Forensics\n- I aim to explore the field of cryptography with network protocols!`,
  experience: `- Co Founder @ DIGIR Innovative Services\n- YouTube Tech Content Creator \n- Cyber Security Awareness Mentor at \n - Jan Skishan Sansthan Bikaner`,
  work: `-Con-Log - IP ADDRESS detection tool)\n- Oh Shakes Website ( Server and Project Managment )\n- Various Python Programs on GitHub\n- Various D.S.A Programs on GitHub`,
  certifications: `- CEH - Certified Ethical Hacker\n- CND - Certified Network Defender\n- ECSS - EC Council \n- Foundation of Cloud and Edge ML`,
  skills: `- Network,Cryptography, SIEM\n- Python, JavaScript, HTML, CSS\n- Prompt Engineering and AI tools\n- Web Development\n- Project Management`,
  contact: `💼 Mail: rehansh11mohta@gmail.com\n🌐 LinkedIn:https://www.linkedin.com/in/rehansh-mohta-780590253\n🐙 GitHub:https://github.com/Rehansh-DIGIRCRYPT\n💬 X: @Rehansh7778`
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
  output.textContent = sections[section] || 'Command not recognized. Try open and then aboutMe, experience, work, certifications, skills, or run contactMe.';
}

terminalInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    let cmd = terminalInput.value.trim().toLowerCase();
    if (cmd === 'open aboutme' || cmd === 'about') showOutput('about');
    else if (cmd === 'open experience') showOutput('experience');
    else if (cmd === 'open work') showOutput('work');
    else if (cmd === 'open certifications') showOutput('certifications');
    else if (cmd === 'open skills') showOutput('skills');
    else if (cmd === 'run contactme' || cmd === 'contact') showOutput('contact');
    else showOutput('');
    terminalInput.value = '';
  }
});
