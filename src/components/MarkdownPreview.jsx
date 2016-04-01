import React from 'react';
import marked from 'marked';

export default class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);

    let options = {};
    if (this.props.markedOptions) {
      options = this.props.markedOptions;
    }
    options = {
      ...options,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    };
    marked.setOptions(options);
  }
  render() {
    const { value } = this.props;
    const html = marked(value || '');

    return (
      <div dangerouslySetInnerHTML={{__html: html}} />
    );
  }
}

MarkdownPreview.propTypes = {
  value: React.PropTypes.string.isRequired
};

MarkdownPreview.defaultProps = {
  value: ''
};
