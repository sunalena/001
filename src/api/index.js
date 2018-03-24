import React, { Component } from 'react'

const uri = window.location.origin

const fetchFromApi = async url => {
  const time = Date.now()
  const res = await fetch(uri + url)
  const result = {
    data: await res.json(),
    time,
    loading: false
  }
  return result
}

export const connect = getUrl => WrapedComp => {
  return class extends Component {
    state = {
      data: undefined,
      time: null,
      loading: true
    }

    static displayName = WrapedComp.name

    componentDidMount() {
      this.fetchData()
    }

    fetchData = async () => {
      this.setState(await fetchFromApi(getUrl(this.props)))
    }

    render() {
      return (
        <WrapedComp
          {...this.props}
          {...this.state}
          fetchMore={this.fetchData}
        />
      )
    }
  }
}
