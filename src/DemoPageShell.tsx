import React from 'react';
import Split from 'react-split';
import { useMediaQuery } from '@lyonph/react-hooks';
import { Project } from './pages/types';
import PlaygroundContent from './components/Playground';
import { Playground } from './components/PlaygroundModel';
import PlaygroundClipboard from './components/PlaygroundClipboard';
import PlaygroundDownload from './components/PlaygroundDownload';

interface DemoPageShellProps {
  id: string;
  title: string;
  code: Project;
}

export default function DemoPageShell(
  { title, code, id }: DemoPageShellProps,
): JSX.Element {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Playground.Provider id={id} title={title} code={code}>
      <div className="overflow-hidden w-full h-screen flex-1 flex items-stretch justify-center flex-col">
        <div className="flex-none flex items-center justify-between border-b dark:border-gray-800">
          <div className="p-4 font-bold text-xl">
            <h2>{title}</h2>
          </div>
          <div className="flex flex-row items-center justify-center px-2">
            <PlaygroundClipboard />
            <PlaygroundDownload />
          </div>
        </div>
        <Split
          key={isDesktop ? 'desktop' : 'mobile'}
          className="flex-1 flex flex-col md:flex-row"
          sizes={[50, 50]}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction={isDesktop ? 'horizontal' : 'vertical'}
          cursor={isDesktop ? 'col-resize' : 'row-resize'}
        >
          <PlaygroundContent
            isDesktop={isDesktop}
          />
        </Split>
      </div>
    </Playground.Provider>
  );
}
