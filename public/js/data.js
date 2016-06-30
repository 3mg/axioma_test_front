function $$makeFullPageItems(width) {
    return [
        {
            name: 'w'+width,
            type: 'type',
            image: 'img/_design/mainpage.png'
        }
    ];
}
function $$makeComponentsItems() {
    var items = [];
    var images = [
        "Arrow",
        "Submenu",
        "Request for quote",
        "Main menu",
        "Button",
        "Quote",
        "Header"
    ];
    [
        "arrow",
        "submenu",
        "request_for_quote",
        "main_menu",
        "button",
        "quote",
        "header"
    ].forEach(function(component, idx) {
        items.push({
            name: component,
            type: 'type',
            image: 'img/_design/'+ images[idx] +'.png'
        });
    });
    return items;
}
function $$makeFullPageModules() {
    var modules = [];

    [1600, 1280, 1024, 900, 800, 700, 600, 400, 320, 280].forEach(function(width) {
        modules.push({
            name: 'full page ' + width,
            type: 'module',
            width: width,
            items: $$makeFullPageItems(width)
        });
    });
    return modules;
}

var data = {
    label: 'Test task',
    items: [{
        name: 'full page',
        type: 'module',
        items: $$makeFullPageModules()
    }, {
        name: 'components',
        type: 'module',
        width: 400,
        items: $$makeComponentsItems()
    }]
};
