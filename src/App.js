import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import disableDevtool from 'disable-devtool';

// disableDevtool({
//   debug: false, // Tắt chế độ debug
//   ondevtoolopen: () => {
//     alert("Developer Tools is disabled! Please close it.");
//   },
//   ondevtoolclose: () => {
//     console.log("DevTools is closed");
//   },
//   interval: 1000, // Thời gian kiểm tra DevTools (ms)
//   clearIntervalWhenDevOpenTrigger: false, // Không xóa bộ đếm
// });
if(process.env.REACT_APP_ENV === 'test_1' ){
  disableDevtool()
}

function App() {
  return (
    <div className="App">
      <h2>Video Player</h2>
      <ReactPlayer 
        url="https://vimeo.com/1037200254" 
        controls 
        playing={true} 
        width="100%" 
        height="400px"
      />
    </div>
  );
}

export default App;
