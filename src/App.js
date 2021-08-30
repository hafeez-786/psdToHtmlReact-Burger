import './App.css';
import Header from './components/Header/header';
import ImageBlock from './components/Sections/ImageBlock';
import ChooseAndEnjoy from './components/Sections1/Enjoy';
import Burger from './components/Sections2/Burger';
import Discover from "./components/Sections3/Discover";
import BookYourTable from './components/Sections4/BookYourTable';
import BurgerHouse from './components/Sections5/BurgerHouse';

function App() {
  return (
    <>
      <Header />
      <ImageBlock />
      <ChooseAndEnjoy />
      <Burger />
      <Discover />
      <BookYourTable />
      <BurgerHouse />
    </>
  );
}

export default App;
