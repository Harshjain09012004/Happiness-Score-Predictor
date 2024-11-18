const express = require('express');
const cors = require('cors');
const ort = require('onnxruntime-node');
const fs = require('fs');

const app = express();
app.use(express.json());

app.use(cors({
    origin:'http://localhost:5173',
}));

app.post('/RunModel',async (req,res)=>{
    try {
        //Extracting the features from the request
        let data = req.body;

        // Load the ONNX model
        const session = await ort.InferenceSession.create('happiness_model.onnx');

        // Define input tensor (replace with your data)
        const inputTensor = new ort.Tensor('float32', new Float32Array([data.region, data.error, data.economy, data.family, data.health, data.freedom, data.trust, data.generosity, data.residual]), [1, 9]);

        const feeds = { float_input: inputTensor };
        const results = await session.run(feeds);
        
        console.log('Model Outputs:', session.outputNames[0]);
        console.log('Model Output:', results[session.outputNames[0]].data[0]);
        res.json(results[session.outputNames[0]].data[0]);
    } 
  
    catch (error) {
        console.error('Error running the model:', error);
    }
})

app.listen(5000);