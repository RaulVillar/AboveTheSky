import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

class Search extends React.Component {
    constructor(props) {
      super(props)
      this.notificationDOMRef = React.createRef()
    }
  
    render() {
      return (
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
          ...
        </div>
      )
    }
  }

class Search extends React.Component {
  handleSearch = () => {
    // Realiza la búsqueda y obtiene los resultados
    const results = ...

    if (results.length > 0) {
      // Muestra una notificación de éxito
      store.addNotification({
        title: 'Búsqueda completada',
        message: `Se encontraron ${results.length} resultados`,
        type: 'success',
        insert: 'top',
        container: 'top-right',
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
      
    } else {
      // Muestra una notificación de advertencia
      store.addNotification({
        title: 'Búsqueda completada',
        message: 'No se encontraron resultados',
        type: 'warning',
        insert: 'top',
        container: 'top-right',
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
    }
  }

  render() {
    return (
      <div>
        <ReactNotification ref={this.notificationDOMRef} />
        ...
      </div>
    )
  }
}
