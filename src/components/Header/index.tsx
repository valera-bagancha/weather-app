export const Header = () => {
  return (
    <header className='head-main-page'>
      <div className='container-header-main-page'>
        <div className='logo'><img src="https://cdn-icons-png.flaticon.com/512/1214/1214753.png" alt="...loading" /></div>
        <form>
          <div className='input-header'>
            <input placeholder='Search City'/>
            <span className="material-symbols-outlined search-icon">search</span>
          </div>
        </form>
        <div className='language-changer'>Language</div>
      </div>
    </header>
  )
}