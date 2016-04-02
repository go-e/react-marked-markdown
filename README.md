# React Marked Markdown

A react components package that helps you use Markdown easily.

---

Writing in Markdown is an amazing experience. Setting up all components and parser is kind of a pain.

## Basic Usage

* Install with `npm i react-marked-markdown --save`
* Import component(s) you want
```js
import {MarkdownPreview} from 'react-marked-markdown';
```
or
```js
import {MarkdownPreview, MarkdownInput} from 'react-marked-markdown';
```

## MarkdownPreview

### Basic Markdown view

Display Markdown is really easy with **MarkdownPreview** component.

Here is a simple example :
```js
import React from 'react';

import {MarkdownPreview} from 'react-marked-markdown';

const Post = ({post}) => (
  <div>
    <h1>{post.title}</h1>
    <MarkdownPreview value={post.content}/>
  </div>
);

export default Post;

```

### Parsing options

Behind the scenes, **react-marked-markdown** uses **marked** as Markdown parser.
So all **marked** options are available here.

Here is an example with default options :

```js
<MarkdownPreview
  value="# Hey !"
  markedOptions={{
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  }} />
```

A list of options can be found [here](https://github.com/chjj/marked).

### CSS Classname

All **react-marked-markdown** components are unstyled, this means you can style it as you want. In order to achieve this you can pass classes names as props to every components :

```js
<MarkdownPreview
  ...
  className="ui post content" />
```

## MarkdownInput

This is a stateless textarea component used to edit Markdown, see usage below. You can pass a class name to the textare just like a regular jsx dom element.

```js
<MarkdownInput
  ...
  className="field" />
```

## LiveMarkdownTextarea

LiveMarkdownTextarea allows you to write Markdown in a textarea and see a preview of what you are writing.


```js
import React from 'react';
import {LiveMarkdownTextarea} from 'react-marked-markdown';

class CreatePost extends React.Component {
  render() {
    return (
      ...

      <LiveMarkdownTextarea
                  placeholder="Enter your comment here."
                  ref="commentEditor"
                  className="row"
                  inputClassName="field column"
                  previewClassName="column comment-preview"/>

      ...
    );
  }
}
```

## Create your own Markdown Editor

You can even create your own Markdown Editor with **MarkdownPreview** and **MarkdownInput** components.

As an example here is the code of **LiveMarkdownTextarea** component.


```js
import React from 'react';

import { MarkdownPreview, MarkdownInput } from 'react-marked-markdown';

export default class LiveMarkdownTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue ? props.defaultValue : ''
    };
  }
  handleTextChange(e) {
    this.setState({value: e.target.value});
    if (this.props.onTextChange) {
      this.props.onTextChange(e.target.value);
    }
  }
  clear() {
    this.setState({value: ''});
  }
  render() {
    const {
      placeholder,
      className,
      inputClassName,
      previewClassName
    } = this.props;
    const {value} = this.state;
    return (
      <section className={className}>
        <MarkdownInput
          placeholder={placeholder}
          onChange={this.handleTextChange.bind(this)}
          value={value}
          className={inputClassName} />

        <MarkdownPreview
          value={value}
          markedOptions={ {} }
          className={previewClassName} />
      </section>
    );
  }
}
```

Note that here **markedOptions** is an empty object so the entire prop is useless but it's there to show that we can override default options.

There is also a **clear()** method that we can call from parent component to clear the editor.
