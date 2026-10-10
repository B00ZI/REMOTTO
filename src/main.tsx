import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  import('react-dom/client').then(({createRoot}) => {
    import('./App.tsx').then(({default: App}) => {
      createRoot(rootEl).render(<App />);
    });
  });
}

