import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import { RootStore } from './state/RootStore';

const rootStore = new RootStore();
const rootNode = createRoot(document.getElementById('__root')!);

rootNode.render(<Root store={rootStore} />);
