const TextEffect = () => {
  return (
    <>
      <form className="form h-100px border-2 bg-amber-100">
        <input type="text" className="input-field border" id="input" />
        <button className="button h-full border" id='btn'>Draw</button>
      </form>
      <canvas
        className="h-[calc(90vh-47px)] bg-gray-300 relative top-0 bottom-0 left-0 cursor-pointer"
        id="canvas1">
      </canvas>
    </>
  )
}
export default TextEffect