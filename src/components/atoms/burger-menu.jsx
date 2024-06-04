export default function BurgerMenu ({isClick, setIsClick}) {

  return (
    <div className={`burger-menu flex flex-col ${isClick ? 'opened': ''}`} 
      onClick={() => {setIsClick(!isClick)}}>
        <div className="burger-bar bar-top"/>
        <div className="burger-bar bar-middle"/>
        <div className="burger-bar bar-bottom"/>
    </div>
  )
}