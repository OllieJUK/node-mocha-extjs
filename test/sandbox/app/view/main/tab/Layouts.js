Ext.define('Sandbox.view.main.tab.Layouts', {
    extend: 'Ext.panel.Panel',
    xtype: 'tabLayouts',

    requires: [
        'Sandbox.view.main.SuitePanel'
    ],

    title: 'Layouts',

    items: [{
        xtype: 'suitePanel',
        suiteWidth: 280,
        suiteCode: [
            'eTT().panel(\'Accordion 2\').click(done)'
        ],
        suiteItems: [{
            xtype: 'container',
            layout: 'accordion',
            height: 200,
            items: [{
                xtype: 'panel',
                title: 'Accordion 1'
            },{
                xtype: 'panel',
                title: 'Accordion 2',
                html: 'Accordion text is here!'
            }]
        }]
    }]
})
