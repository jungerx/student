import logo from './logo.svg';
import './App.css';
import { Header,Layout,StudentList } from './component';

function App() {
  return (
    <div className="App">
     <div className="row">
  <div className="col-lg-7 grid-margin stretch-card">
    <div className="card">
     <Header/>
     <StudentList/>
    </div>
  </div>
    <Layout/>
</div>
    </div>
  );
}

export default App;
