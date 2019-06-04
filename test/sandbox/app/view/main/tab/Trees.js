Ext.define('Sandbox.view.main.tab.Trees', {
    extend: 'Ext.panel.Panel',
    xtype: 'tabTrees',

    requires: [
        'Sandbox.view.main.SuitePanel',
        'Sandbox.view.main.custom.Treepanel'
    ],

    title: 'Trees',

    items: [{
        xtype: 'suitePanel',
        suiteWidth: 280,
        suiteCode: [
            'eTT().treepanel(\'Treepanel 1\').select(\'node 1\')'
        ],
        suiteItems: [{
            xtype: 'customtreepanel',
            title: 'Treepanel 1'
        }]
    }]
})