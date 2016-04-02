import React from 'react';

export default class MarkdownInput extends React.Component {
  render() {
    const {onChange, value, placeholder, className} = this.props;
    return (
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        ref="textareaRef"
        className={className}/>
    );
  }
}
