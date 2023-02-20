import Slider from "./components/Slider";

const images = [
  {
    url: "'../images/1.jpeg'",
  },
  {
    url: "'../images/1.jpeg'",
  },
  {
    url: "'../images/1.jpeg'",
  },
];

function App() {
  return (
    <>
      <Slider images={images} />
    </>
  );
}

export default App;
