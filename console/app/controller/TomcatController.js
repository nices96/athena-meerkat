/*
 * File: app/controller/TomcatController.js
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

Ext.define('webapp.controller.TomcatController', {
    extend: 'Ext.app.Controller',

    onNewTomcatClick: function(button, e, eOpts) {
        this.showTomcatWindow("new",0, GlobalData.lastSelectedMenuId);
    },

    onDomainTomcatTabTabChange: function(tabPanel, newCard, oldCard, eOpts) {
 
    },

    onBtnTomcatStartClick: function(button, e, eOpts) {
         this.changeState(GlobalData.lastSelectedMenuId, 1);
    },

    onBtnTomcatStopClick: function(button, e, eOpts) {
         this.changeState(GlobalData.lastSelectedMenuId, 2);
    },

    onBtnTomcatRestartClick: function(button, e, eOpts) {
        this.changeState(GlobalData.lastSelectedMenuId, 3);
    },

    onTestServerClick: function(button, e, eOpts) {
        var form = Ext.getCmp('tomcatForm');
        var server = form.getForm().findField("serverComboBox");
        var serverId = server.getValue();
        var url = GlobalData.urlPrefix + "res/machine/testConnection";
        var serverStatus = Ext.getCmp("serverStatusDisplayField");
        var btnSubmit = Ext.getCmp("btnTomcatSubmit");
         Ext.Ajax.request({
             url: url,
             params: {"id": serverId},
             success: function(resp, ops) {
                 var response = Ext.decode(resp.responseText);
                 if (response === true){
                     serverStatus.setValue("Connection success!");
                     serverStatus.setFieldStyle("color:blue");
                     btnSubmit.enable();
                 }
                 else {
                     serverStatus.setValue("Connection fail!");
                     serverStatus.setFieldStyle("color:red");
                     btnSubmit.disable();
                 }
             },
             method: "GET"
         });
    },

    onBtnTomcatSubmitClick: function(button, e, eOpts) {
        var form = Ext.getCmp("tomcatForm");			// domain form

        var name = form.getForm().findField("newTomcatNameField");
        var server = form.getForm().findField("serverComboBox");
        var _id = form.getForm().findField("tomcatHiddenField");

        var tomcatVersion = form.getForm().findField("tomcatVersionTextField");
        var javaHome = form.getForm().findField("tomcatJavaHomeTextField");
        var catalinaHome = form.getForm().findField("tomcatCatalinaHomeTextField");
        var catalinaBase = form.getForm().findField("tomcatCatalinaBaseTextField");
        var encoding = form.getForm().findField("tomcatEncodingTextField");
        var heapSize = form.getForm().findField("tomcatHeapSizeTextField");
        var permgenSize = form.getForm().findField("tomcatPermgenSizeTextField");
        var httpEnable = form.getForm().findField("tomcatHttpEnableCheckBox");
        var highAvailability = form.getForm().findField("tomcatHighAvailabilityCheckBox");
        var jmxPort = form.getForm().findField("jmxPortField");

        var autoRestart =  Ext.getCmp("autoRestartTomcatCheckbox");
        var httpPort = form.getForm().findField("httpPortField");
        var ajpPort = form.getForm().findField("ajpPortField");
        var redirectPort = form.getForm().findField("redirectPortField");

        var nameVal = name.getValue();
        var serverVal = server.getValue();
        var _idVal = _id.getValue();
        var httpPortVal = httpPort.getValue();
        var ajpPortVal = ajpPort.getValue();
        var redirectPortVal = redirectPort.getValue();
        var autoRestartVal = autoRestart.getValue();

        var tomcatVersionVal = tomcatVersion.getValue();
        var javaHomeVal = javaHome.getValue();
        var catalinaHomeVal = catalinaHome.getValue();
        var catalinaBaseVal = catalinaBase.getValue();
        var encodingVal = encoding.getValue();
        var heapSizeVal = heapSize.getValue();
        var permgenSizeVal = permgenSize.getValue();
        var httpEnableVal = httpEnable.getValue();
        var highAvailabilityVal = highAvailability.getValue();
        var jmxPortVal = jmxPort.getValue();

        var selectedDsIds = "";
        var items = Ext.getCmp("datasourceGrid").getStore();
        items.each(function(rec){
            if(rec.get("selected") === true){
                selectedDsIds += "#" + rec.get("id");
            }
        });

        if(!this.validate(nameVal, serverVal, httpPortVal, ajpPortVal,redirectPortVal)){
            return;
        }
        if(_idVal === ""){
            _idVal = 0;
        }

        var params = {"id":_idVal, "name": nameVal, "machineId": serverVal, "httpPort":httpPortVal, "ajpPort":ajpPortVal,
                      "redirectPort":redirectPortVal, "domainId":GlobalData.lastSelectedMenuId ,"version":tomcatVersionVal, "javaHome": javaHomeVal,"catalinaHome":catalinaHomeVal,
                      "catalinaBase":catalinaBaseVal,"encoding":encodingVal, "heapSize":heapSizeVal, "permgenSize":permgenSizeVal,"httpEnable":httpEnableVal,"highAvailability":highAvailabilityVal,
                      "jmxPort":jmxPortVal, "dsIds": selectedDsIds, "autoRestart":autoRestartVal};
        this. save(params, function(data){
            Ext.getCmp("associatedTomcatListView").getStore().loadData(new Array(data), true);
            var dsGrid = Ext.getCmp("tomcatDatasourcesGrid");
            if(dsGrid !== null){
                dsGrid.getStore().loadData(data.datasources);
            }
            webapp.app.getController("MenuController").loadTomcatList(GlobalData.lastSelectedMenuId);
            button.up("window").close();
        });

    },

    onServerComboBoxSelect: function(combo, records, eOpts) {
        var testConnectionButton = Ext.getCmp("btnTestConnection");
        var sshUserDisplayField = Ext.getCmp("sshUserDisplayField");
        var bindIPAddressDisplayField = Ext.getCmp("bindIPAddressDisplayField");
        var otherBindIPAddressDisplayField = Ext.getCmp("otherBindIPAddressDisplayField");
        var id = combo.getValue();

        webapp.app.getController("ServerManagementController").getServer(id,function(data){
            testConnectionButton.setDisabled(false);
            sshUserDisplayField.setValue(data.sshUsername);
            bindIPAddressDisplayField.setValue(data.sshipaddr);
            otherBindIPAddressDisplayField.setValue(data.sshipaddr);
        });

    },

    changeState: function(id, state) {
        var url = GlobalData.urlPrefix;
        var newState = "";
        var action = "";
        if(state === 1) {// start
            url += "tomcat/instance/start";
            newState = "Started";
            action = "start";
        }
        else if(state===2) {//stop
            url += "tomcat/instance/stop";
            newState = "Stopped";
            action = "stop";
        }
        else if(state === 3) {//restart
            url += "tomcat/instance/restart";
            newState = "Restarted";
            action = "restart";
        }
        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to ' + action +' this application?', function(btn){
            if(btn == "yes"){

                Ext.Ajax.request({
                    url: url,
                    params: {"id" : id},
                    success: function(resp, ops) {
                        var response = Ext.decode(resp.responseText);
                        if(response.success === true){
                            Ext.getCmp("tomcatStateField").setValue(newState);
                            if (response.data === 1) {
                                Ext.getCmp("btnTomcatStart").disable();
                                Ext.getCmp("btnTomcatStop").enable();
                                Ext.getCmp("btnTomcatRestart").enable();
                            }else if (response.data === 2){
                                Ext.getCmp("btnTomcatStart").enable();
                                Ext.getCmp("btnTomcatStop").disable();
                                Ext.getCmp("btnTomcatRestart").disable();

                            }
                        }
                        else {
                            Ext.Msg.show({
                                title: "Message",
                                msg: response.msg,
                                buttons: Ext.Msg.OK,
                                icon: Ext.Msg.WARNING
                            });
                        }

                    }
                });
            }
        });
    },

    getTomcatInstance: function(id, callback) {
        var url = GlobalData.urlPrefix + "tomcat/instance/get";
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
            }
        });
    },

    displayTomcatInstance: function(id) {
         this.getTomcatInstance(id,function(tomcat){
             Ext.getCmp("tomcatNameField").setValue(tomcat.name);
             Ext.getCmp("tomcatStateField").setValue(tomcat.state === 1?"Started":"Stopped");
             if (tomcat.state === 1) {
                 Ext.getCmp("btnTomcatStart").disable();
                 Ext.getCmp("btnTomcatStop").enable();
                 Ext.getCmp("btnTomcatRestart").enable();
             }else if (tomcat.state === 2){
                 Ext.getCmp("btnTomcatStart").enable();
                 Ext.getCmp("btnTomcatStop").disable();
                 Ext.getCmp("btnTomcatRestart").disable();

             }
             Ext.getCmp("tomcatIPAddField").setValue(tomcat.ipaddress);
             Ext.getCmp("tomcatPortField").setValue("{HTTP:"+tomcat.httpPort+", AJP:"+tomcat.ajpPort+", redirect:"+tomcat.redirectPort+"}");
             Ext.getCmp("tomcatOSField").setValue(tomcat.osname);
             Ext.getCmp("tomcatJVMVersionField").setValue(tomcat.jvm);
             Ext.getCmp("tomcatWebServerField").setValue(tomcat.webServer);
             Ext.getCmp("tomcatDomainField").setValue(tomcat.domainName);

             Ext.getCmp("tomcatApplicationGrid").getStore().loadData(tomcat.applications, false);
             Ext.getCmp("tomcatDatasourcesGrid").getStore().loadData(tomcat.datasources, false);

         });
    },

    showTomcatWindow: function(type, id, domainId) {
        var tomcatWindow = Ext.create("widget.TomcatInstanceWindow");
        var submitButton = Ext.getCmp("btnTomcatSubmit");
        var form = Ext.getCmp("tomcatForm");			// tomcat form

        var domain = form.getForm().findField("domainField");
        var domainType = form.getForm().findField("domainTypeDisplayField");

        if(domainId !== 0) {
            Ext.Ajax.request({
                url: GlobalData.urlPrefix + "domain/get",
                params: {"id": domainId},
                success: function(resp, ops) {
                    var response = Ext.decode(resp.responseText);
                    domain.setValue(response.data.name);
                    domainType.setValue(response.data.clusteringString);
                },
                method:"GET"
            });
        }

        var url  = "";
        var params= {};
        if (type === "edit"){
            tomcatWindow.setTitle("Edit Tomcat instance");
            submitButton.setText("Save");

            var name = form.getForm().findField("newTomcatNameField");
            var server = form.getForm().findField("serverComboBox");
            var _id = form.getForm().findField("tomcatHiddenField");
            Ext.getStore("MachineStore").load();
            var httpPort = form.getForm().findField("httpPortField");
            var ajpPort = form.getForm().findField("ajpPortField");
            var redirectPort = form.getForm().findField("redirectPortField");

            var tomcatVersion = form.getForm().findField("tomcatVersionTextField");
            var javaHome = form.getForm().findField("tomcatJavaHomeTextField");
            var catalinaHome = form.getForm().findField("tomcatCatalinaHomeTextField");
            var catalinaBase = form.getForm().findField("tomcatCatalinaBaseTextField");
            var encoding = form.getForm().findField("tomcatEncodingTextField");
            var heapSize = form.getForm().findField("tomcatHeapSizeTextField");
            var permgenSize = form.getForm().findField("tomcatPermgenSizeTextField");
            var httpEnable = form.getForm().findField("tomcatHttpEnableCheckBox");
            var highAvailability = form.getForm().findField("tomcatHighAvailabilityCheckBox");
            var jmxPort = form.getForm().findField("jmxPortField");
            //get tomcat info
            Ext.Ajax.request({
                url: GlobalData.urlPrefix + "tomcat/instance/get",
                params:{"id":id},
                success:function(resp, ops){
                    var response = Ext.decode(resp.responseText);
                    if(response.success === true){
                        name.setValue(response.data.name);
                        httpPort.setValue(response.data.httpPort);
                        ajpPort.setValue(response.data.ajpPort);
                        redirectPort.setValue(response.data.redirectPort);
                        domain.setValue(response.data.domainName);
                        domainType.setValue(response.data.domainStatus);
                        server.setValue(response.data.machineId);
                        _id.setValue(response.data.id);

                        tomcatVersion.setValue(response.data.version);
                        javaHome.setValue(response.data.javaHome);
                        catalinaHome.setValue(response.data.catalinaHome);
                        catalinaBase.setValue(response.data.catalinaBase);
                        encoding.setValue(response.data.encoding);
                        heapSize.setValue(response.data.heapSize);
                        permgenSize.setValue(response.data.permgenSize);
                        httpEnable.setValue(response.data.httpEnable);
                        highAvailability.setValue(response.data.highAvailability);
                        jmxPort.setValue(response.data.jmxPort);

                        webapp.app.getController("ServerManagementController").getServer( response.data.machineId,function(data){
                            //testConnectionButton.setDisabled(false);
                             Ext.getCmp("sshUserDisplayField").setValue(data.sshUsername);
                            Ext.getCmp("bindIPAddressDisplayField").setValue(data.sshipaddr);
                            Ext.getCmp("otherBindIPAddressDisplayField").setValue(data.sshipaddr);
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
                }
            });



            url = GlobalData.urlPrefix + "datasource/tomcat/link/list";
            params = {"tomcatId":id};
        }
        else {
            url = GlobalData.urlPrefix + "datasource/tomcat/link/list/all";
        }

        //get datasource list info
        if(url !== ""){
            Ext.Ajax.request({
                url: url,
                params:params,
                success: function(resp, ops) {
                    var response = Ext.decode(resp.responseText);
                    if(response.success === true){
                        var gridStore = Ext.getCmp("datasourceGrid").getStore();
                        gridStore.loadData(response.data);
                    }
                    else {
                        Ext.Msg.show({
                            title: "Message",
                            msg: response.msg,
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.WARNING
                        });
                    }
                }
            });
        }

        tomcatWindow.show();
    },

    validate: function(name, server, httpPort, ajpPort, redirectPort) {
        if(name === "" || httpPort === "" ||  redirectPort === "" || ajpPort === "" || server <= 0){
            Ext.Msg.show({
                title: "Message",
                msg: "Invalid data.",
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
            return false;
        }
        return true;
    },

    save: function(params, callback) {

        var url = GlobalData.urlPrefix + "tomcat/save";
        Ext.Ajax.request({
            url: url,
            params: params,
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
            }
        });


    },

    loadDataBusyThreadChart: function(tomcatId) {
         var busyThread= GlobalData.urlPrefix + "monitor/jmx/"+ tomcatId +"/threadpool/count";
        Ext.Ajax.request({
                url: busyThread,
                //params: {"tomcatId": tomcatId},
                success: function(resp, ops) {
                    var response = Ext.decode(resp.responseText);
                    if (response.success === true){
                        Ext.getCmp("tomcatBusyThreadChart").getStore().loadData(response.data);
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

    init: function(application) {
        this.control({
            "#btnNewTomcat": {
                click: this.onNewTomcatClick
            },
            "#domainTomcatTab": {
                tabchange: this.onDomainTomcatTabTabChange
            },
            "#btnTomcatStart": {
                click: this.onBtnTomcatStartClick
            },
            "#btnTomcatStop": {
                click: this.onBtnTomcatStopClick
            },
            "#btnTomcatRestart": {
                click: this.onBtnTomcatRestartClick
            },
            "#btnTestConnection": {
                click: this.onTestServerClick
            },
            "#btnTomcatSubmit": {
                click: this.onBtnTomcatSubmitClick
            },
            "#serverComboBox": {
                select: this.onServerComboBoxSelect
            }
        });
    }

});
