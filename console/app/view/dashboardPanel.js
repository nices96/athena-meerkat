/*
 * File: app/view/dashboardPanel.js
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

Ext.define('webapp.view.dashboardPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dashboardpanel',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'Ext.panel.Panel',
        'Ext.form.Label',
        'Ext.chart.Chart',
        'Ext.util.Point',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line'
    ],

    height: 792,
    itemId: 'dashboardPanel',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'combobox',
                            id: 'domainComboBox',
                            itemId: 'mycombobox',
                            fieldLabel: 'Domain',
                            displayField: 'name',
                            store: 'DomainStore',
                            valueField: 'id',
                            listeners: {
                                select: {
                                    fn: me.onDomainComboBoxSelect,
                                    scope: me
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    collapseMode: 'mini',
                    flex: 1,
                    dock: 'top',
                    bodyBorder: true,
                    animCollapse: false,
                    collapseDirection: 'top',
                    collapsible: false,
                    placeholderCollapseHideMode: 2,
                    title: 'Tomcat 1',
                    titleCollapse: true,
                    dockedItems: [
                        {
                            xtype: 'panel',
                            dock: 'top',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    height: 70,
                                    margin: '5 5 5 5',
                                    width: 171,
                                    bodyBorder: true,
                                    title: 'Health',
                                    titleAlign: 'center',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            height: 21,
                                            style: 'font-size:medium;font-weight:bold; text-align:center;',
                                            width: 171,
                                            text: '100%'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    height: 70,
                                    margin: '5 5 5 5',
                                    width: 171,
                                    title: 'Today Availability',
                                    titleAlign: 'center',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            height: 21,
                                            margin: '0 0 0 30',
                                            style: 'font-size:medium;font-weight:bold; text-align:center;',
                                            width: 171,
                                            text: '100%'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    height: 70,
                                    margin: '5 5 5 5',
                                    width: 171,
                                    title: 'Today\'s Uptime',
                                    titleAlign: 'center',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            height: 21,
                                            style: 'font-size:medium;font-weight:bold; text-align:center;',
                                            width: 37,
                                            text: '11 hrs 11 mins 26 secs'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    height: 70,
                                    margin: '5 5 5 5',
                                    width: 171,
                                    title: 'Last Downtime',
                                    titleAlign: 'center',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            height: 21,
                                            style: 'font-size:medium;font-weight:bold; text-align:center;',
                                            width: 37,
                                            text: '1 hrs 51 mins 26 secs'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            dock: 'bottom',
                            height: 233,
                            width: 657,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 10 10 10',
                                    style: 'border:5px;',
                                    width: 600,
                                    layout: 'fit',
                                    bodyBorder: true,
                                    bodyStyle: 'border:5px;',
                                    title: 'Server Response Time',
                                    titleAlign: 'center',
                                    dockedItems: [
                                        {
                                            xtype: 'chart',
                                            dock: 'top',
                                            height: 184,
                                            html: '<span style="color:red;valign:center;">SERVER RESPONE TIME</span>',
                                            style: 'border: 5px;',
                                            width: 598,
                                            animate: true,
                                            insetPadding: 20,
                                            store: 'DomainStore',
                                            axes: [
                                                {
                                                    type: 'Category',
                                                    fields: [
                                                        'x'
                                                    ],
                                                    title: 'Response Time',
                                                    position: 'bottom'
                                                },
                                                {
                                                    type: 'Numeric',
                                                    fields: [
                                                        'y'
                                                    ],
                                                    title: 'ms',
                                                    position: 'left'
                                                }
                                            ],
                                            series: [
                                                {
                                                    type: 'line',
                                                    xField: 'x',
                                                    yField: 'y',
                                                    smooth: 3
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 10 10 10',
                                    width: 634,
                                    title: 'Server Performance',
                                    titleAlign: 'center',
                                    dockedItems: [
                                        {
                                            xtype: 'chart',
                                            dock: 'top',
                                            border: true,
                                            height: 184,
                                            width: 598,
                                            animate: true,
                                            insetPadding: 20,
                                            store: 'TempoStore',
                                            axes: [
                                                {
                                                    type: 'Category',
                                                    fields: [
                                                        'x'
                                                    ],
                                                    title: 'Time',
                                                    position: 'bottom'
                                                },
                                                {
                                                    type: 'Numeric',
                                                    fields: [
                                                        'y'
                                                    ],
                                                    title: 'ms',
                                                    position: 'left'
                                                }
                                            ],
                                            series: [
                                                {
                                                    type: 'line',
                                                    xField: 'x',
                                                    yField: 'y',
                                                    smooth: 3
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    dock: 'top',
                    margin: '10 0 0 0 ',
                    animCollapse: false,
                    collapseDirection: 'top',
                    collapsible: false,
                    placeholderCollapseHideMode: 2,
                    title: 'Tomcat 2',
                    titleCollapse: true,
                    dockedItems: [
                        {
                            xtype: 'panel',
                            dock: 'top',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    height: 70,
                                    margin: '5 5 5 5',
                                    width: 171,
                                    title: 'Health',
                                    titleAlign: 'center',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            height: 21,
                                            style: 'font-size:medium;font-weight:bold; text-align:center;',
                                            width: 171,
                                            text: '100%'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    height: 70,
                                    margin: '5 5 5 5',
                                    width: 171,
                                    title: 'Today Availability',
                                    titleAlign: 'center',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            height: 21,
                                            margin: '0 0 0 30',
                                            style: 'font-size:medium;font-weight:bold; text-align:center;',
                                            width: 171,
                                            text: '100%'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    height: 70,
                                    margin: '5 5 5 5',
                                    width: 171,
                                    title: 'Today\'s Uptime',
                                    titleAlign: 'center',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            height: 21,
                                            style: 'font-size:medium;font-weight:bold; text-align:center;',
                                            width: 37,
                                            text: '11 hrs 11 mins 26 secs'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    height: 70,
                                    margin: '5 5 5 5',
                                    width: 171,
                                    title: 'Last Downtime',
                                    titleAlign: 'center',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'label',
                                            height: 21,
                                            style: 'font-size:medium;font-weight:bold; text-align:center;',
                                            width: 37,
                                            text: '1 hrs 51 mins 26 secs'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            dock: 'bottom',
                            height: 233,
                            width: 657,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 10 10 10',
                                    width: 600,
                                    layout: 'fit',
                                    bodyBorder: true,
                                    title: 'Server Response Time',
                                    titleAlign: 'center',
                                    dockedItems: [
                                        {
                                            xtype: 'chart',
                                            dock: 'top',
                                            height: 184,
                                            html: 'SERVER RESPONE TIME',
                                            width: 598,
                                            animate: true,
                                            insetPadding: 20,
                                            store: 'TempoStore',
                                            axes: [
                                                {
                                                    type: 'Category',
                                                    fields: [
                                                        'x'
                                                    ],
                                                    title: 'Response Time',
                                                    position: 'bottom'
                                                },
                                                {
                                                    type: 'Numeric',
                                                    fields: [
                                                        'y'
                                                    ],
                                                    title: 'ms',
                                                    position: 'left'
                                                }
                                            ],
                                            series: [
                                                {
                                                    type: 'line',
                                                    xField: 'x',
                                                    yField: 'y',
                                                    smooth: 3
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 10 10 10',
                                    width: 634,
                                    title: 'Server Performance',
                                    titleAlign: 'center',
                                    dockedItems: [
                                        {
                                            xtype: 'chart',
                                            dock: 'top',
                                            height: 184,
                                            width: 598,
                                            animate: true,
                                            insetPadding: 20,
                                            store: 'TempoStore',
                                            axes: [
                                                {
                                                    type: 'Category',
                                                    fields: [
                                                        'x'
                                                    ],
                                                    title: 'Time',
                                                    position: 'bottom'
                                                },
                                                {
                                                    type: 'Numeric',
                                                    fields: [
                                                        'y'
                                                    ],
                                                    title: 'ms',
                                                    position: 'left'
                                                }
                                            ],
                                            series: [
                                                {
                                                    type: 'line',
                                                    xField: 'x',
                                                    yField: 'y',
                                                    smooth: 3
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onDomainComboBoxSelect: function(combo, records, eOpts) {
        window.location.reload();
    }

});