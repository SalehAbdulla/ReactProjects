import FormButton from "./FormButton"

const Form2 = () => {

  const myAction = async (event: React.ChangeEvent<HTMLFormElement>) => {
    
    const formData = new FormData(event.currentTarget);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newPost = {
      name: formData.get("name"),
      email: formData.get("email")
    }
    console.log(newPost);
  }


  return (
    <form onSubmit={myAction}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" className="m-2 border-2" id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <FormButton />
      
    </form>
  )
}

export default Form2
