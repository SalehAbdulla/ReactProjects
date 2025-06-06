
const EventHandling = () => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked ", event.currentTarget);
  }

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered ", event.currentTarget);
  }

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling Example</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default EventHandling;
