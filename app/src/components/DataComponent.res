let pipelineResults = {

  let param1 = 1
  let param2 = 99

  let stepOne = (a: int, b: int): int => a + b

  stepOne(param1, param2)

}

let default = {
  "name": "DataComponent",
  "data": () => {
    "results": pipelineResults
  }
}
