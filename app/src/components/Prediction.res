@module("@tensorflow/tfjs")
@module("@tensorflow/tfjs-converter") external loadGraphModel


let default = {
  "name": "Prediction",
  "created": () => {
    let MODEL_URL = "../../model/model.json"
    let model = loadGraphModel(MODEL_URL)
    console.log(model)
  }
}
