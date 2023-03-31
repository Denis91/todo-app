import { useState } from 'react'

const defaultitems = [
  {
    id:1,
    text:"Kupi pivo",
    done:false,
  },
  {
    id:2,
    text:"Kupi pizzu",
    done:true,
  },
];

function App() {
  const [items, setItems] = useState(defaultitems);
  const[formState, setFormState]= useState({
    text:'',
  });

  const handleSubmit = (event) =>{
    event.preventDefault();
    setItems([
      ...items, {
        id:Date.now(),
        text: formState.text,
        done:false,
      },
    ]);
    setFormState({...formState, text:''});
  }
  
  const handleChange= (event) =>{
    setFormState({...formState, [event.target.name]: event.target.value});
  }

  const itemComponents = items.map(item => {
    const handleChange = () =>{
       setItems(items.map(newItem => {
        if(newItem.id === item.id){
          return{...newItem, done: !item.done};
        }
      }));
    };

    const handleClick= () => {
      setItems(items.filter(newItem => {
        return newItem.id !== item.id;
      }));
    }

    return(
      <div key={item.id}>
        <input type="checkbox" checked={item.done} onChange={handleChange}/>{item.text}
        <button onClick={handleClick}>x</button>
      </div>
    );
  });

  return (
    <div>
        <h1>TODO APP</h1>
        <form>
          <input type="text" name ="text" onChange={handleChange} value={formnState.text}/>
          <button type="submit"></button>
        </form>
        {itemComponents}
      </div>
  )
}

export default App
