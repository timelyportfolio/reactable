import React from 'react'
import PropTypes from 'prop-types'

export default class WidgetContainer extends React.Component {
  componentDidMount() {
    this.staticRender()
  }

  staticRender() {
    debugger
    if (!window.HTMLWidgets) {
      return
    }
    if (!WidgetContainer.throttled) {
      //window.HTMLWidgets.staticRender()
      // instead of staticRender let we will manually construct


      // Throttle static rendering since it targets the entire document
      WidgetContainer.throttled = true
      setTimeout(() => {
        if (WidgetContainer.lastCall) {
          window.HTMLWidgets.staticRender()
        }
        WidgetContainer.throttled = false
        WidgetContainer.lastCall = false
      })
    } else {
      WidgetContainer.lastCall = true
    }
  }

  render() {
    return this.props.children
  }
}

WidgetContainer.propTypes = {
  children: PropTypes.node
}
