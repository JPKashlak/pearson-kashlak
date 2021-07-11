import React from 'react';

const Dev = () => {
  const apps = [
    {
      title: "Zing",
      url: "https://zing-chat.herokuapp.com/",
      git: "https://github.com/JamesLuu96/zing"
    },
    {
      title: "Who You Gonna Call?",
      url: "https://jpkashlak.github.io/who-you-gonna-call/",
      git: "https://github.com/JPKashlak/who-you-gonna-call"
    },
    {
      title: "Silly Character Generator",
      url: "https://jpkashlak.github.io/silly-character-generator/",
      git: "https://github.com/JPKashlak/silly-character-generator"
    }
  ]
  return (
    <div className ="neonBase">
      <h3 className="greenSuit">Developer</h3>
      <table>
        <tr>
          <th>Application</th>
          <th>Live URL</th>
          <th>Repository</th>
        </tr>
        {apps.map(app => (
          <tr>
            <td>{app.title}</td>
            <td><a href={app.url} target="_blank" rel="noreferrer">Deployed App</a></td>
            <td><a href={app.git} target="_blank" rel="noreferrer">GitHub</a></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Dev;