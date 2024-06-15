function UserForm({data , updateFieldHandler}) {

  const handleName = (e) => {
    updateFieldHandler("name" , e.target.value);
  }

  const handleEmail = (e) => {
    updateFieldHandler("email" , e.target.value);
  }

  return (
    <section className='form-control'>
        <label htmlFor='name'>Nome: </label>
        <input 
        type='text' 
        placeholder='Digite seu nome' 
        name='name' 
        id='name'
        required
        value={data.name || ""}
        onChange={handleName}
        />

        <label>Email: </label>
        <input 
        type='email' 
        placeholder='Digite seu email' 
        name='email' 
        required
        id='email'
        value = {data.email || ""}
        onChange={handleEmail}
        />
    </section>
  )
}

export default UserForm