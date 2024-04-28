// Importações
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

// Configurações do Webpack
module.exports = {
    // Configuração do servidor (A extenção live server faz exatamente isto)
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
        port: 3000, // Disponibilizando a porta 300 da nossa máquina para o servidor NodeJS
    },
    watchOptions: {
        ignored: './node_modules',
    },
    entry: { // Arquivos JS que o webpack vai disponibilizar como "chunks" (partes) do "bundle" (pacote)
        index: path.resolve(__dirname, './', 'index.js'),
        // outra: path.resolve(__dirname, './', 'outra.js')
    },
    output: { // Pasta e arquivo que será enviada a compilação do seu projeto em uma build
        filename: '[name]-[fullhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    // Modo - development ou production
    mode: 'development',
    target: 'web',
    // Regras para carregamento de módulos (js, typescript, css, scss, etc)
    module: {
        rules: [
            {
                test: /\.js$/, // Pegando todos arquivos que terminam com .js
                exclude: /node_modules/, // Ignora a pasta node_modules
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/, // Pegando todos os arquivos sass, scss ou css
                exclude: /node_modules/, // Ignora a pasta node_modules
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './', 'index.html'),
            chunks: ['index'] // Indica qual bundle de entrypoint gerado será utilizado neste HTML
        }),
        /*new HTMLWebpackPlugin({
            filename: 'outra.html',
            template: path.resolve(__dirname, './', 'outra.html'),
            chunks: ['outra']
        }),*/
        // Adicione mais instâncias do HTMLWebpackPlugin para mais arquivos HTML
    ]
}