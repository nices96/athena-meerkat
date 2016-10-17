/*
 * File: app/model/ServerModel.js
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

Ext.define('webapp.model.ServerModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name'
        },
        {
            name: 'osName'
        },
        {
            name: 'sshNiId'
        },
        {
            name: 'sshPort'
        },
        {
            name: 'hostName'
        },
        {
            name: 'instName'
        },
        {
            name: 'sshIPAddr'
        }
    ]
});