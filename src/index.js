(function (name, context, definition) {
    if (typeof module != 'undefined') {
        module.exports = definition()
    }
    else if (typeof define == 'function') {
        define(definition)
    }
    else {
        context[name] = definition()
    }
})('Test', window, function () {

    function echo(msg){
        console.log(msg);
    }

    function add(a,b){
        return a+b;
    }

    return {
        echo: echo,
        add: add
    }
});

