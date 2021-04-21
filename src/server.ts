// import express from 'express'
const express = require('express')
const app = express()

const orm = require('./database/index')

app.get('/', (req, res) => {
	return res.json({
		message: "Olá Mundo"
	})
})

app.post('/', (req, res) => {
	return res.json({
		message: "Usuario salvo"
	})
})

app.listen(8080, () => console.log('Server na Porta 8080') )
