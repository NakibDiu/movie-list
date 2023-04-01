import Home from '../Home/Home';
import History from '../History/History';
const MainLayout = ({currentUrl, list, setList}) => {

  return (
    <div id='main' className='flex-1 ml-[40%] lg:ml-[25%]'>
      {
        currentUrl === "/" ? <Home list={list} setList={setList} /> : <History list={list} setList={setList} />
      }
    </div>
  )
}

export default MainLayout