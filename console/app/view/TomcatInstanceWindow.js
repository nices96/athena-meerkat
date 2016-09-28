/*
 * File: app/view/TomcatInstanceWindow.js
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

Ext.define('webapp.view.TomcatInstanceWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.TomcatInstanceWindow',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.form.field.Number',
        'Ext.grid.Panel',
        'Ext.grid.column.CheckColumn',
        'Ext.grid.View',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Hidden'
    ],

    height: 591,
    id: 'TomcatInstanceWindow',
    itemId: 'TomcatInstanceWindow',
    width: 565,
    title: 'New Tomcat Instance',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    flex: 1,
                    id: 'tomcatForm',
                    bodyPadding: 10,
                    title: '',
                    dockedItems: [
                        {
                            xtype: 'container',
                            dock: 'top',
                            margin: '10 0 10 10',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    id: 'domainField',
                                    width: 399,
                                    fieldLabel: 'Domain'
                                },
                                {
                                    xtype: 'displayfield',
                                    id: 'domainTypeDisplayField',
                                    fieldLabel: 'Domain type:'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'newTomcatNameField',
                                    width: 400,
                                    fieldLabel: 'Instance name',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'combobox',
                                    id: 'serverComboBox',
                                    width: 399,
                                    fieldLabel: 'Server',
                                    editable: false,
                                    displayField: 'name',
                                    store: 'MachineStore',
                                    valueField: 'id',
                                    listeners: {
                                        select: {
                                            fn: me.onServerComboBoxSelect,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'button',
                                            disabled: true,
                                            id: 'btnTestConnection',
                                            itemId: '',
                                            text: 'Test server connection'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            id: 'serverStatusDisplayField',
                                            margin: '0 0 0 20',
                                            fieldLabel: 'Server status'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            dock: 'top',
                            margin: '10 0 10 10',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    id: 'httpPortField',
                                    width: 400,
                                    fieldLabel: 'HTTP_PORT',
                                    labelWidth: 150,
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'numberfield',
                                    id: 'ajpPortField',
                                    width: 399,
                                    fieldLabel: 'AJP_PORT',
                                    labelWidth: 150,
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'numberfield',
                                    id: 'redirectPortField',
                                    width: 399,
                                    fieldLabel: 'REDIRECT_PORT',
                                    labelWidth: 150,
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            dock: 'top',
                            id: 'datasourceGrid',
                            margin: '10 10 10 10',
                            title: 'Data sources',
                            forceFit: true,
                            store: 'LinkingTomcatDatasourceStore',
                            columns: [
                                {
                                    xtype: 'checkcolumn',
                                    dataIndex: 'selected',
                                    text: 'Select'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    text: 'Name'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'jdbcUrl',
                                    text: 'JDBC Url'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'dbType',
                                    text: 'Servers'
                                }
                            ]
                        },
                        {
                            xtype: 'checkboxfield',
                            dock: 'top',
                            id: 'autoRestartTomcatCheckbox',
                            fieldLabel: '',
                            boxLabel: 'Automatically start tomcat after being created'
                        },
                        {
                            xtype: 'container',
                            dock: 'top',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnTomcatSubmit',
                                    margin: '0 0 0 200',
                                    text: 'Create'
                                },
                                {
                                    xtype: 'button',
                                    id: 'btnCancelTomcat',
                                    margin: '0 0 0 10',
                                    text: 'Cancel',
                                    listeners: {
                                        click: {
                                            fn: me.onBtnCancelTomcatClick,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            id: 'tomcatHiddenField',
                            fieldLabel: 'Label'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onServerComboBoxSelect: function(combo, records, eOpts) {
        if(combo.getValue() > 0 ){
          Ext.getCmp("btnTestConnection").enable();
        }else {
            Ext.getCmp("btnTestConnection").disable();
        }
    },

    onBtnCancelTomcatClick: function(button, e, eOpts) {
         Ext.MessageBox.confirm('Confirm', '작업을 취소하시겠습니까?', function(btn){

             if(btn == "yes"){
                button.up("window").close();
             }
         });
    }

});