---
order: 0
title: 
  zh-CN: 基础用法
  en-US: Basic
---

## zh-CN

适用于广泛基本用法。分隔方式分为图标分隔及斜线分隔两种方式，可根据不同场景使用。

## en-US

Basic usage. Two separation options are available: separated with icon and separated with slash.

```js
import { Breadcrumb } from '@sensoro-design/react';

const BreadcrumbItem = Breadcrumb.Item;

ReactDOM.render(
  <div>
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem><a href="#">Channel</a></BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
  </div>,
  CONTAINER
);
```