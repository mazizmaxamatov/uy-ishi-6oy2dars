import './App.css';
import { Fragment } from 'react';
import Greeting from "./companents/Greeting";
import Box from "./companents/Box";
import Button from './companents/Button';
import Card from './companents/Card';
import List from './companents/List';
import StatusMessage from './companents/StatusMessage';
import Modal from './companents/Modal';
import IconButton from "./companents/IconButton";



function App() {
  const fruits = ["Apple", "Banana", "Cherry"];


  const handleReset = () => {
    alert("Form Reset!");
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center h-screen">
        <Greeting /> {/* Hello, Guest! */}
        <Greeting name="Shahriyor" /> {/* Hello, Shahriyor! */}
      </div>
      <br />

      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <Box width="200px" height="100px" color="blue" />
        <Box width="150px" height="150px" color="red" />
        <Box width="300px" height="80px" color="green" />
      </div>
      <br />

      <div className="flex items-center justify-center h-screen">
        <Button onClick={() => alert("Clicked!")} />
      </div>
      <br />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Card>
          <h2 className="text-xl font-bold">Title</h2>
          <p>Some description...</p>
        </Card>
      </div>
      <br />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Fruits List</h1>
        <List items={fruits} />
      </div>
      <br />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
        <h1 className="text-2xl font-bold">Conditional Rendering Example</h1>
        <StatusMessage isSuccess={true} /> {/* Success! */}
        <StatusMessage isSuccess={false} /> {/* Error! */}
      </div>
      <br />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Modal title="Delete Confirmation">
          <p>Are you sure you want to delete?</p>
        </Modal>
      </div>
      <br />

      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        {/* Submit tugmasi */}
        <IconButton icon="🚀" type="submit" />

        {/* Reset tugmasi */}
        <IconButton icon="🔄" type="reset" onClick={handleReset} />
      </div>



    </Fragment>
  );
}



export default App;




