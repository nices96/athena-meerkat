/*
 * File: app/store/MenuTreeStore.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
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

Ext.define('webapp.store.MenuTreeStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MenuTreeStore',
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Dashboard',
                        menuId: 'dashboard',
                        leaf: true
                    },
                    {
                        text: 'Tomcat Management',
                        menuId: 'tomcatMng',
                        expanded: true,
                        children: [
                            {
                                text: 'Domain 1',
                                menuId: 'tomcatMng_domain_1',
                                expanded: true,
                                children: [
                                    {
                                        text: 'Tomcat 1',
                                        menuId: 'tomcatMng_domain_1_tomcat_1',
                                        expanded: true,
                                        children: [
                                            
                                        ]
                                    }
                                ]
                            }
                        ],
                        
                    },
                    {
                        text: 'Monitoring',
                        menuId: 'monitoring',
                        expanded: true,
                        children: [
                            {
                                text: 'Servers',
                                menuId: 'monitoring_servers',
                                expanded: true,
                                children: [
                                    {
                                        text: 'Server 1',
                                        menuId: 'monitoring_servers_server_1',
                                        expanded: true,
                                        children: [
                                            
                                        ]
                                    }
                                ]
                            },
                            {
                                text: 'Tomcat Instances',
                                menuId: 'monitoring_tomcats',
                                expanded: true,
                                children: [
                                    {
                                        text: 'Tomcat 1',
                                        menuId: 'monitoring_tomcats_tomcat_1',
                                        expanded: true,
                                        children: [
                                            
                                        ]
                                    }
                                ]
                            },
                            
                        ]
                    },
                    {
                        text: 'Resource Management',
                        menuId: 'resourcemng',
                        expanded: true,
                        children: [
                            {
                                text: 'Servers',
                                menuId: 'resourcemng_servers',
                                leaf: true
                            },
                            {
                                text: 'Datasources',
                                menuId: 'resourcemng_datasources',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Log Management',
                        menuId: 'logmnt',
                        leaf: true
                    },
                    {
                        text: 'User Management',
                        menuId: 'usermnt',
                        leaf: true
                    },
                    
                ]
            },
            fields: [
                {
                    name: 'text',
                    type: 'string'
                },
                {
                    name: 'menuId',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});