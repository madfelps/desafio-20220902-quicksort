const date = require('date-and-time');

function swap(values: number[], indice_um: number, indice_dois: number)
{
    let tmp: number
    tmp = values[indice_um]
    values[indice_um] = values[indice_dois]
    values[indice_dois] = tmp

} 

function particiona(values: number[], left: number, right: number): number {
    let pivot = values[left]

    let i = left
    for (let j = left+1; j < right; j++)
    {
        if(values[j] <= pivot)
        {
            i++
            swap(values, i, j)
        }
    }
    swap(values, left, i)


    // retorna o indice do pivot apos o particionamento
    return i
}

function myQuickSort(values: number[], left: number, right:number)
{
    if(left < right)
    {
        let indexPivot = particiona(values, left, right)
        myQuickSort(values, left, indexPivot)
        myQuickSort(values, indexPivot+1, right)
    }
}


let text = `[
    {"treta" : "Sênior de 2 anos", "ultima_ocorrencia": "2022/07/29"},
    {"treta" : "CLT vs PJ", "ultima_ocorrencia": "2022/08/31"},
    {"treta" : "JavaScript No Backend", "ultima_ocorrencia": "2022/09/01"},
    {"treta" : "Java Morreu", "ultima_ocorrencia": "2022/08/28"},
    {"treta" : "Comentário em Código", "ultima_ocorrencia": "2022/06/05"},
    {"treta" : "Clean Architecture Não Presta", "ultima_ocorrencia": "2022/08/25"},
    {"treta" : "Dizer que é rico/a", "ultima_ocorrencia": "2022/07/05"},
    {"treta" : "Usar cc @sseraphini 'à toa'", "ultima_ocorrencia": "2022/02/13"},
    {"treta" : "Design Patterns Não Prestam", "ultima_ocorrencia": "2022/08/22"},
    {"treta" : "Dependency Inject É Apenas Argumento", "ultima_ocorrencia": "2022/08/20"},
    {"treta" : "PHP Morreu", "ultima_ocorrencia": "2022/08/29"}
]`

const tretasJSON = JSON.parse(text);

let mapIndexSeconds = new Map<number, string>()

let dateTreta = new Date()
let secondsTreta: number

//vetor a ser ordenado
let valuesSeconds: number[] = []


for(let i = 0; i < tretasJSON.length; i++)
{
    dateTreta = date.parse(tretasJSON[i].ultima_ocorrencia, 'YYYY/MM/DD')
    secondsTreta = dateTreta.getTime()/1000
    mapIndexSeconds.set(secondsTreta, tretasJSON[i])
    valuesSeconds.push(secondsTreta)
    
}


myQuickSort(valuesSeconds, 0, valuesSeconds.length)

for(let i = 0; i < valuesSeconds.length; i++)
{
    console.log(mapIndexSeconds.get(valuesSeconds[i]))
}

