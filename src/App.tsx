import Errors from './components/Error'
import { ErrorBoundary } from 'react-error-boundary'
import RoutesComponent from './components/RoutesComponent'
import AuthProvider from 'react-auth-kit';
import authStore from './store/AuthStore';

function App() {

  return (
    <>
    <ErrorBoundary
        FallbackComponent={Errors}
        onError={(e) => console.log("Error happened!", e)}
      >
        <AuthProvider store={authStore}>
          <RoutesComponent />

        </AuthProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
