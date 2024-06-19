//Any JS file will follow this syntax
sap.ui.define( 
            //Hey UI5, this is not a normal class
            //rather its a controller class
            ["sap/ui/core/mvc/Controller",] , 
            function(oController) {
                    
                    return oController.extend("mickey.controller.Main",{
                                //global variable
                                oMyview: null,
                                onInit: function() {
                                    // Initialize your global variable
                                    this.oMyview = this.getView();
                                 },
                            
                                //This is the standard function which every controller will have
                                myCode:function(){
                                       var oInp = sap.ui.getCore().byId("idInp");
                                       if(oInp.getValue() === ""){
                                               alert("Please enter some value");    
                                            return
                                            }
                                            alert(oInp.getValue());

                                    var oView = this.getView();
                                    oView = sap.ui.getCore().byId("idXMLView");
                                    oView.setVisible(true);
                                },
                                onClickButton:function(){
                                        //step 1: get the object of my xml view  
                                        var oview = this.getView("idXMLView");       
                                        //step 2: get the object of input field
                                        var oInp = oview.byId("idXMLField");
                                        //step 3: get the value of input field  
                                        var sValue = oInp.getValue();
                                        //step 4: print it
                                        alert(sValue);
                                },
                                onSubmit:function(){    
                                        var oId = this.oMyview.byId("idEmpId").getValue();
                                        var oName = this.oMyview.byId("idEmpName").getValue();
                                        var oAge = this.oMyview.byId("idEmpAge").getValue();
                                        var oSal = this.oMyview.byId("idEmpSal").getValue();
                                        var ocurr = this.oMyview.byId("idEmpCurr").getValue();
                                        var oSmoker = "No";
                                        if (this.oMyview.byId("idSmoker").getSelected() === true) {var oSmoker = "Yes";}

                                        console.log("EMP ID :"+oId+"\nEMP Name : "+oName+"\nEMP Age : "+oAge+"\nEMP Salary : "+oSal+"\nEMP Currency : "+ocurr+"\nSmoker : "+oSmoker);
                                }
                    })
                }
);
