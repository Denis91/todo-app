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

  const itemComponents = items.map(item => {
    return(
      <div key={item.id}>
        <input type="checkbox" checked={item.done}/>{item.text}
      </div>
    );
  });

  return (
    <div>
        <h1>TODO APP</h1>
        {itemComponents}
    </div>
  )
}

export default App
