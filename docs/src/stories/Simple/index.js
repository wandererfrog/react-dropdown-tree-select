import React from 'react'

import DropdownTreeSelect from '../../../../src'

import './index.css'
import data from './data.json'

const onChange = (curNode, selectedNodes) => {
  console.log('onChange::', curNode, selectedNodes)
}
const onAction = (node, action) => {
  console.log('onAction::', action, node)
}
const onNodeToggle = curNode => {
  console.log('onNodeToggle::', curNode)
}

const onFocus = () => {
  console.log('onFocus')
}

const onBlur = () => {
  console.log('onBlur')
}

const onReorderList = (newList) => {
  console.log(newList)
}

const Simple = () => (
  <div>
    <h1>Basic component</h1>
    <p>
      This is a basic example of the component. Note that there are no external styles in this page, not even{' '}
      <code>reset.css</code> or <code>reboot.css</code> or <code>normalizer.css</code>.
    </p>
    <p>
      The idea is to showcase the component at its barest minimum. Of course, its easy to style it, using popular
      frameworks such as Bootstrap or Material Design (checkout the examples on left).
    </p>
    <p>
      As a side effect, it also helps rule out issues arising out of using custom frameworks (if something doesn&apos;t
      look right in your app but looks OK here, you know what is messing things up).
    </p>
    <DropdownTreeSelect
      data={data}
      onChange={onChange}
      onAction={onAction}
      onNodeToggle={onNodeToggle}
      onReorderList={onReorderList}
      onFocus={onFocus}
      onBlur={onBlur}
      sortable
      className="demo"
    />
    <DropdownTreeSelect
      data={[
        {
          "label": "Everything",
          "checked": false,
          "id": 0.9215653828722463
        },
        {
          "value": 0,
          "label": "Read a printed newspaper",
          "checked": false,
          "id": 1.9085662227177476
        },
        {
          "value": 1,
          "label": "Visited a newspaper website",
          "checked": false,
          "id": 2.2386511444784674
        },
        {
          "value": 2,
          "label": "Read a printed magazine",
          "checked": false,
          "id": 3.9683844898405116
        },
        {
          "value": 3,
          "label": "Read a digital magazine",
          "checked": false,
          "id": 4.627763356841399
        },
        {
          "value": 4,
          "label": "Watched television",
          "checked": false,
          "id": 5.743144682851218
        },
        {
          "value": 5,
          "label": "Watched television online or on demand",
          "checked": false,
          "id": 6.884139654358451
        },
        {
          "value": 6,
          "label": "Read a book",
          "checked": false,
          "id": 7.4333807171852255
        },
        {
          "value": 7,
          "label": "Read an e-book",
          "checked": false,
          "id": 8.58625581627021
        },
        {
          "value": 8,
          "label": "None of the above",
          "checked": false,
          "id": 9.163327936921345
        }
      ]}
      onChange={onChange}
      onAction={onAction}
      onNodeToggle={onNodeToggle}
      onFocus={onFocus}
      onBlur={onBlur}
      sortable
      className="demo"
    />
  </div>
)

export default Simple
