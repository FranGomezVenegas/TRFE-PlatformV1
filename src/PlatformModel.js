export const PlatformModel = {
  "customerLogo":"./images/image.png",

  "operation-menus":[
    {
      "display": true,
      "label_en": "Procedures",
      "label_es": "Procesos",
      "hover": true,
      "isProcedureMenu": true
    },
    {
      "display": true,
      "label_en": "Notifications",
      "label_es": "Notificaciones",
      "clickRoute":"/dashboard/notifications",
      "componentToOpen": "notifications",
      "counter":{
        "position": "start",
        "variable": "notifications"
      }
    },
    {
      "display": true,
      "label_en": "My Certifications",
      "label_es": "Mis Certificaciones",
      "hover": true,
      "options":[
        {
          "label_en": "SOP",
          "label_es": "SOP",
          "clickRoute":"/dashboard/certifications?filterData=sop",
          "componentToOpen": "certifications",
          "counter":{
            "position": "start",
            "variable": "sops"
          }      
        },
        {
          "label_en": "Analytical Method",
          "label_es": "Método analítico",
          "clickRoute":"/dashboard/certifications?filterData=analytic",
          "componentToOpen": "certifications",
          "counter":{
            "position": "start",
            "variable": "analytics"
          }      
        },    
        {
          "label_en": "My Pending Approvals",
          "label_es": "Mis aprobaciones pendientes",
          "clickRoute":"/dashboard/certifications?filterData=myPendingCertificationApprovals",
          "componentToOpen": "certifications",
          "counter":{
            "position": "start",
            "variable": "myPendingCertifApprovals"
          }      
        }          
      ]
    },
    {
      "display": true,
      "label_en": "My Settings",
      "label_es": "Mi Configuración",
      "hover": true,
      "options":[        
        {
          "display": true,
          "label_en": "Incidents",
          "label_es": "Incidencias",
          "clickRoute":"/dashboard/incidents",
          "componentToOpen": "incidents",
        },
        {
          "display": true,
          "label_en": "User",
          "label_es": "Usuario",
          "clickRoute":"/dashboard/user",
          "componentToOpen": "user"
        },
        {
          "display": false,
          "label_en": "User Platform Sessions",
          "label_es": "Sesiones de Plataforma de Usuario",
          "clickRoute":"/dashboard/incidents",
          "componentToOpen": "ssss"
        },
        {
          "display": true,
          "label_en": "Video Tutorial",
          "label_es": "Tutorial en Video",
          "clickRoute":"/dashboard/tutorial",
          "componentToOpen": "tutorial"
        },
        {
          "display": true,
          "label_en": "Endpoints List",
          "label_es": "Lista de punto API",
          "clickRoute":"/dashboard/endpoints",
          "componentToOpen": "endpoints"
        },
        {
          "display": true,
          "label_en": "Holidays Calendar",
          "label_es": "Calendarios de Vacaciones",
          "clickRoute":"/dashboard/holidayscalendar",
          "componentToOpen": "holidayscalendar"
        }
      ]            
    }
  ],
  "headerAreas":{
    "proceduresOption": {
      "display": true,
      "tabLabel_en": "Procedures",
      "tabLabel_es": "Procesos"
    },    
    "notifications":{
      "display": true,
      "tabLabel_en": "Notifications",
      "tabLabel_es": "Notificaciones"
    },
    "myCertifications":{      
      "tabLabel_en": "My Certifications",
      "tabLabel_es": "Mis Certificaciones",
      "display": true,
      "sop": {
        "label_en": "SOP",
        "label_es": "SOP"
      },
      "analytic": {
        "label_en": "Analytical Method",
        "label_es": "Método analítico"
      },    
      "reviewerPendingSign": {
        "label_en": "My Pending Approvals",
        "label_es": "Mis aprobaciones pendientes"
      }  
    },
    "mySettings":{
      "display": true,
      "tabLabel_en": "My Settings",
      "tabLabel_es": "Mi Espacio",
      "incidents": {
        "display": true,
        "label_en": "Incidents",
        "label_es": "Incidencias"
      },
      "user": {
        "display": true,
        "label_en": "User",
        "label_es": "Usuario"
      },
      "platformusersessions": {
        "display": true,
        "label_en": "User Platform Sessions",
        "label_es": "Sesiones de Plataforma de Usuario"
      },
      "video": {
        "display": true,
        "label_en": "Video Tutorial",
        "label_es": "Tutorial en Video"
      },
      "endpoint": {
        "display": true,
        "label_en": "Endpoints List",
        "label_es": "Lista de punto API"
      },
      "holidaysCalendar": {
        "display": true,
        "label_en": "Holidays Calendar",
        "label_es": "Calendarios de Vacaciones"
      }
    },
    "doLogout": {
      "label_en": "Close Session",
      "label_es": "Cerrar Sesión"
    }
  }
}