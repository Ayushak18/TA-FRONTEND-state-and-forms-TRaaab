import Button from './component/button';
import Image from './component/image';
import './style/buttons.css';

function App() {
  return (
    <>
      <div className="buttons">
        <Button btnName={'basketball'} />
        <Button btnName={'pubg'} />
        <Button btnName={'tiger'} />
        <Button btnName={'phone'} />
        <Button btnName={'laptop'} />
        <Button btnName={'cricket'} />
      </div>
      <div className="image">
        <Image />
      </div>
    </>
  );
}

export default App;
