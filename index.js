function getFirstSelector(selector) {
  const ele = document.querySelector(selector);
  return ele;
}

function nestedTarget() {
  const target = document.getElementById('nested').querySelector('div.target')
  return target;
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll('ul.ranked-list li');
  
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
  
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node').querySelectorAll('div');
  return grandNode
  
}