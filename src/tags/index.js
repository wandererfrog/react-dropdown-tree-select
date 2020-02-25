import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Tag from '../tag'
import { getDataset } from '../utils'
import { ReactSortable } from 'react-sortablejs'

import './index.css'

const getTags = (tags = [], onDelete, readOnly, disabled, labelRemove) =>
  tags.map(tag => {
    const { _id, label, tagClassName, dataset } = tag
    return (
      <li
        className={['tag-item', tagClassName].filter(Boolean).join(' ')}
        key={`tag-item-${_id}`}
        {...getDataset(dataset)}
      >
        <Tag
          label={label}
          id={_id}
          onDelete={onDelete}
          readOnly={readOnly}
          disabled={disabled}
          labelRemove={labelRemove}
        />
      </li>
    )
  })

class Tags extends PureComponent {
  static propTypes = {
    tags: PropTypes.array,
    onTagRemove: PropTypes.func,
    readOnly: PropTypes.bool,
    sortable: PropTypes.bool,
    onReorderList: PropTypes.func,
    disabled: PropTypes.bool,
    texts: PropTypes.object,
    children: PropTypes.node,
  }

  render() {
    const { tags, onTagRemove, texts = {}, disabled, readOnly, sortable = false, onReorderList, children } = this.props
    const lastItem = children || <span className="placeholder">{texts.placeholder || 'Choose...'}</span>

    return (
      <ul className="tag-list">
        {!sortable ? (
          getTags(tags, onTagRemove, readOnly, disabled, texts.labelRemove)
        ) : (
          <ReactSortable list={tags} setList={newList => onReorderList(newList)}>
            {getTags(tags, onTagRemove, readOnly, disabled, texts.labelRemove)}
          </ReactSortable>
        )}
        <li className="tag-item">{lastItem}</li>
      </ul>
    )
  }
}

export default Tags
