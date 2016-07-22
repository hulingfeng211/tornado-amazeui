module.exports = {
    entry: './js/index.jsx',
    output: {
        path:'./js',
        filename: 'bundle.js' //this is the default name, so you can skip it
    
    },
    module: {
        loaders: [
            
            {
                test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        //'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
