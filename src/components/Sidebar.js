import React, { Component } from 'react';

import '../assets/styles/Sidebar.scss';

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      childrenArr: null,
      groupOffsetTop: {}
    }

    this.onItemClickHandler = this.onItemClickHandler.bind(this);
  }

  onItemClickHandler(e) {
    const clickId = e.currentTarget.getAttribute('data-id');

    // // 删除所有li节点的className
    const children = e.currentTarget.parentNode.children;
    const childrenArr = Array.from(children);
    for (const item of childrenArr) {
      item.className = '';
    }

    // 当前Element为active
    e.currentTarget.className = 'active';
    const toElement = document.getElementById(clickId);
    document.documentElement.scrollTop = toElement.offsetTop;
  }

  throttle(fn, wait) {
    let timeout, context, args;
    let previous = 0;

    const later = () => {
      previous = +new Date();
      timeout = null;
      fn.apply(context, args);
    };

    const throttled = (..._args) => {
      const now = +new Date();
      const remaining = wait - (now - previous);
      context = this;
      args = _args;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        fn.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
    };
    return throttled;
  }

  onScrollHandler() {
    const _scrollTop = document.documentElement.scrollTop + 21;
    let currentGroupId;
    let minOffset;

    // 判断当前滚动条的位置与group的offset距离
    for (const [groupId, offsetTop] of Object.entries(this.groupOffsetTop)) {
      if (_scrollTop > offsetTop) {
        if (!minOffset) {
          minOffset = _scrollTop - offsetTop;
          currentGroupId = groupId;
        } else {
          if (_scrollTop - offsetTop < minOffset) {
            minOffset = _scrollTop - offsetTop;
            currentGroupId = groupId;
          }
        }
      }
    }

    // 设置符合条件的li为active状态
    for (const item of this.childrenArr) {
      if (item.dataset.id === currentGroupId) {
        item.className = 'active';
      } else {
        item.className = '';
      }
    }
  }

  componentDidMount() {
    const sidebarUl = document.getElementById('sidebar-ul');
    const children = sidebarUl.children;
    this.childrenArr = Array.from(children);
    this.groupOffsetTop = {};
    for (const item of this.childrenArr) {
      const id = item.dataset.id;
      const el = document.getElementById(id);
      this.groupOffsetTop[id] = el.offsetTop;
    }

    // 初始化active状态
    this.onScrollHandler();

    window.addEventListener('scroll', this.throttle(this.onScrollHandler, 100));
  }

  // 在组件卸载时候, 需要手动移除原生事件的绑定
  componentWillunmount() {
    window.removeEventListener('scroll');
  }

  component

  render() {
    const navLi = this.props.websites.map(website => 
      <li data-id={website.id} key={website.id} onClick={this.onItemClickHandler}>{ website.group }</li>
    )

    return(
      <div className="sidebar">
        <ul id="sidebar-ul">
          { navLi }
        </ul>
      </div>
    );
  }
}

export default Sidebar;