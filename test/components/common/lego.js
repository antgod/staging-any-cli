/* eslint-disable no-underscore-dangle*/
/* eslint-disable no-nested-ternary*/

function array(o) {
  return o === undefined ? [] : (Array.isArray(o) ? o : [o])
}

function find(children = [], type) {
  return array(children).find((child) => {
    return child.type.__base !== undefined ? child.type.__base === type : child.type === type
  })
}

function filter(children = [], type) {
  return array(children).filter((child) => {
    return child.type.__base !== undefined ? child.type.__base === type : child.type === type
  })
}

function omit(children = [], types) {
  return array(children).filter((child) => {
    return child.type.__base !== undefined ? types.includes(child.type.__base) === false : types.includes(child.type) === false
  })
}

function has(children = [], type) {
  return Boolean(find(children, type))
}

function is(child, type) {
  return child.type.__base !== undefined ? child.type.__base === type : child.type === type
}

function findChildren(children = [], type) {
  const found = find(children, type)
  return found ? found.props.children : undefined
}

export const Children = {
  find,
  findChildren,
  has,
  is,
  filter,
  omit,
}
