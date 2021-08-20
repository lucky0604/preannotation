/*
let net;

async function app() {
  console.log('Loading mobile net')

  net = await mobilenet.load()

  console.log('Successfully loaded model')

  const imgEl = document.getElementById('img')
  const result = await net.classify(imgEl)

  console.log(result)
}

app()
*/

import * as tf from '@tensorflow/tfjs'
import {loadGraphModel} from '@tensorflow/tfjs-converter'

const MODEL_URL = 'model/model.json'

const model = await loadGraphModel(MODEL_URL)
const img = document.getElementById('img')
const result = model.execute(tf.browser.fromPixels(img))
console.log(result)
