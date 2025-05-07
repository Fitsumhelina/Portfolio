import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function GitHubInfo() {
  const markdown = `
[![GitHub WidgetBox](https://github-widgetbox.vercel.app/api/profile?username=fitsumhelina&data=followers,repositories,stars,commits&theme=viridescent)](https://github.com/fitsumhelina)
`;

  return (
    <>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
}

GitHubInfo.displayName = "GitHubInfo";