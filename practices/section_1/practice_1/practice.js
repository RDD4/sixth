function collect_same_elements(collection_a, collection_b) {
    var array = new Array();
    for(var i=0;i<collection_a.length;i++)
    {
      if (collection_b.indexOf(collection_a[i]) != -1)
      {
        array.push(collection_a[i]);
      }
    }
    return array;
}

module.exports = collect_same_elements;
