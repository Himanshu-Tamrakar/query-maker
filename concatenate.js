const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/VAH-BRM-DESIGNER-WIDGET/runtime.js',
        './dist/VAH-BRM-DESIGNER-WIDGET/polyfills.js',
        './dist/VAH-BRM-DESIGNER-WIDGET/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/vah-brm-designer-widget.js');
})()