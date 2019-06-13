import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = {language: 'english', color: 'primary'};

  onLangChange = (language, color) => {
    this.setState({language, color})
  };

  render() {
    return (
      <Context.Provider value={{...this.state, onLangChange: this.onLangChange}} >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;
