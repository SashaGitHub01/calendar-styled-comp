import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { GlobalStyles } from './styles/global';
import Layout from './components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchAuth } from './store/thunks/auth';
import { useTypedSelector } from './hooks/useTypedSelector';
import Loader from './components/Loader/Loader';

function App() {
   const dispatch = useDispatch();
   const { isInitialized } = useTypedSelector(state => state.auth)

   useEffect(() => {
      dispatch(fetchAuth());
   }, [])

   return (
      <>
         {isInitialized
            ? <Layout>
               <AppRouter />
            </Layout>
            : <Loader />}
         <GlobalStyles />
      </>
   );
}

export default App;
