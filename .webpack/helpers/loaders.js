/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const noLoadersForRawImportsResourceQuery = {
    resourceQuery: { not: [/raw/] },
};

const rawImports = {
    resourceQuery: /raw/,
    type: "asset/source",
};

const getJsTsLoaders = (isHotDevelopment) => {
    return {
        test: /\.(js|ts(x?))$/,
        ...noLoadersForRawImportsResourceQuery,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                plugins: [isHotDevelopment && "react-refresh/babel"].filter(
                    Boolean,
                ),
            },
        },
    };
};

const styleLoaders = {
    test: /\.(scss|sass|css)$/,
    ...noLoadersForRawImportsResourceQuery,
    exclude: /node_modules/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: "@teamsupercell/typings-for-css-modules-loader",
            options: { disableLocalsExport: true },
        },
        {
            loader: "css-loader",
            options: {
                modules: true,
            },
        },
        "sass-loader",
    ],
};

const fontLoaders = {
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    type: "asset/resource",
};

const assetLoaders = {
    test: /\.(png|jpe?g|gif|ico|pdf)$/i,
    type: "asset",
};

const svgLoaders = {
    test: /\.svg$/,
    ...noLoadersForRawImportsResourceQuery,
    use: [
        {
            loader: "@svgr/webpack",
            options: {
                dimensions: false,
            },
        },
    ],
};

const getModuleLoaders = (isHotDevelopment) => {
    return [
        {
            ...getJsTsLoaders(isHotDevelopment),
        },
        {
            ...styleLoaders,
        },
        {
            ...fontLoaders,
        },
        {
            ...svgLoaders,
        },
        {
            ...assetLoaders,
        },
        {
            ...rawImports,
        },
    ];
};

module.exports = {
    getJsTsLoaders,
    styleLoaders,
    fontLoaders,
    svgLoaders,
    assetLoaders,
    getModuleLoaders,
};
