module.exports ={
    css: {
        loaderOptions: {
            sass: {
                additionalData:
                `@import "~@/ui/styles/_variables.scss";
                @import "~@/ui/styles/_mixins.scss";
                @import "~@/ui/styles/_main.scss";`
            }
        }
    }
};