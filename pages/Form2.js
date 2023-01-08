import {
    useState
} from 'react';

function Form2() {
    const [formData, setFormData] = useState([])
    const [inputValue, setInputValue] = useState('')
  
    const handleSubmit = (event) => {
      event.preventDefault()
      setFormData([...formData, inputValue])
      setInputValue('')
    }
  
    const handleChange = (event) => {
      setInputValue(event.target.value)
    }
    const handleDelete = (dataToDelete) => {
      setFormData(formData.filter(data => data !== dataToDelete))
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className='rounded-lg'
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" class="bg-indigo-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">
            Submit
        </button>
        <ul>
      {formData.map((data, index) => (
        <li key={index}>
          {data}
          <button type="delete" onClick={() => handleDelete(data)}>
            Delete
					</button>
        </li>
      ))}
    </ul>
      </form>
    )
  }
export default Form2;