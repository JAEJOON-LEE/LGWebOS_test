import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import React, { videoRef, useRef } from 'react';

let net;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');

  // Create an object from Tensorflow.js data API which could capture image
  // from the web camera as Tensor.

  const webcam = await tf.data.webcam(document.getElementById("webcam"));
  const labels = document.getElementsByTagName('label');
  while (true) {
    const img = await webcam.capture();
    const result = await net.classify(img);

    // document.getElementById('console').innerText = `
    //   prediction: ${result[0].className}\n
    //   probability: ${result[0].probability}
    // `;
    // // Dispose the tensor to release the memory.

    // for (var i=0; i<labels.length; i++){
    //   // console.log(labels[i].innerText);
    //   if (result[0].className.includes(labels[i].innerText.toLowerCase())) {
    //     console.log("find object : " + labels[i].innerText + " -> " + result[0].className);
    //     var findObject = document.getElementById(i.toString());
    //     console.log(findObject.getAttribute("name") + ' - ' + findObject.checked);
    //     if (findObject.checked==false){
    //       findObject.checked = true;
    //     }
    //     break;
    //   }
    // }

    img.dispose();

    // Give some breathing room by waiting for the next animation frame to
    // fire.
    await tf.nextFrame();
  }
}

app();
