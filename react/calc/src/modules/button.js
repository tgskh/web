function ButtonNum ({value, onClick}) {

  return (
    <button
      className="buttonNum"
      onClick={onClick}
      value={value}>
        {value}
      </button>
  )
}

function ButtonOperaion ({value, onClick}) {

  return (
    <button
      className="buttonOperation"
      onClick={onClick}
      value={value}>
        {value}
      </button>
  )
}

export {ButtonNum, ButtonOperaion};