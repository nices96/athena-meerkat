/*
 * File: app/view/TomcatInstanceCreateWizard.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('webapp.view.TomcatInstanceCreateWizard', {
    extend: 'Ext.window.Window',
    alias: 'widget.ticWizard',

    requires: [
        'webapp.view.DomainForm',
        'webapp.view.TomcatForm',
        'Ext.form.Label',
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.grid.Panel',
        'Ext.selection.CheckboxModel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill'
    ],

    height: 577,
    width: 720,
    layout: 'card',
    title: 'Tomcat Instance Create Wizard',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    autoScroll: true,
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        padding: 10
                    },
                    items: [
                        {
                            xtype: 'label',
                            style: 'font-weight: bold',
                            text: '1/3 Step : Create Domain'
                        },
                        {
                            xtype: 'label',
                            margins: '10 0 10 20',
                            text: 'Domain을 생성합니다.'
                        },
                        {
                            xtype: 'domainform'
                        },
                        {
                            xtype: 'tomcatform'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    itemId: 'step2',
                    autoScroll: true,
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        padding: 10
                    },
                    items: [
                        {
                            xtype: 'label',
                            cls: 'osc-bold',
                            text: '2/3 Step : Select Datasource'
                        },
                        {
                            xtype: 'label',
                            margins: '10 0 10 20',
                            cls: 'osc-panel-tip',
                            text: 'Datasource를 선택 또는 생성합니다.'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Domain Name',
                            labelAlign: 'right',
                            value: 'API Product Domain',
                            fieldCls: 'x-form-display-field osc-bold'
                        },
                        {
                            xtype: 'label',
                            cls: 'osc-h3',
                            text: 'Datasources :'
                        },
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            autoScroll: true,
                            bodyBorder: true,
                            bodyStyle: 'background: #fff',
                            header: false,
                            iconCls: 'icon-grid',
                            title: 'Datasources',
                            store: 'DatasourceStore',
                            selModel: Ext.create('Ext.selection.CheckboxModel', {

                            }),
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    width: 170,
                                    dataIndex: 'name',
                                    text: 'Datasource Name'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 350,
                                    dataIndex: 'jdbcUrl',
                                    text: 'JDBC Url'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'dbType',
                                    text: 'Server'
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'button',
                                            itemId: 'btnWCreateDs',
                                            iconCls: 'add',
                                            text: 'Create Datasource'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    autoScroll: true,
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        padding: 10
                    },
                    items: [
                        {
                            xtype: 'label',
                            style: 'font-weight: bold',
                            text: '3/3 Step : Select Servers'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                me.navigate(button.up("panel"), "prev");
                            },
                            disabled: true,
                            id: 'prev-btn',
                            text: 'PreButton'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                me.navigate(button.up("panel"), "next");
                            },
                            id: 'next-btn',
                            text: 'NextButton'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    navigate: function(panel, direction) {
        var layout = panel.getLayout();
        layout[direction]();
        Ext.getCmp('prev-btn').setDisabled(!layout.getPrev());
        Ext.getCmp('next-btn').setDisabled(!layout.getNext());
    }

});