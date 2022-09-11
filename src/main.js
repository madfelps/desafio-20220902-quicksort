function swap(values, indice_um, indice_dois) {
    var tmp;
    tmp = values[indice_um];
    values[indice_um] = values[indice_dois];
    values[indice_dois] = tmp;
}
function particiona(values, left, right) {
    var pivot = values[left];
    var i = left;
    for (var j = left + 1; i < right; i++) {
        if (values[i] <= pivot) {
            j++;
            swap(values, i, j);
        }
    }
    swap(values, left, i);
    console.log(values);
}
var values = [3, 8, 7, 10, 0, 23, 2, 1, 77, 7];
particiona(values, 0, values.length - 1);
