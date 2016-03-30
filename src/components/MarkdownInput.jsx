import React from 'react';

export default class MarkdownInput extends React.Component {
  render() {
    const {onChange, value, placeholder} = this.props;
    return (
      <div>
        <textarea
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          ref="textareaRef"/>
      </div>
    );
  }
}
