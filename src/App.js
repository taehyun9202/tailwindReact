import "./App.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import image1 from "./image/pexels-photo-1037999.jpeg";
import image2 from "./image/pexels-photo-1851415.jpeg";
import image3 from "./image/pexels-photo-267350.jpeg";
import image4 from "./image/pexels-photo-733853.jpeg";
import { useState } from "react";

function App() {
  const [images] = useState([image1, image2, image3, image4]);
  const [current, setCurrent] = useState(0);
  console.log(images);
  return (
    <div>
      <div className="relative flex justify-center items-center bg-gray-800 h-96 text-white">
        <ChevronLeftIcon
          onClick={() => {
            if (current === 0) {
              setCurrent(images.length - 1);
            } else {
              setCurrent((prev) => prev - 1);
            }
          }}
          className="absolute left-8 cursor-pointer hover:text-gray-600"
        />
        <ChevronRightIcon
          onClick={() => {
            if (current === images.length - 1) {
              setCurrent(0);
            } else {
              setCurrent((prev) => prev + 1);
            }
          }}
          className="absolute right-8 cursor-pointer hover:text-gray-600"
        />
        <img
          src={images[current]}
          alt=""
          className="w-96 object-cover transform duration-1000 transition-opacity"
        />
        <div className="absolute bottom-4 flex justify-center items-center">
          {images.map((image, index) => (
            <FiberManualRecordIcon
              onClick={() => setCurrent(index)}
              className={`cursor-pointer hover:text-gray-600 mx-2 ${
                index === current && "text-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
