import { App } from './components/App';

declare let React: typeof import('react');
declare let ReactDOM: typeof import('react-dom/client');

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(<App />);