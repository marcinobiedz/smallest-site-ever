declare let React: typeof import('react');
declare let _: typeof import('lodash');
const lodash = _

const a = lodash.difference
debugger
console.log(a);

export const App: React.FC = () => {
  const [counter, setCounter] = React.useState(10);

  React.useEffect(() => {
    setInterval(() => {
      setCounter(a => a + 1);
    }, 2000);
  }, []);

  return (
        <div>
            <h1>{counter}</h1>
        </div>
  );
};