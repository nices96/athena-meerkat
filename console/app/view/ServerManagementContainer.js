/*
 * File: app/view/ServerManagementContainer.js
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

Ext.define('webapp.view.ServerManagementContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.servermanagementcontainer',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number',
        'Ext.form.field.Display',
        'Ext.form.field.Hidden'
    ],

    itemId: 'mycontainer31',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    flex: 9,
                    height: 597,
                    items: [
                        {
                            xtype: 'panel',
                            autoScroll: true,
                            manageHeight: false,
                            title: 'Tomcat servers',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    flex: 1,
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'button',
                                            text: 'New Server'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridpanel',
                                    flex: 1,
                                    dock: 'top',
                                    id: 'serverGrid',
                                    margin: '',
                                    title: '',
                                    forceFit: true,
                                    store: 'ServerStore',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'name',
                                            text: 'Server name'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'osName',
                                            text: 'Operating System'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'sshIPAddr',
                                            text: 'IP Address'
                                        },
                                        {
                                            xtype: 'actioncolumn',
                                            dataIndex: 'tomcatInstanceNo',
                                            text: 'Action'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'toolbar',
                                    flex: 1,
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'pagingtoolbar',
                                            width: 1125,
                                            displayInfo: true,
                                            store: 'ServerStore'
                                        }
                                    ]
                                }
                            ],
                            items: [
                                {
                                    xtype: 'tabpanel',
                                    flex: 7,
                                    id: 'detailServerTab',
                                    hideCollapseTool: true,
                                    manageHeight: false,
                                    activeTab: 0,
                                    items: [
                                        {
                                            xtype: 'panel',
                                            autoScroll: true,
                                            title: 'Information',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    margin: '10 10 10 10'
                                                },
                                                {
                                                    xtype: 'form',
                                                    height: 228,
                                                    bodyPadding: 10,
                                                    title: '',
                                                    items: [
                                                        {
                                                            xtype: 'textfield',
                                                            anchor: '100%',
                                                            id: 'serverNameTextField',
                                                            fieldLabel: 'Server name',
                                                            readOnly: true,
                                                            allowBlank: false,
                                                            allowOnlyWhitespace: false
                                                        },
                                                        {
                                                            xtype: 'textfield',
                                                            anchor: '100%',
                                                            id: 'serverHostNameTextField',
                                                            fieldLabel: 'Host name',
                                                            readOnly: true,
                                                            allowBlank: false,
                                                            allowOnlyWhitespace: false
                                                        },
                                                        {
                                                            xtype: 'combobox',
                                                            anchor: '100%',
                                                            id: 'serverSSHIPAddressCombobox',
                                                            fieldLabel: 'SSH IPAddress',
                                                            readOnly: true,
                                                            editable: false,
                                                            displayField: 'nameAndIPAddr',
                                                            store: 'NetworkInterfaceStore',
                                                            valueField: 'id'
                                                        },
                                                        {
                                                            xtype: 'numberfield',
                                                            anchor: '100%',
                                                            id: 'serverSSHPortTextField',
                                                            fieldLabel: 'SSH Port',
                                                            readOnly: true,
                                                            allowBlank: false,
                                                            allowOnlyWhitespace: false
                                                        },
                                                        {
                                                            xtype: 'displayfield',
                                                            anchor: '100%',
                                                            id: 'serverOSNameDisplayField',
                                                            fieldLabel: 'OS Name'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            id: 'serverEditBtn',
                                                            itemId: 'serverEditBtn',
                                                            text: 'Edit'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            hidden: true,
                                                            id: 'serverSaveBtn',
                                                            margin: '0 10 0 0',
                                                            text: 'Save'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            hidden: true,
                                                            id: 'serverCancelBtn',
                                                            text: 'Cancel'
                                                        },
                                                        {
                                                            xtype: 'hiddenfield',
                                                            id: 'serverIDHiddenField_',
                                                            fieldLabel: 'Label'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            autoScroll: true,
                                            layout: 'fit',
                                            title: 'SSH Account',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    layout: {
                                                        type: 'hbox',
                                                        align: 'stretch'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'gridpanel',
                                                            flex: 2,
                                                            height: 277,
                                                            id: 'sshAccountGrid',
                                                            title: '',
                                                            forceFit: true,
                                                            store: 'SSHAccountStore',
                                                            columns: [
                                                                {
                                                                    xtype: 'gridcolumn',
                                                                    align: 'center',
                                                                    dataIndex: 'username',
                                                                    text: 'SSH Accounts'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            xtype: 'panel',
                                                            flex: 5,
                                                            layout: 'vbox',
                                                            title: '',
                                                            items: [
                                                                {
                                                                    xtype: 'button',
                                                                    itemId: 'serverAddSSHAccountBtn',
                                                                    margin: '50 0 0 5',
                                                                    text: '추가'
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    margin: 5,
                                                                    text: '비밀번호 변경'
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    margin: 5,
                                                                    text: '삭제'
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    margin: 5,
                                                                    text: 'Test  connection'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    listeners: {
                                        tabchange: {
                                            fn: me.onDetailServerTabTabChange,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onDetailServerTabTabChange: function(tabPanel, newCard, oldCard, eOpts) {


        var activeTab = tabPanel.getActiveTab();
        var activeTabIndex = tabPanel.items.findIndex('id', activeTab.id);
        if(activeTabIndex === 2) { //env tab
            try{
                var selectedRecords;
                selectedRecords = Ext.getCmp('serverGrid').getSelectionModel().getSelection();
                var serverId = selectedRecords[0].get("id");

                //load EV revisions
                webapp.app.getController("ServerManagementController").loadEVRevisions(serverId, function(data){
                        Ext.getCmp("evRevisionComboBox").getStore().loadData(data);
                    });

                webapp.app.getController("ServerManagementController").loadEnvironmentVariables(serverId, function(data){
                    Ext.getCmp("environmentVariablesGridPanel").getStore().loadData(data);
                });
            }catch(e){

                Ext.Msg.show({
                    title: "Message",
                    msg: "Please choose tomcat server",
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.WARNING
                });
            }

        }
    }

});