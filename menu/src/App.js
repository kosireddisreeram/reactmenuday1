
import './App.css';
// for question one
// import One from './components/One';
import Props from './buttons/Props';
function App() {
  return (
    <div>
     {/* <One/> */}
     <Props name="Join US" className="joinus"/>
      <Props name="Settings" className="settings" />
      <Props name="Login" className="login"/>
      <Props name="Contact US" className="contact"/>
      <Props name="Search" className="search"/>
      <Props name="Help" className="help"/>
      <Props name="Home" className="home"/>
      <Props name="Download" className="download"/>
    </div>
  );
}

export default App;
