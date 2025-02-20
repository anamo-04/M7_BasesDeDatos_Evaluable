const express   =   require('express');
const app       =   express.Router();

const Device    =   require('../models/device');

app.get('/', async (req,res) => {
    try {
        const devices   =   await Device.find();
        res.status(200).json({
            message :   'Ok',
            devices
        })
    } catch (error) {
        res.status(500).json({
            message :   'Dabase Error',
            Error: `${error}`
        })
    }
})

app.post('/', async (req,res) => {
    try {
        const newDevice =   new Device(req.body);
        await newDevice.save();
        res.status(200).json({
            message :   'Ok',
            DeviceCreated   :   newDevice
        })
    } catch (error) {
        res.status(500).json({
            message :   'Dabase Error',
            Error: `${error}`
        })
    }
})

app.put('/', async (req,res) => {
    try {
        const deviceUpdated =   await Device.findOneAndUpdate(
            {_id: req.body._id}, req.body, {upsert: true, new: true, runValidators: true});
        res.status(200).json({
            message:    'Ok',
            deviceUpdated
        })    
    } catch (error) {
        res.status(500).json({
            message :   'Dabase Error',
            Error: `${error}`
        })
    }
})

app.delete('/:_id', async (req,res) => {
    try {
        const deviceDeleted =   await Device.findOneAndDelete({_id: req.params._id}, );
        res.status(200).json({
            message:    'Ok',
            deviceDeleted
        })
    } catch (error) {
        res.status(500).json({
            message :   'Dabase Error',
            Error: `${error}`
        })
    }
})

module.exports  =   app;