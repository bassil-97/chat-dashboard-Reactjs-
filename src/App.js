import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Chats from './components/Chats/Chats';
import ChatBox from './components/Chats/ChatBox/ChatBox';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page-content p-5" id="content">

        <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i className="fa fa-bars mr-2"></i><small className="text-uppercase font-weight-bold">Toggle</small></button>

        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <Chats />
          </div>
          <div className="col-xl-6 col-lg-12">
            <ChatBox />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
