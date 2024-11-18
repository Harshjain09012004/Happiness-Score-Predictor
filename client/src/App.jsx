import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Header } from './header';
import { RxCrossCircled } from "react-icons/rx";
import Confetti from 'react-confetti'

axios.defaults.baseURL = 'http://localhost:5000';

function App() {

  const [data,setdata] = useState(0);
  const [fieldsavailable, setfieldsavailable] = useState(true);
  const [region, setregion] = useState(0);
  const [error, seterror] = useState(0);
  const [health, sethealth] = useState(0);
  const [trust, settrust] = useState(0);
  const [family, setfamily] = useState(0);
  const [economy, seteconomy] = useState(0);
  const [freedom, setfreedom] = useState(0);
  const [generosity, setgenerosity] = useState(0);
  const [residual, setresidual] = useState(0);
  const [result, setresult] = useState(false);

  function warningremover(){setfieldsavailable(true);}

  async function submitHandler(e)
  {
    e.preventDefault();
    const allfields = {
      region,error,health,trust,family,economy,freedom,generosity,residual
    };

    let details = true;
    const fields = Object.values(allfields);
    for(let field of fields){if(!field){details=false;}}

    if(details){
      setresult(true);
      axios.post('/RunModel',allfields).then((det)=>{
        setdata(det.data)
      })
    }
    else {setfieldsavailable(false);}
  }

  return (
    <div className=' bg-pink-50 min-h-screen'>
      <Header/>

      {!result && (
        <>
          <div className='flex flex-col gap-10 place-items-center mt-20'>

            {!fieldsavailable && (
              <div className=" bg-red-600 w-[43%] h-12 text-white font-bold flex gap-4 text-xl rounded-xl place-items-center px-4">
                <RxCrossCircled
                  className="text-2xl hover:scale-110"
                  onClick={warningremover}
                />
                <p>Please Fill All The Details Before Submitting</p>
              </div>
            )}

            <div className='form w-[70%] grid grid-cols-3 gap-10'>

              <div>
                <h3 className="font-medium text-xl text">Region</h3>
                <input
                  type="text"
                  name="Region"
                  value={region}
                  placeholder="Fill Numeric Value"
                  className=" w-[300px] h-10 mt-4"
                  onChange={(e) => {
                    let num = Number(e.target.value);
                    if(num && num<11) setregion(num);
                    else setregion(0);
                  }}
                />
              </div>

              <div>
                <h3 className="font-medium text-xl text">Standard Error</h3>
                <input
                  type="text"
                  name="error"
                  value={error}
                  placeholder="Fill Numeric Value"
                  className=" w-[300px] h-10 mt-4"
                  onChange={(e) => {
                    const input = e.target.value;
                    const validNumberRegex = /^[0-9]*\.?[0-9]*$/;

                    if (validNumberRegex.test(input)) {
                      if (input === "" || (parseFloat(input) >= 0 && parseFloat(input) <= 10)) {
                        seterror(input);
                      }
                    }
                  }}
                />
              </div>

              <div>
                <h3 className="font-medium text-xl text">Economy (GDP per Capita)</h3>
                <input
                  type="text"
                  name="economy"
                  value={economy}
                  placeholder="Fill Numeric Value"
                  className=" w-[300px] h-10 mt-4"
                  onChange={(e) => {
                    const input = e.target.value;
                    const validNumberRegex = /^[0-9]*\.?[0-9]*$/;

                    if (validNumberRegex.test(input)) {
                      if (input === "" || (parseFloat(input) >= 0 && parseFloat(input) <= 10)) {
                        seteconomy(input);
                      }
                    }
                  }}
                />
              </div>

              <div>
                <h3 className="font-medium text-xl text">Family</h3>
                <input
                  type="text"
                  name="family"
                  value={family}
                  placeholder="Fill Numeric Value"
                  className=" w-[300px] h-10 mt-4"
                  onChange={(e) => {
                    const input = e.target.value;
                    const validNumberRegex = /^[0-9]*\.?[0-9]*$/;

                    if (validNumberRegex.test(input)) {
                      if (input === "" || (parseFloat(input) >= 0 && parseFloat(input) <= 10)) {
                        setfamily(input);
                      }
                    }
                  }}
                />
              </div>

              <div>
                <h3 className="font-medium text-xl text">Health (Life Expectancy)</h3>
                <input
                  type="text"
                  name="health"
                  value={health}
                  placeholder="Fill Numeric Value"
                  className=" w-[300px] h-10 mt-4"
                  onChange={(e) => {
                    const input = e.target.value;
                    const validNumberRegex = /^[0-9]*\.?[0-9]*$/;

                    if (validNumberRegex.test(input)) {
                      if (input === "" || (parseFloat(input) >= 0 && parseFloat(input) <= 10)) {
                        sethealth(input);
                      }
                    }
                  }}
                />
              </div>

              <div>
                <h3 className="font-medium text-xl text">Freedom</h3>
                <input
                  type="text"
                  name="freedom"
                  value={freedom}
                  placeholder="Fill Numeric Value"
                  className=" w-[300px] h-10 mt-4"
                  onChange={(e) => {
                    const input = e.target.value;
                    const validNumberRegex = /^[0-9]*\.?[0-9]*$/;

                    if (validNumberRegex.test(input)) {
                      if (input === "" || (parseFloat(input) >= 0 && parseFloat(input) <= 10)) {
                        setfreedom(input);
                      }
                    }
                  }}
                />
              </div>

              <div>
                <h3 className="font-medium text-xl text">Trust (Government Corruption)</h3>
                <input
                  type="text"
                  name="trust"
                  value={trust}
                  placeholder="Fill Numeric Value"
                  className=" w-[300px] h-10 mt-4"
                  onChange={(e) => {
                    const input = e.target.value;
                    const validNumberRegex = /^[0-9]*\.?[0-9]*$/;

                    if (validNumberRegex.test(input)) {
                      if (input === "" || (parseFloat(input) >= 0 && parseFloat(input) <= 10)) {
                        settrust(input);
                      }
                    }
                  }}
                />
              </div>
              
              <div>
                <h3 className="font-medium text-xl text">Generosity</h3>
                <input
                  type="text"
                  name="generosity"
                  value={generosity}
                  placeholder="Fill Numeric Value"
                  className=" w-[300px] h-10 mt-4"
                  onChange={(e) => {
                    const input = e.target.value;
                    const validNumberRegex = /^[0-9]*\.?[0-9]*$/;

                    if (validNumberRegex.test(input)) {
                      if (input === "" || (parseFloat(input) >= 0 && parseFloat(input) <= 10)) {
                        setgenerosity(input);
                      }
                    }
                  }}
                />
              </div>

              <div>
                <h3 className="font-medium text-xl text">Dystopia Redidual</h3>
                <input
                  type="text"
                  name="residual"
                  value={residual}
                  placeholder="Fill Numeric Value"
                  className=" w-[300px] h-10 mt-4"
                  onChange={(e) => {
                    const input = e.target.value;
                    const validNumberRegex = /^[0-9]*\.?[0-9]*$/;

                    if (validNumberRegex.test(input)) {
                      if (input === "" || (parseFloat(input) >= 0 && parseFloat(input) <= 10)) {
                        setresidual(input);
                      }
                    }
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white rounded-2xl py-4 w-48 mx-60 font-semibold text-xl shadow-md active:scale-105 mb-5"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </>
      )}
    
      {result && (
        <div className='mt-10 text-5xl font-bold'>

          <Confetti
            width={1500}
            height={650}
          />
          <div className='mt-44 flex flex-col justify-center gap-10 place-items-center'>
            <p className='pacifico-regular'>Congrats Your Happiness Score Is</p>
            <p className='pacifico-regular'>{data}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
