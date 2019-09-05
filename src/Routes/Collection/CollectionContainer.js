import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    error: null,
    loading: true
  };
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();

      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({
        error: "Can't find Movies imformation"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { collection, uerror, loading } = this.state;
    // console.log(this.state);
    return (
      <CollectionPresenter
        collection={collection}
        error={error}
        loading={loading}
      />
    );
  }
}
