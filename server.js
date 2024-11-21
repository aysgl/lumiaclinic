// Express.js ile node_modules'dan dosyaları sunmak
const express = require('express')
const path = require('path')
const app = express()

// node_modules'ı statik olarak sunmak
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

// Uygulamanızın geri kalanını sunmak
app.use(express.static('public'))

// Sunucuyu başlatmak
app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor...')
})
