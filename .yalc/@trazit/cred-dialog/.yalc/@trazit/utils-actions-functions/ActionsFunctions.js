export function ActionsFunctions(base) {
  return class extends (base) {
    
      trazitButtonsMethod(e, isRowButton, action, replace = true, actionNumIdx, selectedItemPropertyName, data, isProcManagement, parentData, dragEntry, dropEntry) {
          e.stopPropagation();
          if (isRowButton!==true&&this.selectedItems!==undefined&&this.selectedItems.length>1){
            alert("New feature for multiselect not available yet, please select single row at a time")
            return
          }
          sessionStorage.setItem('actionName', action.actionName);
          selectedItemPropertyName = selectedItemPropertyName || 'selectedItems'
          console.log('actionMethod', this.selectedProcInstance, isProcManagement)
          //this.loadDialogs()
          if (data !== undefined && this.selectedItems === undefined) {
            this.selectedItems = [];        
            if (Array.isArray(data)) {
                // Si data es un array, clona el array en selectedItems
                this.selectedItems = [...data];
            } else if (typeof data === 'object' && Object.keys(data).length > 0) {
                // Si data es un objeto, empuja el objeto en selectedItems
                this.selectedItems.push(data);
            }
          }
          let targetValue={}
          if (selectedItemPropertyName!==undefined){
            targetValue.boxValue=selectedItemPropertyName.value
          }
          console.log('actionMethod', 'action', action, 'selectedItems', this.selectedItems, 'parentData', parentData)
          if (action === undefined) {
              alert('action not passed as argument')
              return
          }
  
          if (action.dialogInfo!==undefined&&action.dialogInfo.name == "testScriptUpdateStepDialog") {
              action.actionName = "SCRIPT_UPDATE_STEP";
              action.dialogInfo.name = "testScriptNewStepDialog";
          }
          this.actionBeingPerformedModel = action;
          if (action.requiresDialog === undefined) {
              alert('The action ' + action.actionName + ' has no requiresDialog property which is mandatory')
              return
          }
          if (data===undefined){
            if (this[selectedItemPropertyName] !== undefined) {
              data=this[selectedItemPropertyName]
              if (Array.isArray(data)) {
                // Si es un array, toma el valor de la propiedad del primer objeto
                if (data.length > 0 && typeof data[0] === 'object' && data[0] !== null) {
                 data=data[0]
                } else {
                  data=null
                }
              } else if (typeof data === 'object' && data !== null) {
                  // Si es un objeto, toma el valor de la propiedad directamente
                  data=data
              }
            }            
          }
          if (action.requiresDialog === false) {
              if (action.clientMethod !== undefined) {
                this[action.clientMethod](action, this[selectedItemPropertyName][0])
                return
              } else {
                this.trazitNoDialogRequired(action, data, targetValue, isProcManagement, undefined, parentData, dragEntry, dropEntry)
                return
              // if (data!==undefined){
              //   this.trazitNoDialogRequired(action, data, targetValue, isProcManagement, undefined, parentData, dragEntry, dropEntry)
              // }else if (this[selectedItemPropertyName] !== undefined) {
              //     data=this[selectedItemPropertyName]
              //     if (Array.isArray(data)) {
              //       // Si es un array, toma el valor de la propiedad del primer objeto
              //       if (data.length > 0 && typeof data[0] === 'object' && data[0] !== null) {
              //         this.trazitNoDialogRequired(action, data[0], targetValue, isProcManagement, undefined, parentData, dragEntry, dropEntry)                  
              //       } else {
              //         this.trazitNoDialogRequired(action, null, targetValue, isProcManagement, undefined, parentData, dragEntry, dropEntry)                  
              //       }
              //   } else if (typeof data === 'object' && data !== null) {
              //       // Si es un objeto, toma el valor de la propiedad directamente
              //       this.trazitNoDialogRequired(action, data, targetValue, isProcManagement, undefined, parentData, dragEntry, dropEntry)                  
              //   }
              // }
              //return
              }
          }
          if (action.requiresGridItemSelected !== undefined && action.requiresGridItemSelected === true &&
              (this[selectedItemPropertyName] === undefined || this[selectedItemPropertyName][0] === undefined)) {
              alert('Please select one item in the table prior')
              return
          }
          this.GetQueriesForDialog(action)
          this.getGenericDialogGridItems(action.dialogInfo)
  
this.requestUpdate();

          //this.loadDialogs()
          console.log("action.dialogInfo.name", action.dialogInfo.name);
          if (action.dialogInfo!==undefined&&action.dialogInfo.name === "auditDialog") {
              this[action.clientMethod]()
              return
          }
          if (true){
          //if (action.dialogInfo!==undefined&&this[action.dialogInfo.name]) {
              if (action.dialogInfo.subQueryName) {
              this[action.dialogInfo.subQueryName]()
              } else {
                if (data!==undefined){
                  this.selectedItem=data
                  this[action.dialogInfo.name].show(this.actionBeingPerformedModel, action, data);
                }else{
                  this.selectedItem=this[selectedItemPropertyName][0]
                  this[action.dialogInfo.name].show(this.actionBeingPerformedModel, action, this[selectedItemPropertyName][0]);
                }
              }
              this.requestUpdate();              
          }
          
          else if (action.dialogInfo!==undefined&&action.dialogInfo.name == "testScriptUpdateStepDialog") {
              this["testScriptNewStepDialog"].show();
          }
          else {
              if (action.dialogInfo!==undefined){
              alert('the action ' + action.actionName + ' has no dialog defined')
              }else{
              alert('the dialog ' + action.dialogInfo.name + ' does not exist')
              }
          }
      }
  
      trazitNoDialogRequired(action, data, targetValue, isProcManagement, gridSelectedRow, parentData, dragEntry, dropEntry) {
          console.log('trazitNoDialogRequired', 'action', action, 'data', data, 'gridSelectedRow', gridSelectedRow, 'parentData', parentData)
          this.selectedAction = action
          if (targetValue === undefined) { targetValue = {} }
          if (this.itemId) {
            this.trazitCredsChecker(action.actionName, this.itemId, this.jsonParam(this.selectedAction, data, targetValue, gridSelectedRow, parentData, dragEntry, dropEntry), action, isProcManagement, gridSelectedRow, parentData, dragEntry, dropEntry)
          } else {
            this.trazitCredsChecker(action.actionName, data, this.jsonParam(this.selectedAction, data, targetValue, gridSelectedRow, parentData, dragEntry, dropEntry), action, isProcManagement, gridSelectedRow, parentData, dragEntry, dropEntry)
          }
          // Comentado para habilitar confirmDialogsparentData
          // this.trazitPerformAPICall(action, selectedItem)
          return
      }
  
    /**
     *
     * @param {*} actionName
     * @param {*} objId -1 will show up the creds dialog, e.g user profile open the creds dialog.
     * @param {*} params ref of this.reqParams
     * @param {*} action ref of action object
     */
  
    
    trazitCredsChecker(actionName, procInstanceName, objId, params={}, action, isProcManagement, gridSelectionData, parentData, dragEntry, dropEntry) {
  //    console.log('trazitCredsChecker', 'isProcManagement', isProcManagement, 'action', action, 'parentData', parentData)
      this.actionObj = action || {}
      this.reqParams = params
      if (actionName) {
          let thisActionInfoForAPI = {
              action: action,
              actionParams: params,
              gridSelectedItem: gridSelectionData,
              parentData: parentData
              };
          sessionStorage.setItem('actionInfoToAPIcall', JSON.stringify(thisActionInfoForAPI));
  
        //action.actionName = actionName
        if (objId == -1) {
          this.credDialog.show()
        } else {
          this.objectId = objId
          let credInfo = this.trazitCheckProcList(procInstanceName, action)
          //credInfo is true when no need credentials or the cred type when required
          if (credInfo===true) {
            this.trazitNextRequest(action, params, {}, gridSelectionData, parentData)
          } else {
            
            if (credInfo == "confirm") {
              let confirmDialog = this.shadowRoot.querySelector("#confirmDialog");
              if (confirmDialog){
                confirmDialog.show()
              }else{
                if (this.confirmDialog){
                  this.confirmDialog.show()
                }else{
                  alert('confirmDialog not loaded')
                }
              }
            } else {
              let credDialog = this.shadowRoot.querySelector("#credDialog");
              if (credDialog){
                credDialog.show()
              }else{
                if (this.credDialog){
                  this.credDialog.show()
                }else{
                  alert('credDialog not loaded')
                }
              }              
            }
          }
        }
      }
    }
  
    /**
     * set the justification type, generate justification list for non text type
     */
     trazitCheckProcList(procInstanceName, action) {
      let type
      if (procInstanceName===null||procInstanceName===undefined||procInstanceName.length==0){
        let currentTabView=JSON.parse(sessionStorage.getItem("currentOpenView"))
        if (currentTabView!==null&&currentTabView!==undefined&&currentTabView.procInstanceName!==undefined){
          procInstanceName=currentTabView.procInstanceName
        }
      }
      if (procInstanceName===null||procInstanceName===undefined||procInstanceName.length==0){
        procInstanceName=sessionStorage.getItem("currentProcInstanceName")          
      }      

      let userSession=JSON.parse(sessionStorage.getItem("userSession"))
      let isProcManagement=userSession.isProcManagement

      // if (this.area!==undefined&&this.area==="app"){
      //   return true
      // }
      let bypass = true
      let justificationType = null
      let justificationList = null
      let pArr = []
      let procList = JSON.parse(sessionStorage.getItem("userSession")).procedures_list.procedures
      if (isProcManagement!==undefined&&isProcManagement===true){
        pArr = procList.filter(p => p.procInstanceName == 'app')
      }else{
        pArr = procList.filter(p => p.procInstanceName == procInstanceName)
      }
      if (isProcManagement&&(pArr===null||pArr===undefined||pArr.length==0)){
        return true
      }
      let p = pArr[0]
      bypass = true
        if (p.actions_with_esign.indexOf(action.actionName) >= 0) {
          let idx = p.actions_with_esign.findIndex(p => p == action.actionName)
          --idx // the object is on the previous index
          if (p.actions_with_esign[idx][action.actionName].type) {
            justificationType = p.actions_with_esign[idx][action.actionName].type
            if (justificationType != "TEXT") {
              justificationList = p.actions_with_esign[idx][action.actionName].list_entries
            }
          }
          type = "esign"
          bypass = false
        } else if (p.actions_with_confirm_user.indexOf(action.actionName) >= 0) {
          let idx = p.actions_with_confirm_user.findIndex(p => p == action.actionName)
          --idx // the object is on the previous index
          if (p.actions_with_confirm_user[idx][action.actionName].type) {
            justificationType = p.actions_with_confirm_user[idx][action.actionName].type
            if (justificationType != "TEXT") {
              justificationList = p.actions_with_confirm_user[idx][action.actionName].list_entries
            }
          }
          type = "user"
          bypass = false
        } else if (p.actions_with_justification_phrase.indexOf(action.actionName) >= 0) {
          let idx = p.actions_with_justification_phrase.findIndex(p => p == action.actionName)
          --idx // the object is on the previous index
          if (p.actions_with_justification_phrase[idx][action.actionName].type) {
            justificationType = p.actions_with_justification_phrase[idx][action.actionName].type
            if (justificationType===null||justificationType===undefined||justificationType.length==0||justificationType.length==='LABPLANET_FALSE'){
              console.log('In procedure business rules, for action '+action.actionName+', No confirmDialogDetail specified, it will use TEXT then')
              justificationType="TEXT"
            }
  
            if (justificationType != "TEXT") {
              justificationList = p.actions_with_justification_phrase[idx][action.actionName].list_entries
            }
          }
          type = "justification"
          bypass = false
        } else if (p.actions_with_action_confirm.indexOf(action.actionName) >= 0) {
          type = "confirm"
          bypass = false
        }
      if (bypass) return true

      return type
    }
  
    trazitNextRequest(action, actionParams, credArguments, gridSelectedItem, parentData) {
      if (action===undefined||action.actionName===undefined){
        action=this.actionBeingPerformedModel
      }
      action = action || this.auditAction ||this.actionBeingPerformedModel;
      console.log('trazitNextRequest', 'credArguments', credArguments)
      if (action!==undefined&&action.alternativeItemPropertyName!==undefined){
        this.selectedItems=this[action.alternativeItemPropertyName]
      }
      if (this.selectedItems===undefined){
        this.selectedItems=[]
        this.selectedItems.push({})
      }
      if (this.targetValue===undefined){
        this.targetValue={}
      }
      if (action!==undefined){
        this.trazitPerformAPICall(action, actionParams, credArguments, gridSelectedItem, gridSelectedItem)
      }
      let cleanParams = {}
      Object.entries(this.reqParams).map(([key, value]) => {
        if (value != null || value != undefined) {
          cleanParams[key] = value
        }
      })
      this.reqParams = cleanParams
      if (this.credDialog) {
        if (action===undefined
          ||action.keepTheDialogOpen===undefined
          ||action.keepTheDialogOpen===false){
              this.credDialog.close()
        }else{
          // e.stopPropagation()
        }
      }
    }
    async trazitPerformAPICall(action, actionParams, credDialogArgs = {}, selectedItem, gridSelectedItem = {}) {
      sessionStorage.removeItem('actionInfoToAPIcall');
      if (action.alternativeAPIActionMethod !== undefined) {
        this[action.alternativeAPIActionMethod]()
        return
      }
      if (gridSelectedItem === undefined || gridSelectedItem === null) {
        if (this.genericDialogGridSelectedItems !== undefined && this.genericDialogGridSelectedItems.length > 0) {
          gridSelectedItem = this.genericDialogGridSelectedItems[0]
        }
      }
      
      let serviceAPIurl = this.getServiceAPIUrl(action)
      let endPointUrl = this.getActionAPIUrl(action)
      let APIParams = this.getAPICommonParams(action)
      if (String(endPointUrl).toUpperCase().includes("ERROR")) {
        alert(endPointUrl)
        return
      }
      let params = ""
      params = serviceAPIurl + endPointUrl
      params = params + '?' + new URLSearchParams(APIParams) + '&' + new URLSearchParams(actionParams) + '&' + new URLSearchParams(credDialogArgs)
    
      try {
        const j = await this.fetchApi(params)
        
        if (action !== undefined) {
          await this.refreshMasterData(j, action)
          await this.printLabels(j, action)
        }
    
        if (action.notGetViewData === undefined || action.notGetViewData === false) {
          this.GetViewData()
        }
    
        this.selectedItems[0] = selectedItem;
        action = this.actionBeingPerformedModel
        let actionRefreshQuery = []
        if (action.dialogInfo !== undefined && action.dialogInfo.name !== undefined && action.dialogInfo.name === 'resultDialog') {
          if (action.dialogInfo.keyFldName !== undefined) {
            this.actionMethodResults(action, this.selectedItems, this.selectedItems[0][action.dialogInfo.keyFldName])
          } else {
            if (action.dialogInfo.viewQuery.endPointParams[0].selObjectPropertyName !== undefined) {
              this.actionMethodResults(action, this.selectedItems, this.selectedItems[0][action.dialogInfo.viewQuery.endPointParams[0].selObjectPropertyName])
            } else {
              this.actionMethodResults(action, this.selectedItems, '')
            }
          }
        }
    
        if (action !== undefined && action.dialogInfo !== undefined && action.dialogInfo.name !== undefined
          && action !== null && action.dialogInfo !== null && action.dialogInfo.name !== null) {
          if (this[action.dialogInfo.name] !== undefined) {
            this[action.dialogInfo.name].close()
          }
        }
    
        if (action.secondaryActionToPerform !== undefined) {
          this[action.secondaryActionToPerform.name]()
        }
    
        if (action.variableToSetResponse !== undefined) {
          if (this[action.variableToSetResponse] !== undefined) {
            this[action.variableToSetResponse] = j
          }
        }
    
      } catch (error) {
        console.error('Error performing API call:', error)
      }
    }
    
  
    xxxcredsChecker(actionName, objId, params={}, action, isProcManagement, gridSelectionData, parentData, dragEntry, dropEntry) {
      console.log('credsChecker', 'isProcManagement', isProcManagement, 'action', action, 'parentData', parentData)
      this.actionObj = action || {}
      this.reqParams = params
      if (actionName) {
        action.actionName = actionName
        if (objId == -1) {
          this.credDialog.show()
        } else {
          this.objectId = objId
          let noNeedCreds = this.xxxcheckProcList(isProcManagement)
          if (noNeedCreds) {
            this.trazitNextRequest(action, gridSelectionData, parentData, dragEntry, dropEntry)
          } else {
            if (type == "confirm") {
              this.confirmDialog.show()
            } else {
              this.credDialog.show()
            }
          }
        }
      }
    }
    xxxcheckProcList(isProcManagement) {
      if (isProcManagement===undefined){
        let userSession=JSON.parse(sessionStorage.getItem("userSession"))
        isProcManagement=userSession.isProcManagement
      }         
      if (isProcManagement!==undefined&&isProcManagement===true){
        return true
      }
      if (this.area!==undefined&&this.area==="app"){
        return true
      }
      //console.log('trazitCheckProcList')
      let bypass = true
      // justificationType = null
      // justificationList = null
      // let procList2 = JSON.parse(sessionStorage.getItem("userSession")).procedures_list.procedures
      // bypass = true
      // procList2.forEach(p => {
      //   //let idx = p.actions_with_confirm_user.findIndex(p => p == action.actionName)
      //   //if (p.actions_with_esign[idx][action.actionName].type) {
      //     //justificationType = p.actions_with_esign[idx][action.actionName].type
      //     //if (justificationType != "TEXT") {
      //     //  justificationList = p.actions_with_esign[idx][action.actionName].list_entries
      //     //}
      //   //}
      // })
      // type = "esign"
      // bypass = false
      // return bypass
  
  
  
      // // type = "confirm"
      // // bypass = false
      // // alert('Temporalmente en credDialog, toda acción requiere confirmacion')
      // // return bypass
      // alert('Temporalmente en credDialog, se ha deshabilitado el tema de las confirmaciones ... ')
      // return true
      justificationType = null
      justificationList = null
      let pArr = []
      let procList = JSON.parse(sessionStorage.getItem("userSession")).procedures_list.procedures
      if (isProcManagement!==undefined&&isProcManagement===true){
        pArr = procList.filter(p => p.procInstanceName == 'proc_management')
      }else{
        pArr = procList.filter(p => p.procInstanceName == procInstanceName)
      }
      if (isProcManagement&&(pArr===undefined||pArr.length==0)){
        return true
      }
      let p = pArr[0]
      bypass = true
  //    procList.forEach(p => {
        if (p.actions_with_esign.indexOf(action.actionName) >= 0) {
          let idx = p.actions_with_esign.findIndex(p => p == action.actionName)
          --idx // the object is on the previous index
          if (p.actions_with_esign[idx][action.actionName].type) {
            justificationType = p.actions_with_esign[idx][action.actionName].type
            if (justificationType != "TEXT") {
              justificationList = p.actions_with_esign[idx][action.actionName].list_entries
            }
          }
          type = "esign"
          bypass = false
        } else if (p.actions_with_confirm_user.indexOf(action.actionName) >= 0) {
          let idx = p.actions_with_confirm_user.findIndex(p => p == action.actionName)
          --idx // the object is on the previous index
          if (p.actions_with_confirm_user[idx][action.actionName].type) {
            justificationType = p.actions_with_confirm_user[idx][action.actionName].type
            if (justificationType != "TEXT") {
              justificationList = p.actions_with_confirm_user[idx][action.actionName].list_entries
            }
          }
          type = "user"
          bypass = false
        } else if (p.actions_with_justification_phrase.indexOf(action.actionName) >= 0) {
          let idx = p.actions_with_justification_phrase.findIndex(p => p == action.actionName)
          --idx // the object is on the previous index
          if (p.actions_with_justification_phrase[idx][action.actionName].type) {
            justificationType = p.actions_with_justification_phrase[idx][action.actionName].type
            if (justificationType===undefined||justificationType.length==0||justificationType.length==='LABPLANET_FALSE'){
              console.log('In procedure business rules, for action '+action.actionName+', No confirmDialogDetail specified, it will use TEXT then')
              justificationType="TEXT"
            }
  
            if (justificationType != "TEXT") {
              justificationList = p.actions_with_justification_phrase[idx][action.actionName].list_entries
            }
          }
          type = "justification"
          bypass = false
        } else if (p.actions_with_action_confirm.indexOf(action.actionName) >= 0) {
          type = "confirm"
          bypass = false
        }
    //  })
      // bypass / no need creds process
      if (bypass) return true
    }
  }}