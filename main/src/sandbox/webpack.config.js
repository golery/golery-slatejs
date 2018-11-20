const path = require('path');
const { resolve } = require('path');
var webpack = require('webpack');
const config = {
    entry: [
        'react-hot-loader/patch',
        "./index.js"
    ],
    context: __dirname,
    output: {
        path: __dirname + "/build",
        filename: "index.js",
        publicPath: "/",
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    devServer: {
        contentBase: __dirname,
        port: 9000,
        hot: true
    },
    plugins: [
        //prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),

        //activates HMR
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = function (env, argv) {
    if (argv.mode === "production") {
        config.output.filename = "index.js";
        config.output.path += "/min";
        config.devtool = false;
    } else {
        config.output.filename = "index.js";
        config.output.path += "/dev";
        config.devtool = "source-map";
    }
    console.log(config);
    return config;
};