import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar.component";
import MyCarousel from "./components/Carousel/MyCarousel.component";
import TextCarousel from "./components/TextCarousel/TextCarousel.component";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TextCarousel />
    </div>
  );
};

export default App;
