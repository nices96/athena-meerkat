/*
 * File: app/controller/ServerManagementController.js
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

Ext.define('webapp.controller.ServerManagementController', {
    extend: 'Ext.app.Controller',

    onDatagridServerGroupGridSelect: function(rowmodel, record, index, eOpts) {
         var id = record.get("id");
                var url = GlobalData.urlPrefix + "res/datagrid/list";
                Ext.Ajax.request({
                    url: url,
                    params: {"groupId": id},
                    success: function(resp, ops) {
                        var response = Ext.decode(resp.responseText);
                        if (response.success === true){
                            Ext.getCmp("datagirdServerGrid").getStore().loadData(response.data);
                        }
                        else {
                            Ext.Msg.show({
                                title: "Message",
                                msg: response.msg,
                                buttons: Ext.Msg.OK,
                                icon: Ext.Msg.WARNING
                            });
                        }
                    },
                    method: "GET"
                });
    },

    onTomcatServerGridSelect: function(rowmodel, record, index, eOpts) {
        var id = record.get("id");
        var url = GlobalData.urlPrefix + "res/machine/get";
        var ipaddrField = Ext.getCmp("tomcatSSHIPAddressTextField");
        var portField = Ext.getCmp("tomcatSSHPortTextField");
        var userIDField = Ext.getCmp("tomcatSSHUserIDTextField");
        var passwordField = Ext.getCmp("tomcatSSHPasswordTextField");
        var _idField = Ext.getCmp("serverIDHiddenField");
        Ext.Ajax.request({
            url: url,
            params: {"id": id},
            success: function(resp, ops) {
                var response = Ext.decode(resp.responseText);
                if (response.success === true){
                    ipaddrField.setValue(response.data.sshipaddr);
                    portField.setValue(response.data.sshPort);
                    userIDField.setValue(response.data.sshUsername);
                    passwordField.setValue(response.data.sshPassword);
                    _idField.setValue(id);
                }
                else {
                    Ext.Msg.show({
                        title: "Message",
                        msg: response.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                    });
                }
            },
            method: "GET"
        });

    },

    onEditSSHClick: function(button, e, eOpts) {
        var ipaddrField = Ext.getCmp("tomcatSSHIPAddressTextField");
        var portField = Ext.getCmp("tomcatSSHPortTextField");
        var userIDField = Ext.getCmp("tomcatSSHUserIDTextField");
        var passwordField = Ext.getCmp("tomcatSSHPasswordTextField");
        var btnSave = Ext.getCmp("btnServerSSHSave");
        if(ipaddrField.readOnly){
            ipaddrField.setReadOnly(false);
            portField.setReadOnly(false);
            userIDField.setReadOnly(false);
            passwordField.setReadOnly(false);
            btnSave.show();
            button.hide();
        }
    },

    onBtnServerSSHSaveClick: function(button, e, eOpts) {
        var ipaddrField = Ext.getCmp("tomcatSSHIPAddressTextField");
        var portField = Ext.getCmp("tomcatSSHPortTextField");
        var userIDField = Ext.getCmp("tomcatSSHUserIDTextField");
        var passwordField = Ext.getCmp("tomcatSSHPasswordTextField");
        var _idField = Ext.getCmp("serverIDHiddenField");
        var url = GlobalData.urlPrefix + "res/machine/updatessh";

         Ext.Ajax.request({
            url: url,
            params: {"sshIpAddr":ipaddrField.getValue(), "sshPort":portField.getValue(),
                     "sshUserName":userIDField.getValue(),"sshPassword":passwordField.getValue(),
                     "machineId":_idField.getValue()
                    },
            clientValidation:true,
            waitMsg:"Waiting...",
            success: function(resp, ops) {
                var response = Ext.decode(resp.responseText);

                if (response.success){
                    Ext.Msg.show({
                        title: "Message",
                        msg: response.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.INFO
                    });
                }
                else {
                    Ext.Msg.show({
                        title: "Message",
                        msg: response.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                    });
                }
            },
            method: "POST"
        });

    },

    onShowPasswordCheckboxChange: function(field, newValue, oldValue, eOpts) {
         var passwordField = Ext.getCmp("tomcatSSHPasswordTextField");
        if(!newValue){
            passwordField.inputEl.dom.setAttribute('type', 'password');
            passwordField.inputEl.addCls('x-form-password');
        }
        else{
            passwordField.inputEl.dom.setAttribute('type', 'text');
            passwordField.inputEl.addCls('x-form-text');
            passwordField.inputEl.removeCls('x-form-password');
        }
    },

    onBtnServerSSHResetClick: function(button, e, eOpts) {
        var ipaddrField = Ext.getCmp("tomcatSSHIPAddressTextField");
        var portField = Ext.getCmp("tomcatSSHPortTextField");
        var userIDField = Ext.getCmp("tomcatSSHUserIDTextField");
        var passwordField = Ext.getCmp("tomcatSSHPasswordTextField");
        ipaddrField.setValue("");
        portField.setValue("");
        userIDField.setValue("");
        passwordField.setValue("");

    },

    onTbnServerSSHTestConnectionClick: function(button, e, eOpts) {
        var ipaddrField = Ext.getCmp("tomcatSSHIPAddressTextField");
        var portField = Ext.getCmp("tomcatSSHPortTextField");
        var userIDField = Ext.getCmp("tomcatSSHUserIDTextField");
        var passwordField = Ext.getCmp("tomcatSSHPasswordTextField");
        var url = GlobalData.urlPrefix + "res/machine/testssh";
        Ext.Ajax.request({
            url: url,
            method:"GET",
            params: {"sshIpAddr":ipaddrField.getValue(), "sshPort":portField.getValue(),
                     "sshUserName":userIDField.getValue(),"sshPassword":passwordField.getValue()
                    },
            success: function(resp, ops) {

                var response = Ext.decode(resp.responseText);

                if (response.success){
                    Ext.Msg.show({
                        title: "Message",
                        msg: response.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.INFO
                    });

                    Ext.getCmp("btnServerSSHSave").setDisabled(false);
                }
                else {
                    Ext.Msg.show({
                        title: "Message",
                        msg: response.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                    });
                      Ext.getCmp("btnServerSSHSave").setDisabled(true);
                }
            }

        });

    },

    loadTomcatServers: function(callback) {
        var url = GlobalData.urlPrefix + "res/machine/tomcatserver";
        Ext.Ajax.request({
            url: url,
            success: function(resp, ops) {
                var response = Ext.decode(resp.responseText);
                if(response.success){
                    callback(response.data);
                }
                else{
                    Ext.Msg.show({
                        title: "Message",
                        msg: response.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                    });
                }



            }
        });
    },

    loadEnvironmentVariables: function(machineId, callBack) {
        var url = GlobalData.urlPrefix + "res/machine/evlist";
        Ext.Ajax.request({
            url: url,
            params:{"machineId":machineId},
            success: function(resp, ops) {
                var response = Ext.decode(resp.responseText);
                if(response.success){
                    callBack(response.data);
                }
                else{
                    Ext.Msg.show({
                        title: "Message",
                        msg: response.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                    });
                }
            },
            method:"GET"
        });
    },

    loadEVRevisions: function(machineId, callback) {
        var url = GlobalData.urlPrefix + "res/machine/evlist";
        Ext.Ajax.request({
            url: url,
            params:{"machineId":machineId},
            success: function(resp, ops) {
                var response = Ext.decode(resp.responseText);
                if(response.success){
                    callback(response.data);
                }
                else{
                    Ext.Msg.show({
                        title: "Message",
                        msg: response.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                    });
                }
            },
            method:"GET"
        });
    },

    getServer: function(id, callback) {
        var url = GlobalData.urlPrefix + "res/machine/get";
        Ext.Ajax.request({
            url: url,
            params: {"id" : id},
            success: function(resp, ops) {
                var response = Ext.decode(resp.responseText);
                if(response.success === true){
                    callback(response.data);
                }
                else {
                    Ext.Msg.show({
                        title: "Message",
                        msg: response.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                    });
                }
            },
            method:"GET"
        });
    },

    init: function(application) {
        this.control({
            "#datagridServerGroupGrid": {
                select: this.onDatagridServerGroupGridSelect
            },
            "#tomcatServerGrid": {
                select: this.onTomcatServerGridSelect
            },
            "#btnServerSSHEdit": {
                click: this.onEditSSHClick
            },
            "#btnServerSSHSave": {
                click: this.onBtnServerSSHSaveClick
            },
            "#showPasswordCheckbox": {
                change: this.onShowPasswordCheckboxChange
            },
            "#btnServerSSHReset": {
                click: this.onBtnServerSSHResetClick
            },
            "#tbnServerSSHTestConnection": {
                click: this.onTbnServerSSHTestConnectionClick
            }
        });
    }

});
