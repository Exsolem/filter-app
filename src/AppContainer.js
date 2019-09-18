import App from './App';
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './store/index'


const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(App);

export default AppContainer;