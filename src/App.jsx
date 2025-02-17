import './App.css';
import { Fragment } from 'react';
import { useState } from "react";









function App() {
  const isLoggedIn = false;



  const product = {
    name: 'olma', price: 18.000,
  }

  const bir = ['Toshkent', 'Samarqand', 'Andijon'];
  const ab = {
    color: 'blue',
    fontSize: '40px'
  };

  const isAvailable = {}

  const [isSubscribed, setIsSubscribed] = useState(false);

  const [lang, setLang] = useState("uz");

  const greetings = {
    uz: "Salom!",
    en: "Hello!",
    ru: "Привет!"
  };

  const names = ["Ali", "Bekzod", "Salim", "John", "Muhammad", "Sardor"];

  const filteredNames = names.filter(name => name.length > 5);


  const [isActive, setIsActive] = useState(true);

  


  return (
    <Fragment>
      <div className='bir w-[200px] h-[150px]'>
        {"1misol"}
        <div>{isLoggedIn ? "Xush kelibsiz!" : "Iltimos, tizimga kiring!"}</div>
      </div>

      <div className='bir w-[200px] h-[150px]'>
        {"2misol"}
        <h3>{product.name}</h3>
        <p>Narxi:{product.price}so`m</p>
      </div>


      <div className='bir w-[200px] h-[150px]'>
        {"3misol"}
        {
          bir.map(function (ikki) {
            return (
              <div>{ikki}</div>
            )
          })
        }
      </div>


      <div className='bir w-[200px] h-[150px]'>
        {"4misol"}
        <h1>
          {10 + 10};
          {10 - 10};
          {10 * 10};
          {10 / 10};
        </h1>
      </div>

      <div className='bir w-[200px] h-[150px]'>
        {"5misol"}
        <h1 style={ab}>salom</h1>
      </div>

      <div className='bir w-[200px] h-[150px]'>
        {"6misol"}
        {isAvailable && <h2>olma</h2>}
        {isAvailable && <p>sotuvda mavjud</p>}
      </div>


      <div className='bir w-[200px] h-[150px]'>
        {"7misol"}
        <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
          onClick={() => setIsSubscribed(!isSubscribed)}>
          {isSubscribed ? "Obunani bekor qilish" : "Obuna bo‘lish"}
        </button>
      </div>

      <div className='bir w-[500px] h-[150px]'>
        {"8misol"}
        <div className="p-4 ">
          <h1 className="text-2xl font-bold">{greetings[lang] || "Hello!"}</h1>
          <div className="mt-4">
            <button
              className="px-3 py-1 mx-2 bg-blue-500 text-white rounded"
              onClick={() => setLang("uz")}
            >
              O'zbekcha
            </button>
            <button
              className="px-3 py-1 mx-2 bg-green-500 text-white rounded"
              onClick={() => setLang("en")}
            >
              English
            </button>
            <button
              className="px-3 py-1 mx-2 bg-red-500 text-white rounded"
              onClick={() => setLang("ru")}
            >
              Русский
            </button>
          </div>
        </div>
      </div>

      <div className='bir w-[200px] h-[150px]'>
          {"9misol"}
          <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Uzun ismlar:</h2>
      <ul className="list-disc list-inside">
        {filteredNames.map((name, index) => (
          <li key={index} className="text-lg">{name}</li>
        ))}
      </ul>
    </div>
      </div>


      <div className='bir w-[200px] h-[150px]'>
        {"11misol"}
        <button
          className={`mx-[20px] px-4 py-2 text-white font-bold rounded ${isActive ? "bg-green-500" : "bg-red-500"}`}
          onClick={() => setIsActive(!isActive)}>
          {isActive ? "Active" : "Inactive"}
        </button>
      </div>


    </Fragment>
  );
}


export default App;




