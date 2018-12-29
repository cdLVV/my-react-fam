import React from 'react'
// import PropTypes from 'prop-types'
import routes from "routesConfig/basicRoutes";

class ReactDocumentTitle extends React.PureComponent {
  state = {
    title: '',
    pathname: '',
  }

  static getDerivedStateFromProps(props, preState) {
    const { location = {} } = props
    if (location.pathname !== preState.pathname) {
      const route = routes.find(item => item.path === location.pathname) || {}
      return {
        pathname: location.pathname,
        title: route.name,
      }
    }
    return null
  }

  componentDidMount() {
    this.setTitle()
  }

  componentDidUpdate() {
    this.setTitle()
  }

  setTitle = () => {
    const { title } = this.state
    document.title = title
  }

  render() {
    return this.props.children
  }
}
// ReactDocumentTitle.propTypes = {
//   location: PropTypes.object.isRequired
// }

export default ReactDocumentTitle