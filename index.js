function getFirstSelector(selector) {
  const ele = document.querySelector(selector);
  return ele;
}

function nestedTarget() {
  const target = document.getElementById('nested').querySelector('div.target')
  return target;
}