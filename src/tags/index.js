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
    newType: PropTypes.array,
    disabled: PropTypes.bool,
    texts: PropTypes.object,
    children: PropTypes.node,
  }

  render() {
    const {
      tags,
      onTagRemove,
      texts = {},
      disabled,
      readOnly,
      sortable = false,
      onReorderList,
      newType,
      children,
    } = this.props
    const lastItem = children || <span className="placeholder">{texts.placeholder || 'Choose...'}</span>

    return (
      <ul className="tag-list">
        {!sortable ? (
          getTags(tags, onTagRemove, readOnly, disabled, texts.labelRemove)
        ) : (
          <ReactSortable
            list={[
              {
                "value": 0,
                "label": "Total",
                "categories": [
                  {
                    "value": 0,
                    "label": "Total",
                    "checked": true,
                    "master": 0
                  }
                ],
                "expanded": false,
                "_depth": 0,
                "_id": "rdts1-1",
                "_children": [
                  "rdts1-1-0"
                ],
                "partial": false,
                "checked": true
              },
              {
                "value": 1,
                "label": "Gender",
                "categories": [
                  {
                    "value": 0,
                    "label": "Male",
                    "checked": true,
                    "master": 1
                  },
                  {
                    "value": 1,
                    "label": "Female",
                    "checked": true,
                    "master": 1
                  }
                ],
                "expanded": false,
                "_depth": 0,
                "_id": "rdts1-2",
                "_children": [
                  "rdts1-2-0",
                  "rdts1-2-1"
                ],
                "partial": false,
                "checked": true,
                "chosen": false
              },
              {
                "value": 2,
                "label": "35+",
                "checked": true,
                "master": 2,
                "_depth": 1,
                "_id": "rdts1-3-2",
                "_parent": "rdts1-3"
              }
            ]}
            setList={newList => onReorderList(newList)}
          >
            {getTags(tags, onTagRemove, readOnly, disabled, texts.labelRemove)}
          </ReactSortable>
        )}
        <li className="tag-item">{lastItem}</li>
      </ul>
    )
  }
}

export default Tags
