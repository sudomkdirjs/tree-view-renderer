import React, { Component } from 'react';
import _ from 'lodash';

class Tree extends Component {

  renderContent(content = {}) {
    return (
      <div className={content.className}>
        <div>{content.group}</div>
        <div>{content.hint}</div>
      </div>
    );
  }

  iterateChildrens(childrens = []) {
    return childrens.map(children => this.renderContainerView(children.container));
  }

  renderContainerView(container = {}) {
    return (
      <div className={`view-${container.type}-${container.size}`}>
        {_.isEmpty(container.content) ? this.iterateChildrens(container.children) : this.renderContent(container.content)
        }
      </div>
    );
  }

  render() {
    let {data = {}} = this.props;
    console.log(data, 'data')
    return (
      <div className="Tree">
        {this.renderContainerView(data.container)}
      </div>
    );
  }
}

export default Tree;
