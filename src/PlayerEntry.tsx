import React from 'react';
import { createRoot } from 'react-dom/client';
import { Player } from '@remotion/player';
import { MyComposition } from './Composition';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

const App = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className="text-3xl font-bold mb-4">My Remotion Video</h1>
            <Player
                component={MyComposition}
                durationInFrames={120}
                compositionWidth={1280}
                compositionHeight={720}
                fps={30}
                controls
                style={{
                    width: '100%',
                    maxWidth: '800px',
                }}
            />
        </div>
    );
};

root.render(<App />);
