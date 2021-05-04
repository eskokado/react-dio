import Item from "./components/Item";
import Card from "./components/Card";
const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com react</h1>
      <div class="list-group">
        <a href="/" className="list-group-item list-group-item-action">
          A simple default list group item
        </a>
        <Item className="list-group-item list-group-item-action list-group-item-dark">
          Item 1
        </Item>
        <Item className="list-group-item list-group-item-action list-group-item-dark">
          Item 2
        </Item>
        <Item className="list-group-item list-group-item-action list-group-item-dark">
          Item 3
        </Item>
        <Card />
      </div>
    </>
  );
};

export default App;
