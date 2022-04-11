import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MessagePanel  from './MessagePanel.js' 

function App() {
  return (
  <MessagePanel>
    <MessagePanel.Heading text='Show/Hide' />
    <MessagePanel.Content>
      Phasellus sed velit venenatis, suscipit eros a, laoreet dui.
    </MessagePanel.Content>
  </MessagePanel>
  );
}

export default App;
