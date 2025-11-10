import './App.css';
import FirstView from './components/FiestView';
import Footer from './components/Footer';
import Header from './components/Header';
import ModalButton from './components/ModalButton';
import Posts from './components/Posts';
import SecText from './components/SecText';
import SecTitle from './components/SecTitle';
import SecWrap from './components/SecWrap';

function App() {
  return (
    <>
      <Header />
      <FirstView />
      <SecWrap>
        <SecTitle title="Latest Blog Posts" />
        <Posts />
      </SecWrap>

      <SecWrap>
        <SecTitle title="We Value Your Feedback" />
        <SecText />
        <ModalButton />
      </SecWrap>
      <Footer />
    </>
  );
}

export default App;
