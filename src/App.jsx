import './App.css'
import { AiOutlineUser } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import {FiSend } from "react-icons/fi";
import {GrFormPrevious , GrFormNext} from "react-icons/gr"
import UserForm from './components/UserForm'
import Thanks from './components/Thanks';
import ReviewForm from './components/ReviewForm';
import UseForm from './hooks/UseForm';
import { useState } from 'react';

function App() {

    const dataForm = {
        name : '' ,
        email : '' ,
        review : 'neutral' ,
        comment : ''
    }

    const [data , setData] = useState(dataForm);

    const updateFieldHandler = (key , value)  => {
        setData((prev) => {
            
            return {...prev , [key]:value}
        })
    }

    const handleSubmit = (e) => {
        console.log(data)
        return changeStep(currentStep + 1 , e)
    }

    const components = [
        <UserForm data={data} updateFieldHandler={updateFieldHandler}/> , 
        <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/> , 
        <Thanks data={data} updateFieldHandler={updateFieldHandler}/>
    ];

    const {currentStep , currentComponent , changeStep , isFirstStep , isLastStep} = UseForm(components);

    return (
      <div className="app">
          <header>
              <h2>Deixe sua avaliação</h2>
              <p>Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto</p>
          </header>
      
          <section className='form-container'>
            <section className='steps'>
                      <div className='active'>
                          <hr></hr>
                          <AiOutlineUser size={25} className='active'/>
                          <p>Identificação</p>
                      </div>
                      <div className={currentStep >= 1 ? 'active' : ''}>                      
                          <hr></hr>
                          <FaRegStar size={25}/>
                          <p>Avaliação</p>
                      </div>
                      <div className={currentStep >= 2 ? 'active' : ''}>                       
                          <FiSend size={25} />
                          <p>Envio</p>
                      </div>
            </section>

            <form onSubmit={handleSubmit}>

                {currentComponent}

                <section className='actions'>
                  {!isFirstStep && (<button type='button' onClick={() => changeStep(currentStep - 1)}>
                        <GrFormPrevious/>
                        <span>Voltar</span>
                  </button>)
                  }
           
                  {!isLastStep ? 
                    <button type='submit'>  
                        <span>Avançar</span>
                        <GrFormNext/>
                    </button>
                    :<button type='submit'>  
                        <span>Enviar</span>
                        <FiSend/>
                    </button>
                 }

                </section>
              </form>

        </section>  
  
      </div>
   )
}

export default App
