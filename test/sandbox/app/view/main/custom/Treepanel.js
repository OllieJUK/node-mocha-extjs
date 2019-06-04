Ext.define('Sandbox.view.main.custom.Treepanel', {
    extend: 'Ext.tree.Panel',
    xtype: 'customtreepanel',

    width: 300,
    height: 150,
    border: true,

    store: Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [{
                text: 'homework',
                expanded: false,
                children: [{
                    text: 'book report',
                    expanded: false,
                    children: [{
                        text: 'test',
                        leaf: true
                    }, {
                        text: 'test 2',
                        leaf: true
                    }]
                }, {
                    text: 'algebra',
                    leaf: true
                }]
            }, {
                text: 'homework',
                expanded: true,
                children: [{
                    text: 'book report',
                    expanded: false,
                    children: [{
                        text: 'test',
                        leaf: true
                    }, {
                        text: 'test 2',
                        leaf: true
                    }]
                }]
            }]
        }
    })
});