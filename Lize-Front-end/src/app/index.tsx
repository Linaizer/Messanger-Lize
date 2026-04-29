import AppProvider from './providers/AppProvider'
import AppRouter from './router/AppRouter'

const App = () => {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    )
}

export default App