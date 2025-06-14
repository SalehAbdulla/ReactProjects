
const NewsLetterBox = () => {

    const onSubmitHandler = (event: React.ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault();
    }

  return (
    <section className="text-center mb-4 mx-10 sm:mx-0">
      <p className="text-3xl text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-xs text-gray-400 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, quos!</p>
      <form onSubmit={onSubmitHandler} className="border mt-2 sm:w-1/2 flex justify-between pl-2 w-full m-auto">
        <input className="w-full outline-none" type="email" placeholder="Enter Your Email" required/>
        <button type="submit" className="bg-black text-white text-xs px-10 py-3">SUBSCRIBE</button>
      </form>
    </section>
  )
}

export default NewsLetterBox
